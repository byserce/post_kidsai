// src/components/renderer/layouts/LayoutSplit.tsx
import { SlideData, Language } from '@/core/types';
import { PhoneMockup } from '../PhoneMockup';
import { CheckCircle2, ShieldCheck, Gamepad2 } from 'lucide-react';

export const LayoutSplit = ({ data, lang }: { data: SlideData; lang: Language }) => {
  // Fallback: Seçili dil yoksa -> İngilizce -> İlk mevcut dil
  const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
  if (!content) return null;

  // Tema rengine göre CANLI arka plan (Flutter app tarzı)
  const bgColors: Record<string, string> = {
    blue: 'bg-blue-400',
    indigo: 'bg-indigo-400',
    purple: 'bg-purple-400',
    rose: 'bg-rose-400',
    emerald: 'bg-emerald-400',
    yellow: 'bg-yellow-400',
    cyan: 'bg-cyan-400',
  };
  const bgClass = bgColors[data.themeColor] || 'bg-slate-700';

  return (
    <div className={`w-full h-full relative overflow-hidden flex ${bgClass} text-white transition-colors duration-300`}>
        
      {/* Puantiye Deseni (Çocuksu Doku) */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)', backgroundSize: '30px 30px' }} />

      {/* Sol taraf: Metin */}
      <div className="w-1/2 h-full flex flex-col justify-center p-16 z-20 relative">
        
        {/* İçerik Kartı - Uygulamadaki butonlar gibi */}
        <div className="bg-white/10 backdrop-blur-sm border-4 border-white/40 rounded-[40px] p-10 shadow-xl">

        {/* Güven Rozeti */}
        <div className="flex items-center gap-2 text-white mb-6 font-bold text-sm uppercase tracking-widest bg-black/20 w-max px-4 py-2 rounded-full">
            <ShieldCheck size={16} />
            %100 Güvenli & Reklamsız
        </div>

        <h2 className="text-white/90 font-bold text-2xl mb-2 tracking-wide font-[var(--font-fredoka)] uppercase opacity-80">{content.subtitle}</h2>
        <h1 className="text-6xl font-[var(--font-luckiest)] mb-6 leading-tight drop-shadow-lg">{content.title}</h1>
        
        <p className="text-xl text-white/90 mb-8 font-[var(--font-fredoka)] leading-relaxed">
            {(content as any).description}
        </p>

        {/* Özellik Listesi */}
        <div className="space-y-3 mb-8">
            {['Pedagog Onaylı', 'Çevrimdışı Mod', 'Ebeveyn Kontrolü'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold font-[var(--font-fredoka)] text-lg">
                    <div className="bg-white rounded-full p-1"><CheckCircle2 className="text-green-500" size={20} /></div>
                    {item}
                </div>
            ))}
        </div>

        <div className="flex flex-col gap-4">
            <div className="bg-white text-slate-900 px-8 py-4 rounded-2xl text-2xl font-black shadow-[0_6px_0_rgba(0,0,0,0.1)] border-b-4 border-slate-200 w-max font-[var(--font-fredoka)] transform transition hover:scale-105 cursor-pointer flex items-center gap-3">
                <Gamepad2 size={28} className="text-purple-500" />
                {content.cta}
            </div>
            <div className="flex gap-2 opacity-80">
                 {/* Basit Store İkonları */}
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg></div>
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg></div>
            </div>
        </div>
        </div>
      </div>

      {/* Sağ taraf: Telefon */}
      <div className="w-1/2 h-full relative flex items-center justify-center" style={{ perspective: '1200px' }}>
         {/* Arkadaki parlama efekti */}
         <div className="absolute w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />
         
         <div className="relative w-full h-full">
             <PhoneMockup phone={data.phone} image={data.image} />
         </div>
      </div>
    </div>
  );
};