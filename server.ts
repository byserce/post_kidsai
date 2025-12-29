import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import os from 'os';
// import ffmpegInstaller from 'ffmpeg-static';

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Temp klasörünü statik olarak sun (Videolara HTTP üzerinden erişmek için)
app.use('/temp', express.static(path.join(process.cwd(), 'temp')));

// Dosya yükleme ayarları (Bellekte tut)
const upload = multer({ storage: multer.memoryStorage() });

// FFmpeg Binary yolunu ayarla
// Sistemdeki (System32) GPU destekli FFmpeg'i kullanacak.
ffmpeg.setFfmpegPath('ffmpeg');

// Videoyu H.264 formatına dönüştüren yardımcı fonksiyon
const convertToCompatibleFormat = (inputPath: string, outputPath: string, startTime?: number, duration?: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        let command = ffmpeg(inputPath);

        // NOT: seekInput hızlıdır ama keyframe'e yapışır (hatalı keser).
        // Output options içindeki -ss ise yavaştır ama milimetrik keser.
        const outputOptions = [
            '-c:v libx264', '-preset ultrafast', '-crf 23',
            '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2',
            '-c:a aac', '-b:a 192k', '-ac 2', '-ar 44100',
            '-movflags +faststart', '-pix_fmt yuv420p',
            '-g 1', '-r 30'
        ];

        // Kırpma ayarları varsa uygula
        if (startTime && startTime > 0) {
            // command.seekInput(startTime); // KALDIRILDI: Hatalı kesime sebep oluyor
            outputOptions.unshift(`-ss ${startTime}`); // EKLENDİ: Tam saniyesinden keser
        }
        if (duration && duration > 0) {
            command.duration(duration);   // Belirtilen süre kadar al
        }

        command
            .outputOptions(outputOptions)
            .save(outputPath)
            .on('end', () => resolve())
            .on('error', (err: Error, stdout: any, stderr: any) => {
                console.error('🔴 FFmpeg Detaylı Hata:', stderr); // Hatanın sebebini terminale yaz
                reject(err);
            });
    });
};

app.post('/render', upload.single('file'), async (req, res) => {
    const filesToClean: string[] = [];

    try {
        const file = req.file;
        const inputPropsStr = req.body.inputProps;
        // Frontend'den gelen kırpma bilgilerini al
        const trimStart = req.body.trimStart ? parseFloat(req.body.trimStart) : undefined;
        const trimDuration = req.body.trimDuration ? parseFloat(req.body.trimDuration) : undefined;

        if (!file || !inputPropsStr) {
            res.status(400).json({ error: 'Dosya veya ayarlar eksik' });
            return;
        }

        console.log('🚀 Render işlemi başlatılıyor...');

        // 1. Dosyayı geçici klasöre kaydet
        const tempDir = path.join(process.cwd(), 'temp');
        if (!fs.existsSync(tempDir)) {
            await fs.promises.mkdir(tempDir, { recursive: true });
        }

        const originalExt = path.extname(file.originalname) || '.mp4';
        const originalFilePath = path.join(tempDir, `raw-${Date.now()}${originalExt}`);
        await fs.promises.writeFile(originalFilePath, file.buffer);
        filesToClean.push(originalFilePath);

        // 2. Videoyu Dönüştür (FFmpeg)
        console.log('🔄 Video formatı dönüştürülüyor...');
        const convertedFilePath = path.join(tempDir, `converted-${Date.now()}.mp4`);
        await convertToCompatibleFormat(originalFilePath, convertedFilePath, trimStart, trimDuration);
        filesToClean.push(convertedFilePath);

        // 3. Input Props Güncelle
        const inputProps = JSON.parse(inputPropsStr);
        const videoFileName = path.basename(convertedFilePath);
        inputProps.videoSrc = `http://localhost:${port}/temp/${videoFileName}`;
        
        console.log('🔗 Video Source URL:', inputProps.videoSrc);

        // Statik Görselleri Base64 Yap
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

        // 4. Bundle İşlemi
        console.log('📦 Proje paketleniyor...');
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

        // 5. Render İşlemi
        console.log('🎥 Video oluşturuluyor...');
        const outputLocation = path.join(tempDir, `render-${Date.now()}.mp4`);
        filesToClean.push(outputLocation);

        const composition = await selectComposition({
            serveUrl: bundleLocation,
            id: 'KidsAIReel',
            inputProps,
        });

        // Render süresini Frontend'den gelen süreye eşitle (Önizleme ile birebir aynı olması için)
        if (inputProps.trimDuration) {
            composition.durationInFrames = Math.max(1, Math.floor(Number(inputProps.trimDuration) * 30));
        }

        await renderMedia({
            composition,
            serveUrl: bundleLocation,
            codec: 'h264',
            outputLocation,
            inputProps,
            concurrency: os.cpus().length, // Bilgisayardaki tüm çekirdekleri aynı anda kullan
            chromiumOptions: { 
                disableWebSecurity: true, 
                ignoreCertificateErrors: true,
                gl: 'angle', // Windows + NVIDIA için en hızlı grafik modu
            },
            crf: 23, // 18 çok yavaştır, 23 standarttır ve çok daha hızlı render alır
            imageFormat: 'png',
            pixelFormat: 'yuv420p',
        });

        console.log('✅ İşlem tamamlandı!');
        res.download(outputLocation, 'render.mp4', async () => {
            // İndirme bitince temizle
            for (const file of filesToClean) {
                try { await fs.promises.unlink(file); } catch (e) {}
            }
        });

    } catch (error) {
        console.error('❌ Render Hatası:', error);
        for (const file of filesToClean) {
            try { await fs.promises.unlink(file); } catch (e) {}
        }
        res.status(500).json({ error: 'Render işlemi başarısız oldu', details: String(error) });
    }
});

app.listen(port, () => {
    console.log(`🚀 Render sunucusu çalışıyor (HTTP Mode): http://localhost:${port}`);
});