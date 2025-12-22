// src/core/store.ts
import { create } from 'zustand';
import { SlideData, Language, DEFAULT_TRANSFORM } from './types';
import { v4 as uuidv4 } from 'uuid'; // npm install uuid types-uuid

interface EditorState {
  activeLanguage: Language;
  slides: SlideData[];
  activeSlideId: string | null;

  // Actions
  setLanguage: (lang: Language) => void;
  addSlide: (layoutId: string) => void;
  selectSlide: (id: string) => void;
  setSlides: (slides: SlideData[]) => void;
  
  // Generic Update (OOP yaklaşımı: Tek bir metodla her şeyi güncelle)
  updateSlide: (id: string, partial: Partial<SlideData> | ((prev: SlideData) => Partial<SlideData>)) => void;
  
  // İç içe obje güncellemeleri için helperlar
  updatePhoneTransform: (id: string, transform: Partial<typeof DEFAULT_TRANSFORM>) => void;
  updateImageTransform: (id: string, transform: Partial<typeof DEFAULT_TRANSFORM>) => void;
  updateContent: (id: string, field: string, value: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeLanguage: 'tr',
  slides: [],
  activeSlideId: null,

  setLanguage: (lang) => set({ activeLanguage: lang }),

  addSlide: (layoutId) => set((state) => {
    const newSlide: SlideData = {
      id: uuidv4(),
      layoutId,
      themeColor: 'blue',
      phone: { style: 'iphone-14', transform: { ...DEFAULT_TRANSFORM, scale: 0.8 } },
      image: { url: null, fit: 'cover', transform: { ...DEFAULT_TRANSFORM } },
      content: {
        tr: { title: 'Yeni Başlık', subtitle: 'Alt Başlık', cta: 'İncele' },
        en: { title: 'New Title', subtitle: 'Subtitle', cta: 'Check it' },
        de: { title: 'Titel', subtitle: 'Untertitel', cta: 'Prüfen' },
        es: { title: 'Título', subtitle: 'Subtítulo', cta: 'Ver' },
      }
    };
    return { 
      slides: [...state.slides, newSlide],
      activeSlideId: newSlide.id
    };
  }),

  selectSlide: (id) => set({ activeSlideId: id }),

  setSlides: (slides) => set({ 
    slides, 
    activeSlideId: slides.length > 0 ? slides[0].id : null 
  }),

  updateSlide: (id, updater) => set((state) => ({
    slides: state.slides.map(s => 
      s.id === id ? { ...s, ...(typeof updater === 'function' ? updater(s) : updater) } : s
    )
  })),

  updatePhoneTransform: (id, updates) => set((state) => ({
    slides: state.slides.map(s => 
      s.id === id ? { ...s, phone: { ...s.phone, transform: { ...s.phone.transform, ...updates } } } : s
    )
  })),

  updateImageTransform: (id, updates) => set((state) => ({
    slides: state.slides.map(s => 
      s.id === id ? { ...s, image: { ...s.image, transform: { ...s.image.transform, ...updates } } } : s
    )
  })),

  updateContent: (id, field, value) => set((state) => ({
    slides: state.slides.map(s => {
      if (s.id !== id) return s;
      return {
        ...s,
        content: {
          ...s.content,
          [state.activeLanguage]: {
            ...s.content[state.activeLanguage],
            [field]: value
          }
        }
      };
    })
  }))
}));