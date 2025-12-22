"use client";

import type { RefObject } from 'react';
import { Image as ImageIcon, Download, Cloud, Star, Sparkles, ArrowDown, Zap, Heart, Play } from 'lucide-react';
import { toPng } from 'html-to-image';
import { cn } from '@/lib/utils';
import { themes, SlideContent } from '@/components/layouts';

type PostTemplateProps = SlideContent & {
  image: string | null;
  reference: RefObject<HTMLDivElement>;
};

export function PostTemplate({
  reference,
  title,
  subtitle,
  seriesTag,
  ctaText,
  color,
  image,
  imageFit = 'cover',
  imagePosition = { x: 50, y: 50 },
  imageZoom = 1,
  imageRotation = 0,
  storeTitle,
  storeSubtitle,
  phoneStyle = 'default',
  phoneRotation,
  phoneScale = 1,
  phonePosition = { x: 0, y: 0 },
}: PostTemplateProps) {
  const currentTheme = themes[color] || themes.kidsaiOfficial;

  // Telefon Stilleri Konfigürasyonu (Base değerler)
  const phoneConfig: Record<string, { y: number, scale: number, rotate: number }> = {
    default: { y: -64, scale: 0.6, rotate: 0 },
    floating: { y: -40, scale: 0.65, rotate: 0 },
    'tilted-left': { y: -32, scale: 0.6, rotate: -3 },
    'tilted-right': { y: -32, scale: 0.6, rotate: 3 },
    flat: { y: -64, scale: 0.7, rotate: 0 },
  };

  const activeConfig = phoneConfig[phoneStyle] || phoneConfig.default;
  
  // Nihai Transform Değerleri
  const finalScale = activeConfig.scale * phoneScale;
  const finalRotate = activeConfig.rotate + (phoneRotation || 0);
  const finalX = phonePosition.x;
  const finalY = activeConfig.y + phonePosition.y;

  const handleDownload = async () => {
    if (reference.current) {
      try {
        const dataUrl = await toPng(reference.current, {
          pixelRatio: 2,
          filter: (node: any) => !node.classList?.contains('exclude-from-export'),
        });
        const link = document.createElement('a');
        link.download = `kidsai-launch-post.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Hata:', err);
      }
    }
  };

  return (
    <div ref={reference} className="w-[1080px] h-[1350px] flex-shrink-0 relative overflow-hidden group selection:bg-none font-sans bg-white">
      
      {/* 1. KATMAN: Arka Plan ve Atmosfer */}
      <div className={cn("absolute inset-0 flex flex-col items-center bg-gradient-to-b", currentTheme.bg, currentTheme.gradient)}>
        
        {/* Güneş Işını (Sunburst) Efekti */}
        <div className="absolute inset-0 opacity-40 origin-center scale-[2]">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,white_0deg,transparent_20deg,white_40deg,transparent_60deg,white_80deg,transparent_100deg,white_120deg,transparent_140deg,white_160deg,transparent_180deg,white_200deg,transparent_220deg,white_240deg,transparent_260deg,white_280deg,transparent_300deg,white_320deg,transparent_340deg,white_360deg)] mix-blend-overlay opacity-50"></div>
        </div>

        {/* Puantiye Desen */}
        <div 
            className={cn("absolute inset-0 pointer-events-none mix-blend-overlay", currentTheme.patternOpacity)}
            style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 3px, transparent 3px)',
                backgroundSize: '50px 50px'
            }}
        ></div>

        {/* Büyük Arka Plan Bulutları (Dekoratif) */}
        <div className="absolute top-[-50px] left-[-80px] text-white/40 transform -rotate-12">
            <Cloud size={400} fill="currentColor" />
        </div>
        <div className="absolute top-[100px] right-[-100px] text-white/30 transform rotate-12">
            <Cloud size={350} fill="currentColor" />
        </div>

        {/* 2. KATMAN: İçerik */}
        <div className="relative z-20 w-full h-full flex flex-col items-center pt-20 pb-12 px-8">
          
          {/* SERİ ETİKETİ (Sol Üst) */}
          {seriesTag && (
             <div className="absolute top-16 left-12 rotate-[-15deg] z-50">
                <div className="bg-[#FF4081] text-white border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.1)] px-6 py-2 rounded-2xl font-luckiest text-3xl tracking-wider">
                    {seriesTag}
                </div>
             </div>
          )}

          {/* BAŞLIK ALANI */}
          <div className="flex flex-col items-center gap-5 text-center relative z-30 mt-4">
            
            {/* Küçük Üst Başlık (Pill) */}
            <div className={cn("px-8 py-3 rounded-full transform hover:scale-105 transition-transform", currentTheme.pill)}>
               <p className="font-fredoka font-black text-2xl tracking-widest uppercase drop-shadow-md">
                 {subtitle}
               </p>
            </div>
            
            {/* BÜYÜK ANA BAŞLIK */}
            <div className="relative">
                {/* Ana Metin */}
                <h1 
                    className="font-luckiest text-[8rem] leading-[0.85] text-center text-white relative z-10"
                    style={{ 
                        // Metnin etrafına kalın çerçeve (Sticker efekti için)
                        WebkitTextStroke: '16px white', 
                        paintOrder: 'stroke fill'
                    } as React.CSSProperties}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#42A5F5] to-[#1E88E5]" style={{ WebkitTextStroke: '0px' }}>
                     {title}
                  </span>
                </h1>
                
                {/* Gölge Katmanı (Başlığın altında) */}
                <h1 
                    className="absolute top-2 left-0 w-full font-luckiest text-[8rem] leading-[0.85] text-center text-black/10 z-0"
                    style={{ WebkitTextStroke: '16px rgba(0,0,0,0.1)' } as React.CSSProperties}
                >
                   {title}
                </h1>
            </div>
          </div>

          {/* TELEFON ALANI - Konum ve boyut güncellendi */}
          <div className="flex-1 w-full flex items-center justify-center relative -mt-8"> {/* mt-4'ten -mt-8'e çekildi */}
              
              {/* Telefonun Arkasındaki Parlama - Biraz küçültüldü */}
              <div className="absolute w-[500px] h-[500px] bg-white/50 blur-[60px] rounded-full"></div>

              {/* TELEFON KASASI */}
              <div 
                className={cn(
                    "relative w-[460px] h-[880px] rounded-[64px] overflow-hidden z-20",
                    "border-[18px] bg-white", // Kalın beyaz çerçeve (Oyuncak gibi)
                    "shadow-[0_30px_60px_-15px_rgba(50,50,93,0.3),_0_18px_36px_-18px_rgba(0,0,0,0.4)]", // Yumuşak gölge
                )}
                style={{ 
                    transform: `translate(${finalX}px, ${finalY}px) rotate(${finalRotate}deg) scale(${finalScale})`,
                }}
               >
                 {/* İçerik */}
                 <div className="w-full h-full bg-slate-50 overflow-hidden relative rounded-[46px] border-[4px] border-slate-100">
                   {image ? (
                     <img
                       src={image}
                       className="w-full h-full"
                       alt="App Screen"
                       style={{ 
                         objectFit: imageFit,
                         objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                         transform: `scale(${imageZoom}) rotate(${imageRotation}deg)`
                       }}
                     />
                   ) : (
                     <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 font-fredoka gap-4 text-center p-6">
                         <div className="bg-white p-6 rounded-full shadow-lg border-2 border-blue-100">
                            <ImageIcon size={64} className="text-blue-300" />
                         </div>
                         <span className="text-blue-400 font-bold text-2xl">Görsel Yükle</span>
                     </div>
                   )}
                   {/* Ekran Yansıması */}
                   <div className="absolute top-0 right-0 w-[250px] h-[900px] bg-gradient-to-l from-white/20 to-transparent skew-x-[-20deg] pointer-events-none"></div>
                 </div>
              </div>

              {/* SÜZÜLEN ÇIKARTMALAR - Konumları ayarlandı */}
              <div className="absolute top-[20%] right-[10%] transform rotate-[15deg] z-30">
                 <div className="bg-[#FFEB3B] p-3 rounded-2xl border-[4px] border-white shadow-[0_5px_0px_rgba(0,0,0,0.1)]">
                    <Star size={48} className="text-[#FBC02D]" fill="currentColor" />
                 </div>
              </div>
              <div className="absolute bottom-[35%] left-[10%] transform -rotate-[12deg] z-30">
                 <div className="bg-[#FF4081] p-3 rounded-full border-[4px] border-white shadow-[0_5px_0px_rgba(0,0,0,0.1)]">
                    <Heart size={48} className="text-white" fill="currentColor" />
                 </div>
              </div>
              <div className="absolute top-[10%] left-[18%] transform -rotate-[20deg] z-10 opacity-80">
                 <div className="bg-white p-2 rounded-full border-[3px] border-blue-100">
                    <Cloud size={40} className="text-blue-300" fill="currentColor" />
                 </div>
              </div>

          </div>

          {/* ALT BÖLÜM: MAĞAZA VE CTA - Daha kompakt hale getirildi */}
          <div className="w-full max-w-[800px] bg-white rounded-[40px] p-4 border-[6px] border-white/50 shadow-[0_15px_40px_rgba(0,0,0,0.1)] relative mt-0 flex flex-col items-center mb-4"> {/* mt-4 -> mt-0, p-6 -> p-4, mb-4 eklendi */}
             
             {/* CTA Butonu (Havada) - Konumu ve boyutu ayarlandı */}
             {ctaText && (
                 <div className="absolute -top-5 bg-[#66BB6A] text-white px-6 py-2 rounded-2xl font-luckiest text-xl border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.15)] transform rotate-[-2deg]">
                    {ctaText}
                 </div>
             )}

             {/* Logo - Metin - Logo Düzeni */}
             <div className="flex items-center justify-center gap-6 mt-4 w-full px-2">
                
                {/* Sol: App Store Logo */}
                <div className="flex-shrink-0 w-16 h-16">
                    <img src="/appstore.png" alt="App Store" className="w-full h-full object-contain" />
                </div>

                {/* Orta: Metinler */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="font-fredoka font-black text-3xl text-slate-800 whitespace-nowrap">
                        {storeTitle || 'Maceraya Katılın'}
                    </h3>
                    <p className="font-fredoka text-xl text-slate-500 font-medium whitespace-nowrap">
                        {storeSubtitle || 'Eğlenceli ve Güvenli Öğrenme'}
                    </p>
                </div>

                {/* Sağ: Google Play Logo */}
                <div className="flex-shrink-0 w-16 h-16">
                    <img src="/google.png" alt="Google Play" className="w-full h-full object-contain" />
                </div>
             </div>

             {/* Alt Uyarı - Boşluk azaltıldı */}
             <div className="flex items-center gap-2 mt-3 text-slate-400 font-luckiest text-sm animate-pulse"> {/* mt-5 -> mt-3 */}
                <ArrowDown size={18} />
                <span>LİNK PROFİLDE (BIO)</span>
                <ArrowDown size={18} />
             </div>
          </div>

        </div>

        {/* İndirme Butonu (Export dışı) */}
        <button
          onClick={handleDownload}
          className="exclude-from-export absolute top-8 right-8 z-50 bg-[#FF4081] text-white p-4 rounded-2xl shadow-[0_6px_0px_rgba(0,0,0,0.2)] border-[3px] border-white hover:scale-110 transition-transform"
          title="Kaydet"
        >
          <Download size={32} strokeWidth={3} />
        </button>

      </div>
    </div>
  );
}