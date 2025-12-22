
"use client";

import { useState, useRef, type ChangeEvent, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { Upload, Download, Move, ZoomIn, Maximize, Edit3, X, Check, RotateCw, RefreshCcw, Component } from 'lucide-react';
import { toPng } from 'html-to-image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { PostTemplate } from './post-template';
import type { SlideContent } from '@/components/layouts';

type TemplateCardProps = {
  slide: SlideContent;
  image: string | null;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  handleSlideUpdate: (id: number, updatedData: Partial<SlideContent>) => void;
  postRef: RefObject<HTMLDivElement>;
  TemplateComponent?: React.ComponentType<any>;
};

export function TemplateCard({ slide, image, handleImageUpload, postRef, handleSlideUpdate, TemplateComponent = PostTemplate }: TemplateCardProps) {
  // Resim Ayarları State'leri
  const [zoom, setZoom] = useState(slide.imageZoom || 1);
  const [position, setPosition] = useState(slide.imagePosition || { x: 50, y: 50 });
  const [fit, setFit] = useState<'cover' | 'contain'>(slide.imageFit === 'contain' ? 'contain' : 'cover');
  const [isEditing, setIsEditing] = useState(false);
  const [rotation, setRotation] = useState(slide.imageRotation || 0);
  
  // Sürükleme (Drag) Mantığı
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const sensitivity = 0.25; // Hassasiyet ayarı
    const newX = Math.max(0, Math.min(100, startPos.current.x - (dx * sensitivity)));
    const newY = Math.max(0, Math.min(100, startPos.current.y - (dy * sensitivity)));
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleReset = () => {
    setZoom(slide.imageZoom || 1);
    setPosition(slide.imagePosition || { x: 50, y: 50 });
    setRotation(slide.imageRotation || 0);
    setFit(slide.imageFit === 'contain' ? 'contain' : 'cover');
  };

  // İndirme Fonksiyonu
  const handleDownload = async () => {
    if (postRef.current) {
      try {
        const dataUrl = await toPng(postRef.current, {
          pixelRatio: 2,
          filter: (node: any) => !node.classList?.contains('exclude-from-export'),
        });
        const link = document.createElement('a');
        link.download = `${slide.title.replace(/\s+/g, '-').toLowerCase()}-post.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('İndirme hatası:', err);
      }
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg border-green-200/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <CardTitle className="font-headline font-bold text-lg text-muted-foreground">Slayt #{slide.id}</CardTitle>
        </div>
        
        <div className="flex items-center gap-2">
        <Button onClick={handleDownload} variant="secondary" size="sm" className="bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200">
            <Download size={16} className="mr-2" />
            İndir
          </Button>

        {image && (
          <Button variant="secondary" size="sm" onClick={() => setIsEditing(true)} className="bg-orange-100 text-orange-700 hover:bg-orange-200 border border-orange-200">
            <Edit3 size={16} className="mr-2" />
            Düzenle
          </Button>
        )}

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
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor={`title-${slide.id}`} className="text-xs font-bold text-gray-500 uppercase tracking-wider">Başlık</Label>
            <Input
              id={`title-${slide.id}`}
              value={slide.title}
              onChange={(e) => handleSlideUpdate(slide.id, { title: e.target.value })}
              className="bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`subtitle-${slide.id}`} className="text-xs font-bold text-gray-500 uppercase tracking-wider">Alt Başlık</Label>
            <Input
              id={`subtitle-${slide.id}`}
              value={slide.subtitle}
              onChange={(e) => handleSlideUpdate(slide.id, { subtitle: e.target.value })}
              className="bg-white"
            />
          </div>
        </div>
        <div className="border-4 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden h-[620px] w-full relative">
          <div className="scale-[0.45] origin-center">
            <TemplateComponent 
              reference={postRef}
              title={slide.title} 
              subtitle={slide.subtitle} 
              color={slide.color} 
              image={image} 
              imageFit={fit}
              imagePosition={position}
              imageZoom={zoom}
              imageRotation={rotation}
            />
          </div>
        </div>

        {/* Düzenleme Modalı */}
        {isEditing && image && createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
              
              {/* Kapat Butonu */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsEditing(false)} 
                className="absolute top-4 right-4 z-50 bg-white/50 hover:bg-white rounded-full"
              >
                <X size={24} />
              </Button>

              {/* Sol: Büyük Önizleme Alanı */}
              <div 
                className="flex-1 bg-gray-50/50 flex items-center justify-center p-8 relative overflow-hidden border-r border-gray-100 select-none"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                 {/* Grid Arka Plan */}
                 <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 {/* PostTemplate ile Bire Bir Aynı Telefon Yapısı (Ölçeklendirilmiş) */}
                 <div className="relative transform scale-[0.75] origin-center">
                   <div 
                     className="relative w-[420px] h-[860px] bg-black rounded-[56px] border-[12px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-gray-900/50 z-10 cursor-move"
                     onMouseDown={handleMouseDown}
                   >
                      <div className="w-full h-full bg-black overflow-hidden relative">
                        <img 
                          src={image} 
                          className="w-full h-full"
                          style={{ 
                            objectFit: fit, 
                            objectPosition: `${position.x}% ${position.y}%`,
                            transform: `scale(${zoom}) rotate(${rotation}deg)`,
                            pointerEvents: 'none'
                          }}
                        />
                        {/* Rehber Çizgiler (Grid) */}
                        <div className="absolute inset-0 pointer-events-none opacity-30 border border-white/30">
                          <div className="absolute top-1/3 w-full h-px bg-white/50 shadow-sm"></div>
                          <div className="absolute top-2/3 w-full h-px bg-white/50 shadow-sm"></div>
                          <div className="absolute left-1/3 h-full w-px bg-white/50 shadow-sm"></div>
                          <div className="absolute left-2/3 h-full w-px bg-white/50 shadow-sm"></div>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>

              {/* Sağ: Kontroller */}
              <div className="w-full md:w-[400px] bg-white p-8 flex flex-col h-full overflow-y-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Görsel Düzenle</h3>
                  <p className="text-gray-500">Görseli sürükleyerek veya aşağıdaki kontrollerle ayarlayın.</p>
                </div>

                <div className="space-y-8 flex-1">
                  {/* Fit Mode */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Araçlar</span>
                       <Button variant="ghost" size="sm" className="text-xs h-auto py-1" onClick={handleReset}>
                         <RefreshCcw size={14} className="mr-2" />
                         Sıfırla
                       </Button>
                     </div>
                     <div className="grid grid-cols-3 gap-2">
                        <button 
                          onClick={() => setFit('cover')} 
                          className={`p-3 text-sm font-medium rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${fit === 'cover' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                        >
                          <Maximize size={16} /> <span>Doldur</span>
                        </button>
                        <button 
                          onClick={() => setFit('contain')} 
                          className={`p-3 text-sm font-medium rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${fit === 'contain' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                        >
                          <Move size={16} /> <span>Sığdır</span>
                        </button>
                        <button 
                          onClick={() => setRotation(prev => (prev + 90) % 360)} 
                          className={`p-3 text-sm font-medium rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 border-gray-100 hover:border-gray-200 text-gray-600`}
                        >
                          <RotateCw size={16} /> <span>Döndür</span>
                        </button>
                     </div>
                  </div>

                  {/* Zoom */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Yakınlaştırma</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">{Math.round(zoom * 100)}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="4" 
                      step="0.1" 
                      value={zoom} 
                      onChange={(e) => setZoom(parseFloat(e.target.value))} 
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                    />
                  </div>

                  {/* Position */}
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Konumlandırma</span>
                    
                    <div className="space-y-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500"><span>Yatay (X)</span> <span>{position.x}%</span></div>
                        <input type="range" min="0" max="100" value={position.x} onChange={(e) => setPosition({...position, x: parseInt(e.target.value)})} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500"><span>Dikey (Y)</span> <span>{position.y}%</span></div>
                        <input type="range" min="0" max="100" value={position.y} onChange={(e) => setPosition({...position, y: parseInt(e.target.value)})} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={() => setIsEditing(false)} className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-4 mt-8 text-lg font-medium shadow-lg shadow-gray-200">
                  <Check size={20} className="mr-2" />
                  Düzenlemeyi Tamamla
                </Button>
              </div>
            </div>
          </div>
        , document.body)}

      </CardContent>
    </Card>
  );
}
