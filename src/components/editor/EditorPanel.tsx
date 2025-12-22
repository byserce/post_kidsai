// src/components/editor/EditorPanel.tsx
import { useEditorStore } from '@/core/store';
import { DEFAULT_TRANSFORM } from '@/core/types';
import { RotateCcw } from 'lucide-react';

export const EditorPanel = () => {
  // DÜZELTME: updateSlide buraya eklendi
  const { 
    activeSlideId, slides, activeLanguage, 
    updateContent, updatePhoneTransform, updateImageTransform, 
    setLanguage, updateSlide 
  } = useEditorStore();

  const activeSlide = slides.find(s => s.id === activeSlideId);
  if (!activeSlide) return <div className="p-4">Slayt seçiniz</div>;

  // Kullanılabilir tema renkleri
  const themeColors = [
    { id: 'blue', class: 'bg-blue-500' },
    { id: 'indigo', class: 'bg-indigo-500' },
    { id: 'purple', class: 'bg-purple-500' },
    { id: 'rose', class: 'bg-rose-500' },
    { id: 'emerald', class: 'bg-emerald-500' },
    { id: 'yellow', class: 'bg-yellow-500' },
    { id: 'cyan', class: 'bg-cyan-400' },
  ];

  // Sıfırlama Butonu Bileşeni
  const ResetBtn = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-blue-600 transition-colors" title="Varsayılan Değere Sıfırla">
        <RotateCcw size={12} />
    </button>
  );

  return (
    <div className="w-[400px] h-full bg-white border-l border-slate-200 overflow-y-auto p-6 space-y-8">
      
      {/* 1. Dil Seçimi */}
      <div>
        <h3 className="font-bold text-slate-900 mb-2">Dil Seçimi</h3>
        <div className="flex gap-2 flex-wrap">
            {['en', 'tr', 'de', 'es', 'fr', 'ja', 'ko', 'ar'].map(l => (
                <button 
                    key={l} 
                    onClick={() => setLanguage(l as any)}
                    className={`px-3 py-1 rounded border ${activeLanguage === l ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
      </div>

      {/* 2. Tema Rengi */}
      <div>
        <h3 className="font-bold text-slate-900 mb-2">Tema Rengi</h3>
        <div className="flex gap-3">
            {themeColors.map(c => (
                <button 
                    key={c.id} 
                    onClick={() => updateSlide(activeSlide.id, { themeColor: c.id })}
                    className={`w-8 h-8 rounded-full transition-transform ${c.class} ${activeSlide.themeColor === c.id ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'hover:scale-105'}`}
                    title={c.id}
                />
            ))}
        </div>
      </div>

      {/* 3. İçerik Düzenleme (Seçili Dile Göre) */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-900 border-b pb-2">İçerik ({activeLanguage.toUpperCase()})</h3>
        <div>
            <label className="text-xs text-slate-500">Başlık</label>
            <textarea 
                className="w-full border rounded p-2" 
                value={activeSlide.content[activeLanguage].title}
                onChange={(e) => updateContent(activeSlide.id, 'title', e.target.value)}
            />
        </div>
        <div>
            <label className="text-xs text-slate-500">Alt Başlık</label>
            <input 
                className="w-full border rounded p-2" 
                value={activeSlide.content[activeLanguage].subtitle}
                onChange={(e) => updateContent(activeSlide.id, 'subtitle', e.target.value)}
            />
        </div>
        <div>
            <label className="text-xs text-slate-500">Açıklama Metni</label>
            <textarea 
                className="w-full border rounded p-2 h-20 text-sm" 
                value={(activeSlide.content[activeLanguage] as any).description || ''}
                onChange={(e) => updateContent(activeSlide.id, 'description' as any, e.target.value)}
            />
        </div>

        {/* Balonlar (Sadece Smart Mod İçin) */}
        {activeSlide.layoutId === 'smart-v1' && (
            <div className="space-y-2 border-t pt-3 mt-3 bg-slate-50 p-2 rounded">
                <h4 className="font-bold text-xs text-purple-600 uppercase">Sol Balon (AI)</h4>
                <input className="w-full border rounded p-2 text-xs" placeholder="Başlık" value={(activeSlide.content[activeLanguage] as any).bubble_1_title || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_1_title' as any, e.target.value)} />
                <input className="w-full border rounded p-2 text-xs" placeholder="Ana Metin" value={(activeSlide.content[activeLanguage] as any).bubble_1_main || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_1_main' as any, e.target.value)} />
                <input className="w-full border rounded p-2 text-xs" placeholder="Alt Metin" value={(activeSlide.content[activeLanguage] as any).bubble_1_sub || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_1_sub' as any, e.target.value)} />

                <h4 className="font-bold text-xs text-indigo-600 uppercase mt-2">Sağ Balon (Öğrenme)</h4>
                <input className="w-full border rounded p-2 text-xs" placeholder="Başlık" value={(activeSlide.content[activeLanguage] as any).bubble_2_title || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_2_title' as any, e.target.value)} />
                <input className="w-full border rounded p-2 text-xs" placeholder="Ana Metin" value={(activeSlide.content[activeLanguage] as any).bubble_2_main || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_2_main' as any, e.target.value)} />
                <input className="w-full border rounded p-2 text-xs" placeholder="Alt Metin" value={(activeSlide.content[activeLanguage] as any).bubble_2_sub || ''} onChange={(e) => updateContent(activeSlide.id, 'bubble_2_sub' as any, e.target.value)} />
            </div>
        )}
      </div>

      {/* 4. Telefon 3D Kontrolleri */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 border-b pb-2">Telefon Konumu (3D)</h3>
        
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Yatay (X)</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { x: 0 })} />
                </div>
                <input type="range" min="-300" max="300" 
                    value={activeSlide.phone.transform.x} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { x: Number(e.target.value) })} 
                />
            </div>
             <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Dikey (Y)</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { y: 0 })} />
                </div>
                <input type="range" min="-300" max="300" 
                    value={activeSlide.phone.transform.y} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { y: Number(e.target.value) })} 
                />
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Dönüş X (Eğim)</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { rotateX: 0 })} />
                </div>
                <input type="range" min="-60" max="60" 
                    value={activeSlide.phone.transform.rotateX} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { rotateX: Number(e.target.value) })} 
                />
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Dönüş Y (Yön)</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { rotateY: 0 })} />
                </div>
                <input type="range" min="-60" max="60" 
                    value={activeSlide.phone.transform.rotateY} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { rotateY: Number(e.target.value) })} 
                />
            </div>
             <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Dönüş Z (Açı)</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { rotateZ: 0 })} />
                </div>
                <input type="range" min="-180" max="180" 
                    value={activeSlide.phone.transform.rotateZ} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { rotateZ: Number(e.target.value) })} 
                />
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Boyut</label>
                    <ResetBtn onClick={() => updatePhoneTransform(activeSlide.id, { scale: 1 })} />
                </div>
                <input type="range" min="0.5" max="2" step="0.1"
                    value={activeSlide.phone.transform.scale} 
                    onChange={(e) => updatePhoneTransform(activeSlide.id, { scale: Number(e.target.value) })} 
                />
            </div>
        </div>
      </div>

      {/* 5. Resim İnce Ayar */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 border-b pb-2">Ekran Görseli</h3>
        <div>
            <label className="block mb-2 text-sm bg-slate-100 p-2 rounded cursor-pointer hover:bg-slate-200">
                Görsel Yükle
                <input type="file" className="hidden" 
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if(file) {
                             const reader = new FileReader();
                             reader.onload = (ev) => updateSlide(activeSlide.id, s => ({ image: { ...s.image, url: ev.target?.result as string } }));
                             reader.readAsDataURL(file);
                        }
                    }}
                />
            </label>
        </div>
        <div className="flex gap-2">
            <button 
                onClick={() => updateSlide(activeSlide.id, (s: any) => ({ image: { ...s.image, fit: 'cover' } }))}
                className={`flex-1 py-2 text-xs font-bold rounded border transition-colors ${activeSlide.image.fit === 'cover' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}
            >
                Doldur
            </button>
            <button 
                onClick={() => updateSlide(activeSlide.id, (s: any) => ({ image: { ...s.image, fit: 'contain' } }))}
                className={`flex-1 py-2 text-xs font-bold rounded border transition-colors ${activeSlide.image.fit === 'contain' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}
            >
                Sığdır
            </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Resim Zoom</label>
                    <ResetBtn onClick={() => updateImageTransform(activeSlide.id, { scale: 1 })} />
                </div>
                <input type="range" min="1" max="3" step="0.1"
                    value={activeSlide.image.transform.scale} 
                    onChange={(e) => updateImageTransform(activeSlide.id, { scale: Number(e.target.value) })} 
                />
            </div>
             <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Resim X</label>
                    <ResetBtn onClick={() => updateImageTransform(activeSlide.id, { x: 0 })} />
                </div>
                <input type="range" min="-100" max="100" 
                    value={activeSlide.image.transform.x} 
                    onChange={(e) => updateImageTransform(activeSlide.id, { x: Number(e.target.value) })} 
                />
            </div>
             <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="text-xs">Resim Y</label>
                    <ResetBtn onClick={() => updateImageTransform(activeSlide.id, { y: 0 })} />
                </div>
                <input type="range" min="-100" max="100" 
                    value={activeSlide.image.transform.y || 0} 
                    onChange={(e) => updateImageTransform(activeSlide.id, { y: Number(e.target.value) })} 
                />
            </div>
        </div>
      </div>

    </div>
  );
}