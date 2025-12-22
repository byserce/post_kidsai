// src/app/page.tsx
"use client";

import { useEffect, useRef } from 'react';
import { useEditorStore } from '@/core/store';
import { SlideRenderer } from '@/components/renderer/SlideRenderer';
import { EditorPanel } from '@/components/editor/EditorPanel';
import { Plus } from 'lucide-react';

// PROFESYONEL ÇOCUK UYGULAMASI DEMO VERİSİ
const KIDS_APP_DEMO = [
  {
    id: 'slide-1',
    layoutId: 'hero-v1',
    themeColor: 'cyan', // Uygulamanın ana rengi
    content: {
      tr: { 
        title: 'KidsAI Dünyası', 
        subtitle: 'YAPAY ZEKA KAMERA', 
        cta: 'Hemen İndir',
        description: 'Kamerayı doğrult, yapay zeka tanısın! Çocuklar için en eğlenceli öğrenme aracı.',
        rating: '8 Dilde Eğitim'
      },
      en: { 
        title: 'KidsAI World', 
        subtitle: 'AI CAMERA MAGIC', 
        cta: 'Download Now',
        description: 'Point the camera, let AI recognize it! The most fun way to learn for kids.',
        rating: 'Learn in 8 Languages'
      },
      de: { 
        title: 'KidsAI Welt', 
        subtitle: 'KI-KAMERA MAGIE', 
        cta: 'Jetzt Laden',
        description: 'Richte die Kamera aus, lass die KI es erkennen!',
        rating: 'Lernen in 8 Sprachen'
      },
      es: { 
        title: 'Mundo KidsAI', subtitle: 'CÁMARA IA MÁGICA', cta: 'Descargar', description: '¡Apunta la cámara y aprende!', rating: 'Aprende en 8 Idiomas' 
      },
      fr: { 
        title: 'Monde KidsAI', subtitle: 'MAGIE CAMÉRA IA', cta: 'Télécharger', description: 'Pointez la caméra, laissez l\'IA reconnaître !', rating: 'Apprendre en 8 langues' 
      },
      ja: { 
        title: 'KidsAIワールド', subtitle: 'AIカメラの魔法', cta: 'ダウンロード', description: 'カメラを向けて、AIに認識させよう！', rating: '8ヶ国語で学ぶ' 
      },
      ko: { 
        title: 'KidsAI 월드', subtitle: 'AI 카메라 매직', cta: '다운로드', description: '카메라를 비추고 AI가 인식하게 하세요!', rating: '8개 언어로 학습' 
      },
      ar: { 
        title: 'عالم KidsAI', subtitle: 'سحر الكاميرا', cta: 'حمل الآن', description: 'وجه الكاميرا، ودع الذكاء الاصطناعي يتعرف عليها!', rating: 'تعلم بـ 8 لغات' 
      },
    },
    phone: {
      transform: { x: 0, y: 40, rotateX: -5, rotateY: -5, rotateZ: 0, scale: 1.1 }
    },
    image: {
      url: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?q=80&w=800&auto=format&fit=crop', // Çocuk ve Tablet görseli
      fit: 'cover',
      transform: { x: 0, y: 0, scale: 1.1, rotateZ: 0 }
    }
  },
  {
    id: 'slide-2',
    layoutId: 'classic-v1',
    themeColor: 'rose', // Klasik Mod rengi
    content: {
      tr: { title: 'Klasik Mod', subtitle: 'FOTOĞRAF ÇEK', cta: 'Hemen Dene', description: 'İnternet olmasa bile dilediğin zaman fotoğraf çek, nesnelerin ismini anında öğren!', rating: 'Eğitici' },
      en: { title: 'Classic Mode', subtitle: 'TAKE PHOTO', cta: 'Try Now', description: 'Take photos anytime, even without internet, and learn object names instantly!', rating: 'Educational' },
      de: { title: 'Klassik Modus', subtitle: 'FOTO MACHEN', cta: 'Probieren', description: 'Mach jederzeit Fotos, auch ohne Internet, und lerne sofort Namen!', rating: 'Lehrreich' },
      es: { title: 'Modo Clásico', subtitle: 'TOMAR FOTO', cta: 'Probar', description: '¡Toma fotos en cualquier momento, incluso sin internet, y aprende nombres!', rating: 'Educativo' },
      fr: { title: 'Mode Classique', subtitle: 'PRENDRE PHOTO', cta: 'Essayer', description: 'Prenez des photos à tout moment, même sans internet, et apprenez !', rating: 'Éducatif' },
      ja: { title: 'クラシックモード', subtitle: '写真を撮る', cta: '試す', description: 'インターネットがなくても、いつでも写真を撮って名前を学ぼう！', rating: '教育的' },
      ko: { title: '클래식 모드', subtitle: '사진 찍기', cta: '시도하기', description: '인터넷 없이도 언제든지 사진을 찍고 이름을 배우세요!', rating: '교육용' },
      ar: { title: 'الوضع الكلاسيكي', subtitle: 'التقط صورة', cta: 'جرب الآن', description: 'التقط الصور في أي وقت، حتى بدون إنترنت، وتعلم الأسماء فوراً!', rating: 'تعليمي' },
    },
    phone: {
      transform: { x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1.0 }
    },
    image: {
      url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', // Köpek görseli
      fit: 'cover',
      transform: { x: 0, y: 0, scale: 1, rotateZ: 0 }
    }
  },
  {
    id: 'slide-3',
    layoutId: 'smart-v1',
    themeColor: 'purple', // Akıllı Mod (Smart Mode) rengi
    content: {
      tr: { 
        title: 'Akıllı Mod', subtitle: 'AI ÖĞRETMEN', cta: 'Keşfet', description: 'Sadece ismini değil, ne olduğunu da anlatır! Çocuklar için basitleştirilmiş detaylı açıklamalar.', rating: "Editörün Seçimi",
        bubble_1_title: "AI Analiz", bubble_1_main: "Bu bir Kedi! 🐱", bubble_1_sub: "Yumuşak tüyleri vardır ve mırıldanır.",
        bubble_2_title: "Öğrenme Modu", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      en: { 
        title: 'Smart Mode', subtitle: 'AI TEACHER', cta: 'Explore', description: 'Not just the name, but explains what it is! Detailed explanations simplified for kids.', rating: "Editor's Choice",
        bubble_1_title: "AI Analysis", bubble_1_main: "This is a Cat! 🐱", bubble_1_sub: "It has soft fur and purrs.",
        bubble_2_title: "Learning Mode", bubble_2_main: "¡Es un Gato! 🐱", bubble_2_sub: "Tiene pelaje suave y ronronea."
      },
      de: { 
        title: 'Smart Modus', subtitle: 'KI LEHRER', cta: 'Entdecken', description: 'Nicht nur der Name, sondern auch Erklärungen! Kindgerecht vereinfacht.', rating: "Editor's Choice",
        bubble_1_title: "KI Analyse", bubble_1_main: "Das ist eine Katze! 🐱", bubble_1_sub: "Sie hat weiches Fell und schnurrt.",
        bubble_2_title: "Lernmodus", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      es: { 
        title: 'Modo Inteligente', subtitle: 'PROFESOR IA', cta: 'Explorar', description: '¡No solo el nombre, explica qué es! Explicaciones detalladas para niños.', rating: "Editor's Choice",
        bubble_1_title: "Análisis IA", bubble_1_main: "¡Es un Gato! 🐱", bubble_1_sub: "Tiene pelaje suave y ronronea.",
        bubble_2_title: "Modo Aprendizaje", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      fr: { 
        title: 'Mode Intelligent', subtitle: 'PROFESSEUR IA', cta: 'Explorer', description: 'Pas seulement le nom, mais explique ce que c\'est ! Explications simplifiées.', rating: "Choix de l'éditeur",
        bubble_1_title: "Analyse IA", bubble_1_main: "C'est un Chat ! 🐱", bubble_1_sub: "Il a une fourrure douce et ronronne.",
        bubble_2_title: "Mode Apprentissage", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      ja: { 
        title: 'スマートモード', subtitle: 'AI先生', cta: '探検する', description: '名前だけでなく、それが何かも説明します！子供向けにわかりやすく解説。', rating: '編集部のおすすめ',
        bubble_1_title: "AI分析", bubble_1_main: "これは猫です！ 🐱", bubble_1_sub: "柔らかい毛並みで喉を鳴らします。",
        bubble_2_title: "学習モード", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      ko: { 
        title: '스마트 모드', subtitle: 'AI 선생님', cta: '탐험하기', description: '이름뿐만 아니라 무엇인지도 설명해줍니다! 아이들을 위한 쉬운 설명.', rating: '에디터의 선택',
        bubble_1_title: "AI 분석", bubble_1_main: "이것은 고양이입니다! 🐱", bubble_1_sub: "부드러운 털을 가지고 있고 가르랑거립니다.",
        bubble_2_title: "학습 모드", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
      ar: { 
        title: 'الوضع الذكي', subtitle: 'معلم الذكاء', cta: 'استكشف', description: 'لا يذكر الاسم فقط، بل يشرح ما هو! شروحات مفصلة ومبسطة للأطفال.', rating: 'اختيار المحرر',
        bubble_1_title: "تحليل الذكاء", bubble_1_main: "هذه قطة! 🐱", bubble_1_sub: "لديها فراء ناعم وتخرخر.",
        bubble_2_title: "وضع التعلم", bubble_2_main: "This is a Cat! 🐱", bubble_2_sub: "It has soft fur and purrs."
      },
    },
    phone: {
      transform: { x: 0, y: 20, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1.2 }
    },
    image: {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop', // Mutlu çocuk görseli
      fit: 'cover',
      transform: { x: 0, y: 0, scale: 1.1, rotateZ: 0 }
    }
  }
];

export default function PostFactoryPage() {
  const { slides, addSlide, activeSlideId, selectSlide, activeLanguage } = useEditorStore();
  
  // Zustand'ın state'ini toplu güncellemek için setState fonksiyonuna erişiyoruz
  const setState = useEditorStore.setState;
  const isLoaded = useRef(false);

  // Sayfa ilk yüklendiğinde: Demo verisini al + LocalStorage'daki görsel ayarları uygula
  useEffect(() => {
    const savedData = localStorage.getItem('kidsai-post-creator-v1');
    
    // Demo verisinin temiz bir kopyasını oluştur
    let initialSlides = JSON.parse(JSON.stringify(KIDS_APP_DEMO));

    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Sadece görsel ayarları (overrides) demo verisiyle birleştir
        if (parsed.overrides && Array.isArray(parsed.overrides)) {
          console.log("Local storage görsel ayarları yüklendi.");
          
          initialSlides = initialSlides.map((slide: any) => {
            const saved = parsed.overrides.find((o: any) => o.id === slide.id);
            if (saved) {
              return {
                ...slide,
                phone: saved.phone || slide.phone, // Kayıtlı telefon konumu
                image: saved.image || slide.image  // Kayıtlı resim
              };
            }
            return slide;
          });
        }
      } catch (e) {
        console.error("Local storage yüklenemedi:", e);
      }
    }

    // State'i başlat
    setState({ 
      slides: initialSlides, 
      activeSlideId: initialSlides[0].id 
    });
    
    isLoaded.current = true;
  }, []);

  // Sadece görsel ayarları (Phone ve Image) kaydet, yazıları kaydetme
  useEffect(() => {
    if (!isLoaded.current) return;

    // Sadece id, phone ve image verilerini filtrele
    const overrides = slides.map(s => ({
      id: s.id,
      phone: s.phone,
      image: s.image
    }));
    
    localStorage.setItem('kidsai-post-creator-v1', JSON.stringify({ overrides }));
  }, [slides]);

  return (
    <div className="flex w-full h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* SOL: Slayt Listesi */}
      <div className="w-24 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-4 z-20 overflow-y-auto custom-scrollbar">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => selectSlide(slide.id)}
            className={`w-16 h-16 rounded-xl border-2 transition-all overflow-hidden relative shrink-0 ${
              activeSlideId === slide.id ? 'border-blue-600 ring-2 ring-blue-100 scale-105' : 'border-slate-200 hover:border-slate-400'
            }`}
          >
            {/* Küçük Önizleme - Performans için scale kullanıyoruz */}
            <div className="absolute inset-0 scale-[0.15] origin-top-left w-[1080px] h-[1350px] pointer-events-none bg-white">
                <SlideRenderer data={slide} lang={activeLanguage} />
            </div>
            <div className="absolute bottom-0 right-0 bg-black text-white text-[10px] px-1 font-bold">{index + 1}</div>
          </button>
        ))}
        
        <button 
            onClick={() => addSlide('split-v1')} 
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-colors"
            title="Yeni Slayt Ekle"
        >
            <Plus size={24} />
        </button>
      </div>

      {/* ORTA: Canvas (Sahne) */}
      <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
         {/* Arkaplan Grid Deseni */}
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
         
         {/* Canvas Alanı */}
         <div className="w-full h-full flex items-center justify-center overflow-auto">
            {activeSlideId && (
              <div className="transform scale-[0.65] shadow-2xl shadow-slate-300 border border-slate-200 transition-all duration-300">
                  <SlideRenderer 
                    data={slides.find(s => s.id === activeSlideId)!} 
                    lang={activeLanguage}
                  />
              </div>
            )}
         </div>
      </div>

      {/* SAĞ: Editör Paneli */}
      <div className="z-20 shadow-xl relative h-full">
        <EditorPanel />
      </div>

    </div>
  );
}