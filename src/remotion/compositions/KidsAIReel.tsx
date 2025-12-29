import React from 'react';
import { 
  AbsoluteFill, 
  useCurrentFrame, 
  useVideoConfig, 
  interpolate, 
  spring, 
  Img,
  Video,
} from 'remotion';
import { PhoneFrame } from '../components/PhoneFrame';
import { ReelComposition } from '@/core/types';

// Geliştirilmiş KidsAI Renk Paleti
const COLORS = {
  bg: '#FFF3E0', 
  primary: '#FF6B6B', // Canlı Mercan/Kırmızı
  secondary: '#4ECDC4', // Turkuaz
  accent: '#FFE66D', // Sarı
  dark: '#2D3436',
  white: '#FFFFFF',
  gradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
};

const FINAL_MESSAGES = {
  tr: "Uygulamamızı Google Play ve App Store'dan indirebilirsiniz!",
  en: "Download our app from Google Play and App Store!",
  de: "Laden Sie unsere App von Google Play und App Store herunter!",
  es: "¡Descarga nuestra aplicación desde Google Play y App Store!"
};

export interface ClickEvent {
  id: string;
  frame: number;
  x: number; // Yüzde olarak (0-100)
  y: number; // Yüzde olarak (0-100)
}

export const KidsAIReel: React.FC<ReelComposition & { 
  clickEvents?: ClickEvent[],
  images?: { appStore: string; google: string; icon: string },
  trimStart?: number
}> = ({ 
  videoSrc, 
  texts, 
  activeLanguage,
  clickEvents = [],
  images,
  trimStart = 0
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const content = texts[activeLanguage];
  const startFrame = Math.round(trimStart * fps);

  // Görsel Kaynakları (Render sırasında Base64 gelir, önizlemede public path kullanılır)
  const appStoreSrc = images?.appStore || '/appstore.png';
  const googleSrc = images?.google || '/google.png';
  const iconSrc = images?.icon || '/icon.png';

  // --- ANİMASYONLAR ---

  // 1. Arka Plan Hareketi
  const bgMove = interpolate(frame, [0, durationInFrames], [0, 100]);

  // 2. Telefonun Gelişi
  const phoneEntrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120, mass: 1.5 },
    from: 1500,
    to: 0,
  });

  // 3. Başlık Animasyonu
  const titleScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 200 },
    from: 0,
    to: 1,
  });

  // 4. Sticker Animasyonu
  const stickerRotate = interpolate(frame, [40, 70], [-30, 10], { extrapolateRight: 'clamp' });
  const stickerScale = interpolate(frame, [40, 70], [0, 1], { extrapolateRight: 'clamp' });

  // 5. Butonların Animasyonu
  const buttonsOpacity = interpolate(frame, [50, 70], [0, 1]);
  const buttonsSlideUp = spring({
      frame: frame - 50,
      fps,
      config: { damping: 15 },
      from: 100,
      to: 0
  });

  // 6. Final Popup Animasyonu (Son 3 saniye)
  const popupStartFrame = durationInFrames - 90;
  const popupOpacity = interpolate(frame, [popupStartFrame, popupStartFrame + 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const popupScale = spring({
      frame: frame - popupStartFrame,
      fps,
      config: { damping: 12, stiffness: 100 },
      from: 0.5,
      to: 1
  });

  return (
    <AbsoluteFill 
      style={{ 
        background: COLORS.gradient,
        fontFamily: 'var(--font-fredoka), sans-serif'
      }}
    >
      
      {/* --- SES KATMANI (GİZLİ VİDEO) --- */}
      {/* PhoneFrame bileşeni sesi iletmiyorsa, sesi buradan harici olarak veriyoruz */}
      <Video 
        src={videoSrc}
        startFrom={startFrame}
        volume={1}
        muted={false}
        style={{ position: 'absolute', width: 0, height: 0, opacity: 0 }}
      />
      
      {/* --- KATMAN 1: ARKA PLAN --- */}
      <AbsoluteFill style={{ overflow: 'hidden' }}>
        {/* Desen */}
        <div style={{
            position: 'absolute', inset: -100,
            backgroundImage: 'radial-gradient(#FFCC80 20%, transparent 20%)',
            backgroundSize: '60px 60px',
            backgroundPosition: `0px ${bgMove}px`,
            opacity: 0.3, transform: 'rotate(-5deg)'
        }} />
        
        {/* Süsler */}
        <div style={{ position: 'absolute', top: '5%', left: '-5%', transform: `rotate(${bgMove}deg)` }}>
           <SunIcon size={300} color="#FFE082" />
        </div>
        <div style={{ position: 'absolute', top: '15%', right: '5%', transform: `translateX(${-bgMove * 0.5}px)` }}>
           <CloudIcon size={180} color="white" />
        </div>
        <div style={{ position: 'absolute', bottom: '20%', left: '-5%', transform: `translateX(${bgMove * 0.3}px)` }}>
           <CloudIcon size={120} color="white" />
        </div>
      </AbsoluteFill>

      {/* --- KATMAN 2: İÇERİK --- */}
      <AbsoluteFill className="flex flex-col items-center justify-center">
        
        {/* 1. BAŞLIK (Yukarıda) */}
        <div 
          style={{ 
            position: 'absolute',
            top: 100, 
            transform: `scale(${titleScale})`,
            zIndex: 50,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div className="relative inline-block px-4">
            <h1 style={{
              fontFamily: 'var(--font-luckiest), cursive',
              fontSize: 85,
              fontWeight: 900,
              color: COLORS.white,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              WebkitTextStroke: `4px ${COLORS.primary}`,
              textShadow: `6px 6px 0px ${COLORS.dark}, 12px 12px 0px rgba(0,0,0,0.15)`
            }}>
              {content.hook}
            </h1>
          </div>
        </div>

        {/* 2. TELEFON (Ortada) */}
        <div 
            className="relative z-30" 
            style={{ 
                transform: `translateY(${phoneEntrance}px) scale(1.40)`,
                marginBottom: 20 // Alt kısım büyüdüğü için telefonu biraz daha yukarı itiyoruz
            }}
        >
            {/* Sol Sticker */}
            <div style={{
                position: 'absolute', top: 40, left: -140,
                transform: `scale(${stickerScale}) rotate(${stickerRotate}deg)`, zIndex: 40
            }}>
                <div className="bg-white p-4 rounded-full shadow-xl border-4 border-yellow-400 w-36 h-36 flex items-center justify-center text-center font-black text-yellow-500 text-3xl transform -rotate-12">
                   {activeLanguage === 'tr' ? 'ÜCRETSİZ!' : 'FREE!'}
                </div>
            </div>

            {/* Sağ Sticker */}
             <div style={{
                position: 'absolute', bottom: 100, right: -120,
                transform: `scale(${stickerScale}) rotate(${-stickerRotate}deg)`, zIndex: 40
            }}>
                <StarIcon size={110} color="#FFD54F" />
            </div>

            {/* Telefon */}
            <PhoneFrame 
                src={videoSrc} 
                startFrom={startFrame}
                muted={true}
                style={{
                    boxShadow: '0 30px 60px -15px rgba(55, 71, 79, 0.4)'
                }}
            />
        </div>

        {/* 3. STORE BUTONLARI (EN AŞAĞIDA SABİT) */}
        <div 
          style={{ 
             position: 'absolute',
             bottom: 60, // Progress barın üstünde
             width: '100%',
             opacity: buttonsOpacity,
             transform: `translateY(${buttonsSlideUp}px)`,
             zIndex: 50,
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             gap: 15
          }}
        >
            {/* App Store Image */}
            <Img 
                src={appStoreSrc} 
                style={{ height: 65, objectFit: 'contain' }} 
            />

            {/* Center Group: Logo + Text */}
            <div className="flex flex-col items-center mx-2">
                <Img 
                    src={iconSrc} 
                    style={{ 
                        width: 85, 
                        height: 85, 
                        borderRadius: 22, 
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        border: '4px solid white'
                    }} 
                />
                <span style={{ 
                    fontFamily: 'var(--font-luckiest), cursive', 
                    fontSize: 28, 
                    color: COLORS.dark, 
                    marginTop: 8,
                    lineHeight: 1,
                    textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                }}>
                    KidsAI
                </span>
                <span style={{ 
                    fontSize: 14, 
                    fontWeight: 900, 
                    color: COLORS.white, 
                    backgroundColor: COLORS.primary, 
                    padding: '6px 16px', 
                    borderRadius: 20,
                    marginTop: 6,
                    boxShadow: '0 4px 10px rgba(255, 107, 107, 0.4)',
                    letterSpacing: '0.5px'
                }}>
                    {activeLanguage === 'tr' ? 'HEMEN İNDİR' : 'DOWNLOAD'}
                </span>
            </div>

            {/* Google Play Image */}
            <Img 
                src={googleSrc} 
                style={{ height: 65, objectFit: 'contain' }} 
            />
        </div>

        {/* 4. TIKLAMA EFEKTLERİ (En Üst Katman) */}
        {clickEvents.map((click: ClickEvent) => {
            // Tıklama zamanı kontrolü (Animasyon 30 kare sürer)
            const relativeFrame = frame - click.frame;
            if (relativeFrame >= 0 && relativeFrame < 30) {
                return (
                    <TouchIndicator key={click.id} x={click.x} y={click.y} frame={relativeFrame} />
                );
            }
            return null;
        })}

        {/* 5. FINAL POPUP SAHNESİ (En Üst Katman) */}
        <AbsoluteFill 
            style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                zIndex: 200, 
                opacity: popupOpacity,
                pointerEvents: frame > popupStartFrame ? 'auto' : 'none'
            }}
        >
            {/* Arka Plan Karartma (Backdrop) */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)'
            }} />

            {/* Popup Kutusu */}
            <div style={{
                width: '85%',
                backgroundColor: 'white',
                borderRadius: 40,
                padding: '50px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transform: `scale(${popupScale})`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                border: `8px solid ${COLORS.primary}`,
                position: 'relative'
            }}>
                {/* Logo */}
                <Img 
                    src={iconSrc} 
                    style={{ width: 100, height: 100, borderRadius: 25, marginBottom: 25, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }} 
                />
                
                {/* Mesaj */}
                <h2 style={{
                    fontFamily: 'var(--font-luckiest), cursive',
                    fontSize: 38,
                    color: COLORS.dark,
                    marginBottom: 30,
                    lineHeight: 1.2
                }}>
                    {FINAL_MESSAGES[activeLanguage as keyof typeof FINAL_MESSAGES] || FINAL_MESSAGES.en}
                </h2>

                {/* Market İkonları */}
                <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Img src={appStoreSrc} style={{ height: 55, objectFit: 'contain' }} />
                    <Img src={googleSrc} style={{ height: 55, objectFit: 'contain' }} />
                </div>
            </div>
        </AbsoluteFill>

      </AbsoluteFill>

      {/* --- KATMAN 3: PROGRESS BAR --- */}
      <div style={{
          position: 'absolute', bottom: 30, left: '10%', right: '10%',
          height: 10, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 10, overflow: 'hidden', zIndex: 60
      }}>
          <div style={{
              height: '100%', width: `${(frame / durationInFrames) * 100}%`,
              backgroundColor: COLORS.primary, borderRadius: 10,
            }}
          />
      </div>

    </AbsoluteFill>
  );
};

