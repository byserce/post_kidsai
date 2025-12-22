// src/components/renderer/layouts/thirdpage.tsx
import { SlideData, Language } from '@/core/types';
import { PhoneMockup } from '../PhoneMockup';
import { Sparkles, BrainCircuit, Wand2, Star, Bot } from 'lucide-react';

export const LayoutSmart = ({ data, lang }: { data: SlideData; lang: Language }) => {
  const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
  if (!content) return null;

  // Dinamik Balon İçerikleri
  const b1Title = (content as any).bubble_1_title || "AI Analiz";
  const b1Main = (content as any).bubble_1_main || "Bu bir Kedi! 🐱";
  const b1Sub = (content as any).bubble_1_sub || "Yumuşak tüyleri vardır ve mırıldanır.";

  const b2Title = (content as any).bubble_2_title || "Öğrenme Modu";
  const b2Main = (content as any).bubble_2_main || "This is a Cat! 🐱";
  const b2Sub = (content as any).bubble_2_sub || "It has soft fur and purrs.";

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col bg-[#F3E5F5] text-slate-900">
       {/* Arka Plan Deseni */}
       <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: 'radial-gradient(#9C27B0 3px, transparent 3px)', backgroundSize: '40px 40px' }} />

       {/* Dekoratif Blob'lar */}
       <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-200 rounded-full blur-3xl opacity-50" />
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-50" />

       {/* Başlık Alanı */}
       <div className="z-20 pt-20 px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 bg-white border-4 border-purple-300 px-8 py-3 rounded-full shadow-xl mb-6 transform rotate-2 hover:scale-105 transition-transform">
              <Wand2 className="text-purple-500" size={32} />
              <span className="text-2xl font-black text-purple-500 uppercase tracking-widest font-[var(--font-fredoka)]">
                  {content.subtitle}
              </span>
          </div>

          <h1 className="text-[90px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-4 stroke-white">
              {content.title}
          </h1>
       </div>

       {/* Ana İçerik: Telefon ve AI Balonları */}
       <div className="flex-1 flex items-center justify-center relative z-20 -mt-8">
          {/* Sol AI Balonu */}
          <div className="absolute left-12 top-1/4 z-30">
              <div className="bg-white p-6 rounded-[32px] rounded-tr-none border-[5px] border-purple-400 shadow-xl max-w-[300px] animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="text-purple-500" size={32} />
                    <span className="font-black text-purple-400 text-sm uppercase">{b1Title}</span>
                  </div>
                  <p className="font-[var(--font-fredoka)] text-xl font-bold text-slate-700 leading-tight">
                      "{b1Main}"<br/><span className="text-purple-500 text-base">{b1Sub}</span>
                  </p>
              </div>
          </div>

          {/* Telefon */}
          <div className="relative transform scale-110 z-20">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-[90px] opacity-20" />
              <PhoneMockup phone={data.phone} image={data.image} />
              <Sparkles className="absolute -top-12 -left-12 text-yellow-400 w-20 h-20 animate-pulse" />
              <Star className="absolute bottom-20 -right-10 text-purple-400 w-12 h-12 animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          {/* Sağ AI Balonu */}
          <div className="absolute right-12 bottom-1/3 z-30">
               <div className="bg-white p-6 rounded-[32px] rounded-tl-none border-[5px] border-indigo-400 shadow-xl max-w-[300px] animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="text-indigo-500" size={32} />
                    <span className="font-black text-indigo-400 text-sm uppercase">{b2Title}</span>
                  </div>
                  <p className="font-[var(--font-fredoka)] text-xl font-bold text-slate-700 leading-tight">
                      "{b2Main}"<br/><span className="text-indigo-500 text-base">{b2Sub}</span>
                  </p>
              </div>
          </div>
       </div>

       {/* Alt Açıklama ve Buton */}
       <div className="z-20 pb-16 px-16 text-center">
           <div className="bg-white/80 backdrop-blur-md border-[5px] border-white rounded-[30px] p-6 shadow-xl max-w-4xl mx-auto transform -rotate-1">
               <p className="text-2xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed">
                   {(content as any).description}
               </p>
           </div>
           <div className="mt-8">
               <div className="inline-block bg-purple-600 text-white text-3xl font-black py-4 px-12 rounded-2xl shadow-[0_6px_0_#7B1FA2] transform hover:-translate-y-1 hover:shadow-[0_8px_0_#7B1FA2] transition-all font-[var(--font-luckiest)] cursor-pointer">
                   {content.cta}
               </div>
           </div>
       </div>
    </div>
  );
};