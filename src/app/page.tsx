"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Player, PlayerRef } from '@remotion/player';
import { KidsAIReel, ClickEvent } from '@/remotion/compositions/KidsAIReel';
import { ReelComposition, Language } from '@/core/types';
import { Upload, Download, Play, Type, Palette, MonitorPlay, MousePointer2, Trash2, PlusCircle, Loader2, FileJson } from 'lucide-react';

// Varsayılan Veriler
const DEFAULT_TEXTS = {
  tr: { hook: "HAYVANLARI\nKEŞFET! 🦁", cta: "HEMEN İNDİR", title: "KidsAI" },
  en: { hook: "DISCOVER\nANIMALS! 🦁", cta: "DOWNLOAD NOW", title: "KidsAI" },
  de: { hook: "TIERE\nENTDECKEN! 🦁", cta: "JETZT LADEN", title: "KidsAI" },
  es: { hook: "¡DESCUBRE\nANIMALES! 🦁", cta: "DESCARGAR", title: "KidsAI" },
};

export default function EditorPage() {
  // State Yönetimi
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [durationInSeconds, setDurationInSeconds] = useState(15);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(15);
  const [activeLang, setActiveLang] = useState<Language>('tr');
  const [primaryColor, setPrimaryColor] = useState('#EF4444'); // Kırmızı
  const [texts, setTexts] = useState(DEFAULT_TEXTS);
  const [isRendering, setIsRendering] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  // Tıklama Efekti State'leri
  const [clickEvents, setClickEvents] = useState<ClickEvent[]>([]);
  const [isClickMode, setIsClickMode] = useState(false);
  const playerRef = useRef<PlayerRef>(null);

  // Video Yükleme İşlemi
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      
      // Videonun gerçek süresini almayı dene
      const video = document.createElement('video');
      video.src = url;
      video.onloadedmetadata = () => {
        const duration = video.duration;
        setTrimEnd(duration);
        setDurationInSeconds(duration);
      };
    }
  };

  // Metin Güncelleme
  const updateText = (key: keyof typeof DEFAULT_TEXTS.tr, value: string) => {
    setTexts(prev => ({
      ...prev,
      [activeLang]: { ...prev[activeLang], [key]: value }
    }));
  };

  // Tıklama Ekleme İşlemi
  const handlePreviewClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClickMode || !playerRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const currentFrame = playerRef.current.getCurrentFrame();

    if (currentFrame !== null) {
        const newClick: ClickEvent = {
            id: Date.now().toString(),
            frame: currentFrame,
            x,
            y
        };
        setClickEvents([...clickEvents, newClick]);
    }
  };

  const removeClickEvent = (id: string) => {
      setClickEvents(clickEvents.filter(c => c.id !== id));
  };

  const updateClickTime = (id: string, newTime: number) => {
    setClickEvents(prev => prev.map(c => 
        c.id === id ? { ...c, frame: Math.max(0, Math.round(newTime * 30)) } : c
    ));
  };

  // Proje Kaydetme (JSON - Yedek)
  const handleSaveProject = () => {
    const exportData = {
        composition: "KidsAIReel",
        version: "1.0",
        createdAt: new Date().toISOString(),
        settings: {
            durationInSeconds,
            trimStart,
            trimEnd,
            activeLang,
            primaryColor,
            texts,
        },
        timeline: {
            clickEvents
        }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kidsai-project-${activeLang}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // MP4 Render İşlemi (Sunucu Taraflı)
  const handleRender = async () => {
    if (!videoFile) {
        alert("Lütfen önce bir video yükleyin.");
        return;
    }
    
    setIsRendering(true);
    try {
        const formData = new FormData();
        formData.append('file', videoFile);
        formData.append('inputProps', JSON.stringify({
            durationInSeconds,
            trimDuration: trimEnd - trimStart, // Süreyi hesapla
            primaryColor,
            texts,
            activeLanguage: activeLang,
            clickEvents
        }));
        // Kırpma bilgilerini ayrıca gönder (Server.ts bu alanları bekliyor)
        formData.append('trimStart', trimStart.toString());
        formData.append('trimDuration', (trimEnd - trimStart).toString());

        // Next.js API yerine harici Render Sunucusuna (Port 8000) istek atıyoruz
        const response = await fetch('http://localhost:8000/render', { method: 'POST', body: formData });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.details || errorData.error || 'Render işlemi başarısız oldu.');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `kidsai-render-${activeLang}-${Date.now()}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        console.error(error);
        alert(`Render Hatası: ${(error as Error).message}`);
    } finally {
        setIsRendering(false);
    }
  };

  // Render edilecek süreyi hesapla
  const currentDuration = trimEnd - trimStart;

  return (
    <div className="flex h-screen bg-[#0f172a] text-white font-sans overflow-hidden">
      
      {/* --- SOL PANEL: KONTROLLER --- */}
      <div className="w-[400px] bg-[#1e293b] border-r border-slate-700 flex flex-col h-full z-20 shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700 bg-slate-800/50">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
               <MonitorPlay size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Reels Factory
            </h1>
          </div>
          <p className="text-xs text-slate-400 ml-1">Viral Video Oluşturucu v1.0</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* 1. Video Upload */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Upload size={16} /> Medya Kaynağı
            </label>
            <div className="relative group">
              <input 
                type="file" 
                accept="video/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center bg-slate-800/50 group-hover:border-purple-500 group-hover:bg-slate-800 transition-all">
                {videoSrc ? (
                  <span className="text-green-400 font-medium flex items-center justify-center gap-2">
                    ✅ Video Yüklendi
                  </span>
                ) : (
                  <span className="text-slate-400 text-sm">
                    Ekran kaydını buraya sürükle veya seç
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* YENİ: Video Kesme (Trim) */}
          {videoSrc && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-green-400 uppercase tracking-wider flex items-center gap-2">
                ✂️ Video Kesme (Saniye)
              </label>
              <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                <div className="flex-1">
                    <span className="text-xs text-slate-500 block mb-1">Başlangıç</span>
                    <input 
                        type="number" 
                        step="0.1" 
                        min="0"
                        max={trimEnd}
                        value={trimStart}
                        onChange={(e) => setTrimStart(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-600 rounded p-1 text-center font-mono text-white"
                    />
                </div>
                <span className="text-slate-500">➜</span>
                <div className="flex-1">
                    <span className="text-xs text-slate-500 block mb-1">Bitiş</span>
                    <input 
                        type="number" 
                        step="0.1" 
                        min={trimStart}
                        value={trimEnd}
                        onChange={(e) => {
                            setTrimEnd(Number(e.target.value));
                            setDurationInSeconds(Number(e.target.value) - trimStart);
                        }}
                        className="w-full bg-slate-900 border border-slate-600 rounded p-1 text-center font-mono text-white"
                    />
                </div>
              </div>
              <p className="text-xs text-center text-slate-500">
                Süre: <span className="text-green-400 font-bold">{currentDuration.toFixed(1)} sn</span>
              </p>
            </div>
          )}

          {/* 2. Dil Seçimi */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
              Dil Seçimi
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['tr', 'en', 'de', 'es'] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`py-2 rounded-lg text-sm font-bold transition-all ${
                    activeLang === lang 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Metin Düzenleme */}
          <div className="space-y-4">
            <label className="text-sm font-semibold text-pink-400 uppercase tracking-wider flex items-center gap-2">
              <Type size={16} /> Metinler ({activeLang.toUpperCase()})
            </label>
            
            <div className="space-y-1">
              <span className="text-xs text-slate-500 ml-1">Vurucu Başlık (Hook)</span>
              <textarea
                value={texts[activeLang].hook}
                onChange={(e) => updateText('hook', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 outline-none resize-none h-20"
                placeholder="Örn: BUNU İZLEMEDEN GEÇME!"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 ml-1">Aksiyon Çağrısı (CTA)</span>
              <input
                value={texts[activeLang as keyof typeof texts].cta}
                onChange={(e) => updateText('cta', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 outline-none"
                placeholder="Örn: Link Bio'da"
              />
            </div>
          </div>

          {/* 5. Tıklama Efektleri */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <MousePointer2 size={16} /> Tıklama Efektleri
            </label>
            
            <button
                onClick={() => setIsClickMode(!isClickMode)}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    isClickMode 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 ring-2 ring-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
            >
                {isClickMode ? 'Kayıt Modu Aktif (Videoya Tıkla)' : 'Tıklama Ekle'}
                {isClickMode ? <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/> : <PlusCircle size={18} />}
            </button>

            {/* Eklenen Tıklamalar Listesi */}
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                {clickEvents.length === 0 && !isClickMode && (
                    <p className="text-xs text-slate-500 text-center py-2">Henüz tıklama efekti eklenmedi.</p>
                )}
                {clickEvents.map((click, index) => (
                    <div key={click.id} className="flex items-center justify-between bg-slate-800/50 p-2 rounded-lg border border-slate-700 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-400 font-bold">#{index + 1}</span>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0"
                                className="w-16 bg-slate-900 border border-slate-600 rounded px-1 text-center text-cyan-400 font-mono focus:ring-1 focus:ring-cyan-500 outline-none"
                                value={(click.frame / 30).toFixed(1)}
                                onChange={(e) => updateClickTime(click.id, parseFloat(e.target.value))}
                            />
                            <span className="text-slate-500">sn</span>
                        </div>
                        <button onClick={() => removeClickEvent(click.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
            </div>
          </div>

          {/* 4. Renk Ayarları */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
              <Palette size={16} /> Tema Rengi
            </label>
            <div className="flex gap-3">
              {['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'].map(color => (
                <button
                  key={color}
                  onClick={() => setPrimaryColor(color)}
                  className={`w-8 h-8 rounded-full transition-transform ${
                    primaryColor === color ? 'ring-2 ring-white scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Footer: Export */}
        <div className="p-6 border-t border-slate-700 bg-slate-800">
          <div className="flex gap-2">
            <button 
                onClick={handleSaveProject}
                className="bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-xl transition-colors"
                title="Projeyi Kaydet (JSON)"
            >
                <FileJson size={20} />
            </button>

          <button 
            className={`flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] ${isRendering ? 'opacity-75 cursor-not-allowed' : ''}`}
            onClick={handleRender}
            disabled={isRendering}
          >
            {isRendering ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
            {isRendering ? 'Render Alınıyor...' : `MP4 Olarak İndir (${activeLang.toUpperCase()})`}
          </button>
          </div>
        </div>

      </div>

      {/* --- ORTA PANEL: PREVIEW PLAYER --- */}
      <div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-900 flex items-center justify-center relative overflow-hidden">
        
        {/* Arka plan dekoru */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="relative z-10 shadow-2xl rounded-2xl overflow-hidden ring-8 ring-slate-800/50">
          {videoSrc ? (
            <div className="relative">
                {/* Tıklama Yakalama Katmanı (Sadece Mod Aktifken) */}
                {isClickMode && (
                    <div 
                        className="absolute inset-0 z-50 cursor-crosshair bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors border-4 border-cyan-400 border-dashed rounded-lg"
                        onClick={handlePreviewClick}
                        title="Efekt eklemek için tıklayın"
                    />
                )}
                
                <Player
                  ref={playerRef}
                  key={`${videoSrc}-${trimStart}-${trimEnd}`} // Değerler değişince Player'ı yenile
                  component={KidsAIReel}
                  durationInFrames={Math.max(1, Math.floor(currentDuration * 30))} // Kesilen süreye göre frame ayarla
                  fps={30}
                  compositionWidth={1080}
                  compositionHeight={1920}
                  style={{
                    width: '400px', // Önizleme boyutu
                    height: '711px',
                  }}
                  controls
                  autoPlay
                  loop
                  initiallyMuted={false}
                  clickToPlay={true}
                  inputProps={{
                    id: 'preview',
                    videoSrc: videoSrc,
                    durationInSeconds: currentDuration,
                    trimStart, // Başlangıç noktasını gönder
                    primaryColor,
                    texts,
                    activeLanguage: activeLang,
                    clickEvents // Yeni prop'u gönderiyoruz
                  }}
                />
            </div>
          ) : (
            <div className="w-[400px] h-[711px] bg-slate-800 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700 rounded-2xl">
              <Play size={48} className="mb-4 opacity-50" />
              <p>Önizleme için video yükleyin</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}