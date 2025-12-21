"use client";

import type { ChangeEvent, RefObject } from 'react';
import { Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PostTemplate } from './post-template';
import { Button } from './ui/button';
import type { SlideData } from '@/app/page';

type TemplateCardProps = {
  slide: SlideData;
  image: string | null;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  postRef: RefObject<HTMLDivElement>;
};

export function TemplateCard({ slide, image, handleImageUpload, postRef }: TemplateCardProps) {
  return (
    <Card className="bg-white/60 overflow-hidden shadow-lg border-green-200/50 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-headline font-bold text-lg text-muted-foreground">Slayt #{slide.id}</CardTitle>
        <label htmlFor={`upload-${slide.id}`} className="cursor-pointer">
          <Button asChild variant="outline" size="sm">
            <div className="flex items-center gap-2">
              <Upload size={16} />
              Görsel Seç
            </div>
          </Button>
          <input 
            id={`upload-${slide.id}`} 
            type="file" 
            className="hidden" 
            onChange={(e) => handleImageUpload(e, slide.id)} 
            accept="image/*" 
          />
        </label>
      </CardHeader>
      <CardContent>
        <div className="border-4 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden h-[450px] w-full relative">
          <div className="scale-[0.35] origin-center" style={{ transform: 'translateY(-15%)' }}>
            <PostTemplate 
              reference={postRef}
              title={slide.title} 
              subtitle={slide.subtitle} 
              color={slide.color} 
              image={image} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
