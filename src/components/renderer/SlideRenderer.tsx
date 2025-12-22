// src/components/renderer/SlideRenderer.tsx
import React from 'react';
import { SlideData, Language } from '@/core/types';
import { LayoutHero } from './layouts/LayoutHero';
import { LayoutSplit } from './layouts/LayoutSplit';
import { LayoutClassic } from './layouts/secondpage';
import { LayoutSmart } from './layouts/thirdpage';

// Tasarım kodlarını buraya kaydediyoruz
const LAYOUT_REGISTRY: Record<string, React.FC<any>> = {
  'hero-v1': LayoutHero,
  'split-v1': LayoutSplit,
  'classic-v1': LayoutClassic,
  'smart-v1': LayoutSmart,
};

export const SlideRenderer = ({ data, lang }: { data: SlideData; lang: Language }) => {
  const Component = LAYOUT_REGISTRY[data.layoutId] || LayoutHero;
  
  return (
    // 1080x1350 Instagram Post Boyutu
    <div className="w-[1080px] h-[1350px] bg-white relative shadow-2xl overflow-hidden shrink-0">
      <Component data={data} lang={lang} />
    </div>
  );
};