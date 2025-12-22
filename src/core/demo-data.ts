import { SlideData, DEFAULT_TRANSFORM } from './types';
import { v4 as uuidv4 } from 'uuid';

// Helper fonksiyon: Hızlıca slayt üretmek için
const createDemoSlide = (
  layoutId: string, 
  themeColor: string, 
  phoneTransform: Partial<typeof DEFAULT_TRANSFORM>,
  contentTR: { title: string; subtitle: string; cta?: string }
): SlideData => ({
  id: uuidv4(),
  layoutId,
  themeColor,
  phone: { 
    style: 'iphone-14', 
    transform: { ...DEFAULT_TRANSFORM, ...phoneTransform } // Varsayılanların üzerine yaz
  },
  image: { url: null, fit: 'cover', transform: { ...DEFAULT_TRANSFORM } },
  content: {
    tr: { ...contentTR, cta: contentTR.cta || '' },
    // Diğer diller için şimdilik İngilizce placeholder koyuyorum
    en: { title: 'Translation Ready', subtitle: 'Easily switch languages.', cta: 'Learn More' },
    de: { title: 'Übersetzung Bereit', subtitle: 'Einfach Sprache wechseln.', cta: 'Mehr erfahren' },
    es: { title: 'Listo para traducir', subtitle: 'Cambiar idioma fácilmente.', cta: 'Saber más' },
  }
});

export const DEMO_SLIDES: SlideData[] = [
  // SLAYT 1: Giriş (Hero) - Mavi Tema, Hafif Sağ Açılı Telefon
  createDemoSlide('hero-v1', 'blue', { rotateY: -15, rotateX: 10, scale: 0.9 }, {
    title: "Post Tasarımında Devrim.",
    subtitle: "KidsAI Studio ile Tanışın"
  }),

  // SLAYT 2: 3D Özelliği - Mor Tema, Dramatik Eğim
  createDemoSlide('hero-v1', 'purple', { rotateY: 35, rotateZ: -10, x: 50, scale: 0.85 }, {
    title: "Gerçek 3D Kontrol",
    subtitle: "Telefonu uzayda döndürün, eğin ve yönetin. Sıradanlıktan kurtulun."
  }),

  // SLAYT 3: Modüler Yapı (Split Layout) - Koyu Tema, Yandan Bakış
  createDemoSlide('split-v1', 'slate', { x: 150, rotateY: -25, scale: 0.9 }, {
    title: "Modüler Tasarım",
    subtitle: "Profesyonel düzenler arasında anında geçiş yapın.",
    cta: "KEŞFET"
  }),

  // SLAYT 4: Çoklu Dil - Yeşil Tema, Öne Çıkan Düz Telefon
  createDemoSlide('hero-v1', 'green', { scale: 1.1, y: -20 }, {
    title: "Tek Tıkla 4 Dil",
    subtitle: "TR, EN, DE, ES anında hazır. İçeriğinizi globalleştirin."
  }),

  // SLAYT 5: Odaklanma - Turuncu Tema, Ekrana Zoom
  createDemoSlide('hero-v1', 'orange', { scale: 1.5, y: 50, rotateX: 15 }, {
    title: "Detaylara Odaklanın",
    subtitle: "Görselleri ve metinleri piksel piksel işleyin."
  }),

   // SLAYT 6: Kapanış (CTA) - Kırmızı Tema, Yükselen Telefon
   createDemoSlide('hero-v1', 'red', { y: -80, rotateX: -10, scale: 0.95, rotateZ: 2 }, {
    title: "Hemen Başlayın!",
    subtitle: "Sosyal medya oyununuzu bir üst seviyeye taşıyın."
  }),
];