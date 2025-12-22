"use client";

import { useState, useRef, useEffect, createRef } from 'react';
import { layouts, LayoutConfig, SlideContent } from '@/components/layouts';
import { PostTemplate } from '@/components/post-template';
import { Image as ImageIcon, Upload } from 'lucide-react';

export default function Home() {
  const [activeLayoutKey, setActiveLayoutKey] = useState('launchAnnouncement');
  const activeLayout = layouts[activeLayoutKey] || layouts['launchAnnouncement'];
  
  const [slides, setSlides] = useState<SlideContent[]>(activeLayout.slides);
  const [images, setImages] = useState<Record<number, string | null>>({});
  
  const slideRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    if (layouts[activeLayoutKey]) {
      setSlides(layouts[activeLayoutKey].slides);
    }
  }, [activeLayoutKey]);

  if (slideRefs.current.length !== slides.length) {
    slideRefs.current = Array(slides.length)
      .fill(null)
      .map((_, i) => slideRefs.current[i] || createRef());
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, slideId: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => ({ ...prev, [slideId]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateSlideProperty = (id: number, field: keyof SlideContent, value: any) => {
    setSlides(slides.map(slide => 
      slide.id === id ? { ...slide, [field]: value } : slide
    ));
  };

  return (
    <main className="min-h-screen bg-slate-100 font-sans text-slate-900 overflow-hidden">
      
      {/* Üst Bar */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center text-2xl">🦊</div>
          <div>
            <h1 className="text-2xl font-luckiest text-slate-800 tracking-wider">KidsAI Post Studio</h1>
            <p className="text-sm text-slate-500 font-fredoka">Instagram İçerik Üreticisi</p>
          </div>
        </div>
        
        <select 
          value={activeLayoutKey}
          onChange={(e) => setActiveLayoutKey(e.target.value)}
          className="p-3 pl-4 pr-10 border-2 border-slate-200 rounded-xl bg-slate-50 font-fredoka font-bold focus:border-blue-400 outline-none appearance-none cursor-pointer"
          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27292.4%27%20height%3D%27292.4%27%3E%3Cpath%20fill%3D%27%23CBD5E0%27%20d%3D%27M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%27%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '0.8em' }}
        >
          {Object.entries(layouts).map(([key, config]) => (
            <option key={key} value={key}>
              {config.name}
            </option>
          ))}
        </select>
      </header>

      {/* Ana İçerik */}
      <div className="flex h-[calc(100vh-80px)] mt-20">
        
        {/* SOL: Kontrol Paneli (Scroll edilebilir) */}
        <div className="w-[400px] bg-white border-r border-slate-200 overflow-y-auto p-6 custom-scrollbar">
          <div className="space-y-8 pb-8">
            {slides.map((slide, index) => (
              <div key={slide.id} className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200/60">
                <h3 className="font-luckiest text-xl mb-6 flex items-center gap-3 text-slate-700">
                  <span className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center text-base border-2 border-white shadow-sm">
                    {index + 1}
                  </span>
                  Slayt Ayarları
                </h3>

                <div className="space-y-5 font-fredoka">
                  
                  {/* Telefon Ayarları */}
                  <div className="space-y-4 border-b-2 border-slate-200 pb-5">
                    <h4 className="text-sm font-bold text-slate-600">Telefon Duruşu</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            value={slide.phoneStyle || 'default'}
                            onChange={(e) => updateSlideProperty(slide.id, 'phoneStyle', e.target.value)}
                            className="col-span-2 p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold text-sm"
                        >
                            <option value="default">Varsayılan (Düz)</option>
                            <option value="floating">Havada (Floating)</option>
                            <option value="tilted-left">Sola Yatık</option>
                            <option value="tilted-right">Sağa Yatık</option>
                            <option value="flat">Düz & Küçük (Flat)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Telefon Boyutu ({slide.phoneScale || 1}x)</label>
                        <input
                          type="range" min="0.5" max="2" step="0.05"
                          value={slide.phoneScale || 1}
                          onChange={(e) => updateSlideProperty(slide.id, 'phoneScale', parseFloat(e.target.value))}
                          className="w-full accent-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Telefon Pozisyonu (X / Y)</label>
                        <div className='flex gap-2'>
                          <input type="range" min="-300" max="300" value={slide.phonePosition?.x ?? 0} onChange={(e) => updateSlideProperty(slide.id, 'phonePosition', { ...(slide.phonePosition || { x: 0, y: 0 }), x: parseInt(e.target.value) })} className="w-full accent-blue-500" title="Yatay Pozisyon" />
                          <input type="range" min="-300" max="300" value={slide.phonePosition?.y ?? 0} onChange={(e) => updateSlideProperty(slide.id, 'phonePosition', { ...(slide.phonePosition || { x: 0, y: 0 }), y: parseInt(e.target.value) })} className="w-full accent-blue-500" title="Dikey Pozisyon" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Telefon Açısı ({slide.phoneRotation ?? 0}°)</label>
                        <input
                          type="range" min="-45" max="45" step="1"
                          value={slide.phoneRotation ?? 0}
                          onChange={(e) => updateSlideProperty(slide.id, 'phoneRotation', parseInt(e.target.value))}
                          className="w-full accent-blue-500"
                        />
                    </div>
                  </div>

                  {/* Görsel Yükleme */}
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-3">Ekran Görüntüsü</label>
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-2 p-6 border-3 border-dashed border-slate-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group bg-white">
                      {images[slide.id] ? (
                        <img src={images[slide.id]!} className="h-32 object-contain rounded-lg shadow-sm" />
                      ) : (
                        <>
                          <Upload size={28} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                          <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600">Görsel Seçin</span>
                        </>
                      )}
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, slide.id)} />
                    </label>
                  </div>

                  {/* Görsel Ayarları */}
                  {images[slide.id] && (
                    <div className="space-y-5 font-fredoka border-t-2 border-slate-200 pt-5 mt-5">
                      <h4 className="text-sm font-bold text-slate-600 mb-2">Görsel Ayarları</h4>
                      
                      {/* Yakınlaştırma (Zoom) */}
                      <div>
                        <label className="block text-sm font-bold text-slate-500 mb-1">Yakınlaştırma ({slide.imageZoom || 1}x)</label>
                        <input
                          type="range" min="0.5" max="3" step="0.05"
                          value={slide.imageZoom || 1}
                          onChange={(e) => updateSlideProperty(slide.id, 'imageZoom', parseFloat(e.target.value))}
                          className="w-full accent-blue-500"
                        />
                      </div>

                      {/* Döndürme (Rotation) */}
                      <div>
                        <label className="block text-sm font-bold text-slate-500 mb-1">Döndürme ({slide.imageRotation || 0}°)</label>
                        <input
                          type="range" min="-45" max="45" step="1"
                          value={slide.imageRotation || 0}
                          onChange={(e) => updateSlideProperty(slide.id, 'imageRotation', parseInt(e.target.value))}
                          className="w-full accent-blue-500"
                        />
                      </div>

                      {/* Sığdırma (Fit) */}
                      <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">Sığdırma</label>
                        <select
                          value={slide.imageFit || 'cover'}
                          onChange={(e) => updateSlideProperty(slide.id, 'imageFit', e.target.value)}
                          className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold"
                        >
                          <option value="cover">Kapla (Cover)</option>
                          <option value="contain">Sığdır (Contain)</option>
                          <option value="fill">Doldur (Fill)</option>
                        </select>
                      </div>

                      {/* Pozisyon (X/Y) - Sadece 'cover' modunda etkili */}
                      <div>
                        <label className="block text-sm font-bold text-slate-500 mb-1">Görsel Pozisyonu (X / Y)</label>
                        <div className='flex gap-2'>
                          <input type="range" min="0" max="100" value={slide.imagePosition?.x ?? 50} onChange={(e) => updateSlideProperty(slide.id, 'imagePosition', { ...slide.imagePosition, x: parseInt(e.target.value) })} className="w-full accent-blue-500" title="Yatay Pozisyon" />
                          <input type="range" min="0" max="100" value={slide.imagePosition?.y ?? 50} onChange={(e) => updateSlideProperty(slide.id, 'imagePosition', { ...slide.imagePosition, y: parseInt(e.target.value) })} className="w-full accent-blue-500" title="Dikey Pozisyon" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metin Alanları */}
                  {[
                    { label: 'Seri Etiketi (Örn: #1)', field: 'seriesTag' },
                    { label: 'Üst Başlık (Hap)', field: 'subtitle' },
                    { label: 'Ana Başlık (Büyük)', field: 'title', textarea: true },
                    { label: 'CTA Metni (Baloncuk)', field: 'ctaText' },
                    { label: 'Alt Kutu Başlığı', field: 'storeTitle' },
                    { label: 'Alt Kutu Açıklaması', field: 'storeSubtitle' },
                  ].map((item) => (
                    (slide as any)[item.field] !== undefined && (
                      <div key={item.field}>
                        <label className="block text-sm font-bold text-slate-600 mb-2">{item.label}</label>
                        {item.textarea ? (
                          <textarea
                            value={(slide as any)[item.field]}
                            onChange={(e) => updateSlideProperty(slide.id, item.field as keyof SlideContent, e.target.value)}
                            className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none h-24 resize-none bg-white font-bold"
                          />
                        ) : (
                          <input
                            type="text"
                            value={(slide as any)[item.field]}
                            onChange={(e) => updateSlideProperty(slide.id, item.field as keyof SlideContent, e.target.value)}
                            className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold"
                          />
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ: Önizleme Alanı (Sabit ve Merkezde) */}
        <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
           {/* Arka plan deseni */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           
           <div className="flex gap-8 items-center h-full">
             {slides.map((slide, index) => (
               // DÜZELTME: Scale değeri ve container boyutu ayarlandı. Taşma önlendi.
               // 1080px genişliği ekrana sığdırmak için yaklaşık 0.4 - 0.5 arası bir scale gerekiyor.
               <div key={slide.id} className="transform scale-[0.45] 2xl:scale-[0.55] transition-transform origin-center shadow-2xl rounded-[40px] border-[8px] border-white/50">
                  <PostTemplate
                    reference={slideRefs.current[index]}
                    {...slide}
                    image={images[slide.id] || null}
                  />
               </div>
             ))}
           </div>
        </div>

      </div>
    </main>
  );
}