// --- TIKLAMA ANİMASYONU BİLEŞENİ ---
const TouchIndicator = ({ x, y, frame }: { x: number, y: number, frame: number }) => {
    // 1. Dokunma Dairesi (Büyüyüp küçülme)
    const scale = interpolate(frame, [0, 5, 25], [0.5, 1.5, 1], { extrapolateRight: 'clamp' });
    const opacity = interpolate(frame, [20, 30], [1, 0], { extrapolateRight: 'clamp' });
    
    // 2. Ripple (Halka) Efekti - Genişletilmiş
    const rippleScale = interpolate(frame, [0, 25], [0.5, 6], { extrapolateRight: 'clamp' });
    const rippleOpacity = interpolate(frame, [0, 15, 25], [0.8, 0.4, 0], { extrapolateRight: 'clamp' });

    // 3. İkinci Ripple (Daha geniş ve gecikmeli)
    const ripple2Scale = interpolate(frame, [5, 30], [0.5, 8], { extrapolateRight: 'clamp' });
    const ripple2Opacity = interpolate(frame, [5, 20, 30], [0.6, 0.3, 0], { extrapolateRight: 'clamp' });

    return (
        <div style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            zIndex: 100,
            pointerEvents: 'none'
        }}>
            {/* Ana Dokunma Noktası (Gri/Beyaz Transparent) */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                transform: 'translate(-50%, -50%)',
                width: 50, height: 50, borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
                transform: `scale(${scale})`, opacity
            }} />
            
            {/* Yayılan Halka 1 */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                transform: 'translate(-50%, -50%)',
                width: 50, height: 50, borderRadius: '50%',
                border: `4px solid rgba(255, 255, 255, 0.4)`,
                transform: `scale(${rippleScale})`, opacity: rippleOpacity
            }} />

            {/* Yayılan Halka 2 (Ekstra Genişlik) */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                transform: 'translate(-50%, -50%)',
                width: 50, height: 50, borderRadius: '50%',
                border: `2px solid rgba(255, 255, 255, 0.2)`,
                transform: `scale(${ripple2Scale})`, opacity: ripple2Opacity
            }} />
        </div>
    );
};

// --- İKONLAR ---
const SunIcon = ({ size, color }: { size: number, color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);
const CloudIcon = ({ size, color }: { size: number, color: string }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 24 24" fill={color}>
    <path d="M18.5,12c-0.23,0-0.45,0.02-0.67,0.06C17.26,9.15,14.65,7,11.5,7C7.49,7,4.14,9.97,3.57,13.84C1.55,14.49,0,16.4,0,18.66 C0,21.61,2.39,24,5.33,24h13.17C21.55,24,24,21.55,24,18.5S21.55,12,18.5,12z" />
  </svg>
);
const StarIcon = ({ size, color }: { size: number, color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
);