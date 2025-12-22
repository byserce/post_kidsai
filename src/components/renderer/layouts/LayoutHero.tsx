// src/components/renderer/layouts/LayoutHero.tsx
import { SlideData, Language } from '@/core/types';
import { PhoneMockup } from '../PhoneMockup';
import { Star, Cloud, Sparkles, Camera, Zap } from 'lucide-react';

export const LayoutHero = ({ data, lang }: { data: SlideData; lang: Language }) => {
  // Fallback: Seçili dil yoksa -> İngilizce -> İlk mevcut dil
  const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
  if (!content) return null;

  // Renk haritası: Arka plan, metin ve vurgu renkleri
  const colorMap: Record<string, { bg: string, text: string, accent: string, blob: string, title: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900', accent: 'bg-blue-500', blob: 'bg-blue-200', title: 'text-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-900', accent: 'bg-indigo-500', blob: 'bg-purple-200', title: 'text-indigo-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-900', accent: 'bg-purple-500', blob: 'bg-pink-200', title: 'text-purple-500' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-900', accent: 'bg-rose-500', blob: 'bg-orange-200', title: 'text-rose-500' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-900', accent: 'bg-emerald-500', blob: 'bg-teal-200', title: 'text-emerald-500' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-900', accent: 'bg-yellow-500', blob: 'bg-orange-200', title: 'text-orange-500' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-900', accent: 'bg-cyan-500', blob: 'bg-blue-200', title: 'text-cyan-600' },
  };

  const theme = colorMap[data.themeColor] || colorMap.cyan;

  // Store Butonları (SVG) - Alt kısma taşındı
  const StoreButtons = () => (
    <div className="flex gap-4 justify-center w-full mt-auto pb-16 z-30">
        {/* App Store */}
        <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl border-4 border-white/40 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform">
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase opacity-80 font-bold">Download on the</span>
                <span className="text-lg font-black tracking-wide">App Store</span>
            </div>
        </div>
        {/* Google Play */}
        <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl border-4 border-white/40 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform">
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase opacity-80 font-bold">Get it on</span>
                <span className="text-lg font-black tracking-wide">Google Play</span>
            </div>
        </div>
    </div>
  );

  return (
    <div className={`w-full h-full relative overflow-hidden flex flex-col items-center ${theme.bg}`}>
      
      {/* --- ARKA PLAN DEKORASYONU --- */}
      {/* Büyük Blob'lar */}
      <div className={`absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 ${theme.blob}`} />
      <div className={`absolute top-40 -right-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 ${data.themeColor === 'yellow' ? 'bg-yellow-200' : 'bg-pink-200'}`} />
      
      {/* Bulutlar ve İkonlar */}
      <Cloud className="absolute top-16 left-16 text-white w-40 h-40 fill-white/80 drop-shadow-xl animate-pulse" style={{ animationDuration: '4s' }} />
      <Cloud className="absolute top-32 right-20 text-white w-28 h-28 fill-white/80 drop-shadow-xl animate-pulse" style={{ animationDuration: '5s' }} />
      <Cloud className="absolute bottom-1/3 -left-10 text-white w-48 h-48 fill-white/50 blur-sm" />
      
      <Star className="absolute top-60 left-1/4 text-yellow-400 w-16 h-16 fill-yellow-400 animate-bounce drop-shadow-lg" style={{ animationDuration: '3s' }} />
      <Sparkles className="absolute top-40 right-1/3 text-yellow-400 w-10 h-10 animate-pulse" />
      <Camera className="absolute bottom-1/4 right-10 text-indigo-400/20 w-32 h-32 -rotate-12" />
      <Zap className="absolute top-1/3 left-10 text-yellow-400/30 w-20 h-20 rotate-12" />

      {/* --- İÇERİK --- */}
      <div className="z-20 flex flex-col items-center w-full h-full pt-20 px-8 relative">
        
        {/* Başlık ve Rozet */}
        <div className="flex flex-col items-center gap-6 mb-8">
            <div className="transform -rotate-2">
                <span className={`px-8 py-3 rounded-full text-2xl font-black shadow-[0_6px_0_rgba(0,0,0,0.1)] border-[5px] border-white uppercase tracking-widest bg-white ${theme.title} font-[var(--font-fredoka)] flex items-center gap-3`}>
                    <Star size={28} fill="currentColor" className="text-yellow-400" />
                    {content.subtitle}
                    <Star size={28} fill="currentColor" className="text-yellow-400" />
                </span>
            </div>

            <h1 className={`text-[110px] font-[var(--font-luckiest)] ${theme.title} leading-[0.9] text-center drop-shadow-xl stroke-white`}>
                {content.title}
            </h1>
            
            <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl border-4 border-white/60 shadow-lg max-w-3xl transform rotate-1">
                <p className={`text-3xl font-bold text-slate-700 text-center font-[var(--font-fredoka)] leading-relaxed`}>
                    {(content as any).description}
                </p>
            </div>
        </div>

        {/* Telefon Mockup - Ortada */}
        <div className="flex-1 w-full relative flex items-center justify-center perspective-1000 -mt-4">
             <div className="relative z-10 transform scale-110">
                <PhoneMockup phone={data.phone} image={data.image} />
             </div>
             {/* Telefon Arkası Parlama */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 rounded-full blur-[100px] -z-10" />
        </div>

        {/* Store Butonları - En Altta */}
        <StoreButtons />
        
      </div>
    </div>
  );
};