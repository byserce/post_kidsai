"use client";

import React, { useState, useRef, RefObject, ChangeEvent } from 'react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { Header } from '@/components/header';
import { TemplateCard } from '@/components/template-card';

export type SlideData = {
  id: number;
  color: 'orange' | 'blue' | 'purple' | 'green';
  title: string;
  subtitle: string;
};

const slides: SlideData[] = [
  { id: 1, color: "orange", title: "Turn Camera into Learning!", subtitle: "Keşfetmeye Hazır Mısın?" },
  { id: 2, color: "blue", title: "Real Life Scavenger Hunt", subtitle: "Nesneleri Bul, Puanları Topla!" },
  { id: 3, color: "purple", title: "Unlock Cute Animals", subtitle: "Koleksiyonunu Tamamla 🦁" },
  { id: 4, color: "green", title: "Learn in 8 Languages", subtitle: "🌍 English, Deutsch, Türkçe..." },
];

export default function Home() {
  const [images, setImages] = useState<Record<number, string | null>>({ 1: null, 2: null, 3: null, 4: null });
  
  const refs: Record<number, RefObject<HTMLDivElement>> = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      // Revoke previous object URL to avoid memory leaks
      if (images[id]) {
        URL.revokeObjectURL(images[id] as string);
      }
      const url = URL.createObjectURL(file);
      setImages(prev => ({ ...prev, [id]: url }));
    }
  };

  const downloadAll = async () => {
    for (const slide of slides) {
      const node = refs[slide.id].current;
      if (node) {
        try {
          const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 1 });
          download(dataUrl, `kidsai-post-${slide.id}.png`);
        } catch (error) {
          console.error(`Failed to generate image for slide ${slide.id}`, error);
        }
      }
    }
  };

  return (
    <main className="min-h-screen p-4 sm:p-8 font-body text-gray-800">
      <Header onDownloadAll={downloadAll} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {slides.map((slide) => (
          <TemplateCard 
            key={slide.id}
            slide={slide}
            image={images[slide.id]}
            handleImageUpload={handleImageUpload}
            postRef={refs[slide.id]}
          />
        ))}
      </div>
    </main>
  );
}
