"use client";

import type { RefObject } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type PostTemplateProps = {
  title: string;
  subtitle: string;
  color: 'orange' | 'blue' | 'purple' | 'green';
  image: string | null;
  reference: RefObject<HTMLDivElement>;
};

const themes = {
  orange: "bg-gradient-to-br from-orange-400 to-yellow-300 text-orange-900",
  blue: "bg-gradient-to-br from-blue-400 to-cyan-300 text-blue-900",
  purple: "bg-gradient-to-br from-purple-400 to-pink-300 text-purple-900",
  green: "bg-gradient-to-br from-green-400 to-emerald-300 text-green-900",
};

export function PostTemplate({ reference, title, subtitle, color, image }: PostTemplateProps) {
  return (
    <div ref={reference} className="w-[1080px] h-[1350px] flex-shrink-0 bg-white relative overflow-hidden shadow-2xl font-headline">
      <div className={cn("absolute inset-0 p-12 flex flex-col items-center", themes[color])}>
        
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-white/20 rounded-full blur-2xl"></div>

        <div className="text-center mt-12 mb-8 relative z-10">
          <h1 className="font-bold text-7xl mb-4 drop-shadow-sm">{title}</h1>
          <p className="font-semibold text-4xl opacity-90">{subtitle}</p>
        </div>

        <div className="relative z-10 mt-4 w-[600px] h-[1100px] bg-black rounded-[60px] p-4 shadow-2xl border-4 border-black/10">
           <div className="w-full h-full bg-gray-100 rounded-[45px] overflow-hidden relative">
              {image ? (
                <img src={image} className="w-full h-full object-cover" alt="App Screen" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                   <ImageIcon size={64} className="mb-4 opacity-30" />
                   <span className="font-kids text-2xl opacity-50">Görsel Bekleniyor</span>
                </div>
              )}
           </div>
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[20px]"></div>
        </div>

        <div className="absolute bottom-12 font-bold text-3xl bg-white/90 px-8 py-3 rounded-full shadow-lg text-gray-800">
           KidsAI 🚀
        </div>
      </div>
    </div>
  );
}
