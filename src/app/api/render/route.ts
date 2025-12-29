import { NextRequest, NextResponse } from 'next/server';
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { pathToFileURL } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from 'ffmpeg-static';

// FFmpeg Binary yolunu ayarla
if (ffmpegInstaller) {
    ffmpeg.setFfmpegPath(ffmpegInstaller);
}

// Videoyu H.264 formatına dönüştüren yardımcı fonksiyon
const convertToCompatibleFormat = (inputPath: string, outputPath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .outputOptions([
                '-c:v libx264',      // Video Codec: H.264 (En uyumlu format)
                '-preset ultrafast', // Hızlı dönüştürme için
                '-crf 23',           // Kalite ayarı (Düşük değer = Yüksek kalite)
                '-c:a aac',          // Ses Codec: AAC
                '-b:a 128k',         // Ses Bitrate
                '-movflags +faststart', // Web için optimize et
                '-pix_fmt yuv420p'   // Renk formatını standartlaştır
            ])
            .save(outputPath)
            .on('end', () => resolve())
            .on('error', (err) => reject(err));
    });
};

export async function POST(req: NextRequest) {
  // Temizlik için dosya yollarını tutacağımız liste
  const filesToClean: string[] = [];

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const inputPropsStr = formData.get('inputProps') as string;

    if (!file || !inputPropsStr) {
      return NextResponse.json({ error: 'Dosya veya ayarlar eksik' }, { status: 400 });
    }

    // 1. Dosyayı geçici klasöre kaydet
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Proje dizini içinde temp klasörü oluştur (İzin sorunlarını önlemek için)
    const tempDir = path.join(process.cwd(), 'temp');
    if (!fs.existsSync(tempDir)) {
        await fs.promises.mkdir(tempDir, { recursive: true });
    }

    // Orijinal dosya
    const originalExt = path.extname(file.name) || '.mp4';
    const originalFilePath = path.join(tempDir, `raw-${Date.now()}${originalExt}`);
    await fs.promises.writeFile(originalFilePath, buffer);
    filesToClean.push(originalFilePath);

    // 2. Videoyu Uyumlu Formata (H.264) Dönüştür
    // Bu adım, "Format Error" ve "Video Oynamıyor" sorunlarını kesin olarak çözer.
    const convertedFilePath = path.join(tempDir, `converted-${Date.now()}.mp4`);
    await convertToCompatibleFormat(originalFilePath, convertedFilePath);
    filesToClean.push(convertedFilePath);

    // 3. Input Props'u güncelle (Dönüştürülmüş videoyu kullan)
    const inputProps = JSON.parse(inputPropsStr);
    inputProps.videoSrc = pathToFileURL(convertedFilePath).href;

    // --- Statik görselleri Base64'e çevirip prop olarak ekle ---
    const publicDir = path.join(process.cwd(), 'public');
    const readImageAsDataUri = async (filename: string) => {
        try {
            const filePath = path.join(publicDir, filename);
            const fileBuffer = await fs.promises.readFile(filePath);
            const ext = path.extname(filename).replace('.', '');
            return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,${fileBuffer.toString('base64')}`;
        } catch (e) {
            return null;
        }
    };

    inputProps.images = {
        appStore: await readImageAsDataUri('appstore.png'),
        google: await readImageAsDataUri('google.png'),
        icon: await readImageAsDataUri('icon.png'),
    };
    // ---------------------------------------------------------

    // 4. Projeyi Bundle Et
    const entryPoint = path.join(process.cwd(), 'src', 'remotion', 'index.ts');
    const bundleLocation = await bundle({
      entryPoint,
      webpackOverride: (config) => {
        const rules = (config.module?.rules || []).filter((rule) => {
            if (rule && typeof rule === 'object' && 'test' in rule && String(rule.test).includes('css')) {
                return false;
            }
            return true;
        });

        return {
          ...config,
          module: {
            ...config.module,
            rules: [
                ...rules,
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require("tailwindcss"),
                                        require("autoprefixer"),
                                    ],
                                },
                            },
                        }
                    ],
                },
            ],
          },
          resolve: {
            ...config.resolve,
            alias: {
              ...(config.resolve?.alias || {}),
              '@': path.join(process.cwd(), 'src'),
            },
          },
        };
      },
    });

    // 5. Render İşlemi (MP4 Oluştur)
    const outputLocation = path.join(tempDir, `render-${Date.now()}.mp4`);
    filesToClean.push(outputLocation);
    
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation,
      inputProps,
      chromiumOptions: {
        disableWebSecurity: true,
        ignoreCertificateErrors: true,
        gl: 'swangle',
      },
      crf: 18, // Kalite ayarı (18-23 arası idealdir)
      imageFormat: 'png',
      pixelFormat: 'yuv420p',
    });

    // 6. Dosyayı İstemciye Gönder
    const videoBuffer = await fs.promises.readFile(outputLocation);
    
    // Temizlik (Dosyaları sil)
    for (const file of filesToClean) {
        try { await fs.promises.unlink(file); } catch (e) {}
    }

    return new NextResponse(videoBuffer, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': 'attachment; filename="render.mp4"',
      },
    });

  } catch (error) {
    console.error('Render Hatası:', error);
    
    // Hata durumunda da temizlik yapmaya çalış
    for (const file of filesToClean) {
        try { await fs.promises.unlink(file); } catch (e) {}
    }

    return NextResponse.json(
      { error: 'Render işlemi başarısız oldu', details: String(error) }, 
      { status: 500 }
    );
  }
}
