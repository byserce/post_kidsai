// src/components/renderer/layouts/secondpage.tsx
import { SlideData, Language } from '@/core/types';
import { PhoneMockup } from '../PhoneMockup';
import { Camera, WifiOff, Volume2, ScanFace, Sparkles } from 'lucide-react';

export const LayoutClassic = ({ data, lang }: { data: SlideData; lang: Language }) => {
  // Fallback content
  const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
  if (!content) return null;

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col bg-[#FFF0F5] text-slate-900">
      
      {/* Arka Plan Desenleri */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#FF69B4 3px, transparent 3px)', backgroundSize: '40px 40px' }} />
      
      {/* Büyük Dekoratif Daireler */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-pink-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200 rounded-full blur-3xl opacity-50" />

      {/* Üst Kısım: Başlık */}
      <div className="z-20 pt-24 px-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-3 bg-white border-4 border-pink-300 px-8 py-3 rounded-full shadow-xl mb-8 transform -rotate-2 hover:scale-105 transition-transform">
            <Camera className="text-pink-500" size={36} />
            <span className="text-3xl font-black text-pink-500 uppercase tracking-widest font-[var(--font-fredoka)]">
                {content.subtitle}
            </span>
        </div>
        
        <h1 className="text-[100px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-6 stroke-white">
            {content.title}
        </h1>
      </div>

      {/* Orta Kısım: Telefon ve Özellikler */}
      <div className="flex-1 flex items-center justify-center relative z-20 px-10 -mt-10">
        
        {/* Sol Özellikler */}
        <div className="flex flex-col gap-12 -mt-20">
            <FeatureCard icon={<ScanFace size={48} />} text="AI Tanıma" color="bg-purple-100 text-purple-600" rotate="-rotate-6" />
            <FeatureCard icon={<WifiOff size={48} />} text="İnternetsiz" color="bg-blue-100 text-blue-600" rotate="rotate-3" />
        </div>

        {/* Telefon */}
        <div className="mx-16 relative transform scale-110">
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-[100px] opacity-30" />
            <PhoneMockup phone={data.phone} image={data.image} />
            
            {/* Süslemeler */}
            <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-16 h-16 animate-pulse" />
        </div>

        {/* Sağ Özellikler */}
        <div className="flex flex-col gap-12 -mt-20">
             <FeatureCard icon={<Volume2 size={48} />} text="Sesli İsim" color="bg-orange-100 text-orange-600" rotate="rotate-6" />
             <div className="w-56 h-32 flex items-center justify-center">
                {/* Boşluk veya ekstra dekor */}
                <div className="bg-white/50 p-4 rounded-full border-4 border-white/50 rotate-12">
                    <span className="text-4xl">📸</span>
                </div>
             </div>
        </div>
      </div>

      {/* Alt Kısım: Açıklama ve CTA */}
      <div className="z-20 pb-24 px-16 text-center">
         <div className="bg-white/90 backdrop-blur-md border-[6px] border-white rounded-[40px] p-8 shadow-2xl max-w-4xl mx-auto transform rotate-1">
            <p className="text-3xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed mb-8">
                {(content as any).description}
            </p>
            <div className="inline-block bg-pink-500 text-white text-4xl font-black py-5 px-16 rounded-3xl shadow-[0_8px_0_#C2185B] transform hover:-translate-y-1 hover:shadow-[0_10px_0_#C2185B] transition-all font-[var(--font-luckiest)] cursor-pointer">
                {content.cta}
            </div>
         </div>
      </div>

    </div>
  );
};

const FeatureCard = ({ icon, text, color, rotate }: any) => (
    <div className={`flex flex-col items-center gap-4 p-6 rounded-[32px] border-[5px] border-white shadow-xl ${color} ${rotate} transition-transform hover:scale-110 w-56`}>
        {icon}
        <span className="text-2xl font-bold font-[var(--font-fredoka)] text-center leading-tight">{text}</span>
    </div>
);