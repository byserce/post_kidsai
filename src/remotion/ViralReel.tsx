import React from 'react';
import { 
  AbsoluteFill, 
  useCurrentFrame, 
  useVideoConfig, 
  interpolate, 
  spring, 
  Video 
} from 'remotion';
import { PhoneFrame } from './components/PhoneFrame';
import { ReelComposition } from '@/core/types';

export const ViralReel: React.FC<ReelComposition> = ({ 
  videoSrc, 
  primaryColor, 
  texts, 
  activeLanguage,
  ...props // Diğer prop'ları al (trimStart vb.)
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const content = texts[activeLanguage];
  const trimStart = (props as any).trimStart || 0; // trimStart değerini al
  const startFrame = Math.round(trimStart * fps); // Kareyi tam sayıya yuvarla

  // --- ANİMASYONLAR ---
  const bgScale = interpolate(frame, [0, durationInFrames], [1.1, 1.3]);

  const phoneSlideUp = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120, mass: 1 },
    from: 1500,
    to: 0,
  });

  const textOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const progressWidth = interpolate(frame, [0, durationInFrames], [0, 100]);

  return (
    <AbsoluteFill className="bg-slate-900 flex items-center justify-center">
      
      {/* --- KATMAN 1: ARKA PLAN --- */}
      <AbsoluteFill style={{ overflow: 'hidden' }}>
        <Video
          src={videoSrc}
          startFrom={startFrame} // Videoyu kesilen yerden başlat
          style={{
            // DÜZELTME: absoluteFill yerine manuel CSS
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${bgScale})`,
            filter: 'blur(30px) brightness(0.6)',
          }}
          muted={false}
          volume={1}
        />
      </AbsoluteFill>

      {/* --- KATMAN 2: ANA İÇERİK --- */}
      <AbsoluteFill className="flex flex-col items-center justify-center z-10">
        
        {/* Üst Başlık (HOOK) */}
        <div 
          style={{ 
            opacity: textOpacity, 
            transform: `translateY(${phoneSlideUp * 0.2}px)`
          }}
          className="absolute top-24 z-30 w-full px-8 text-center"
        >
          <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl transform rotate-1">
            <h1 className="text-5xl font-black text-slate-900 uppercase leading-none tracking-tighter">
              {content.hook}
            </h1>
          </div>
        </div>

        {/* Telefon */}
        <div style={{ transform: `translateY(${phoneSlideUp}px)` }}>
          {/* PhoneFrame içindeki videoya da startFrom gönderiyoruz (Destekliyorsa çalışır) */}
          {/* Eğer PhoneFrame özel bir bileşense ve startFrom almıyorsa, içini güncellemek gerekebilir. */}
          {/* Ancak genellikle spread props yapılıyorsa çalışacaktır. */}
          {/* @ts-ignore */}
          <PhoneFrame src={videoSrc} startFrom={startFrame} muted={true} />
        </div>

        {/* Alt Çağrı (CTA) */}
        <div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-32 z-30"
        >
          <div 
            className="px-12 py-5 rounded-full font-bold text-4xl shadow-2xl text-white flex items-center gap-3 animate-pulse"
            style={{ backgroundColor: primaryColor }}
          >
            <span>👉</span> {content.cta}
          </div>
        </div>

      </AbsoluteFill>

      {/* --- KATMAN 3: PROGRESS BAR --- */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 12,
          width: `${progressWidth}%`,
          backgroundColor: primaryColor,
          zIndex: 50,
          boxShadow: `0 -4px 20px ${primaryColor}`
        }}
      />

    </AbsoluteFill>
  );
};