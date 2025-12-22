import { Star, Cloud, Heart, Zap } from 'lucide-react';

// 1. TASARIM VE TEMA AYARLARI
// Renkleri, ikonları ve arka planları buradan değiştirebilirsin.

// Tema nesnesinin yapısını tanımlıyoruz
export type ThemeStyle = {
  bg: string;
  gradient: string;
  accent: string;
  pill: string;
  icon: any;
  decor: string;
};

export const themes = {
  orange: {
    bg: "bg-[#FFF8F0]",
    gradient: "from-[#FFF8F0] via-[#FFE4D6] to-[#FFD1BC]",
    accent: "text-[#FF8A65]",
    pill: "bg-[#FF8A65]/10 text-[#FF8A65] border-[#FF8A65]/20",
    icon: Star,
    decor: "text-[#FFCCBC]",
  },
  blue: {
    bg: "bg-[#F0F7FF]",
    gradient: "from-[#F0F7FF] via-[#E1F0FF] to-[#C3E3FF]",
    accent: "text-[#4FC3F7]",
    pill: "bg-[#4FC3F7]/10 text-[#039BE5] border-[#4FC3F7]/20",
    icon: Cloud,
    decor: "text-[#B3E5FC]",
  },
  purple: {
    bg: "bg-[#FAF5FF]",
    gradient: "from-[#FAF5FF] via-[#F3E5F5] to-[#E1BEE7]",
    accent: "text-[#BA68C8]",
    pill: "bg-[#BA68C8]/10 text-[#8E24AA] border-[#BA68C8]/20",
    icon: Heart,
    decor: "text-[#E1BEE7]",
  },
  green: {
    bg: "bg-[#F1F8E9]",
    gradient: "from-[#F1F8E9] via-[#DCEDC8] to-[#C5E1A5]",
    accent: "text-[#81C784]",
    pill: "bg-[#81C784]/10 text-[#558B2F] border-[#81C784]/20",
    icon: Zap,
    decor: "text-[#C8E6C9]",
  },
  midnight: {
    bg: "bg-slate-950",
    gradient: "from-slate-950 via-indigo-950/50 to-slate-950",
    accent: "text-indigo-400",
    pill: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: Zap,
    decor: "text-slate-800",
  },
};

export type ThemeColor = keyof typeof themes;

/**
 * SlideContent tipi, her bir slaytın içeriğini tanımlar.
 */
export type SlideContent = {
  id: number;
  title: string;
  subtitle: string;
  color: ThemeColor;
  // İsteğe bağlı: Seçili temanın özelliklerini ezmek için özel tasarım ayarları
  custom?: Partial<ThemeStyle>;

  // --- YENİ TASARIM ALTYAPISI (INFRASTRUCTURE) ---
  layout?: 'classic' | 'modern-split' | 'hero-centered' | 'minimal';
  phoneStyle?: 'default' | 'floating' | 'tilted-left' | 'tilted-right' | 'flat';
  textAlign?: 'left' | 'center' | 'right';
  phoneScale?: number;
  phonePosition?: { x: number; y: number };
  mockup?: 'iphone-15' | 'pixel-8' | 'glass';

  // İsteğe bağlı varsayılan tasarım ayarları
  imageFit?: 'cover' | 'contain' | 'fill';
  imagePosition?: { x: number; y: number };
  imageZoom?: number;
  imageRotation?: number;
};

/**
 * LayoutConfig tipi, bir gönderi setinin (karusel) tamamını tanımlar.
 */
export type LayoutConfig = {
  name:string;
  slides: SlideContent[];
};

/**
 * layouts objesi, uygulamanın kullanabileceği tüm gönderi düzenlerini içerir.
 * Yeni bir karusel düzeni (örneğin 4 slaytlık) eklemek için buraya yeni bir nesne eklemen yeterlidir.
 */
export const layouts: { [key: string]: LayoutConfig } = {
  singlePost: {
    name: "Tekli Gönderi (Pro)",
    slides: [
      { 
        id: 1, 
        title: "Limitleri Kaldır", 
        subtitle: "Tek Dokunuşla Yönet", 
        color: "midnight",
      },
    ],
  },
  threeStepCarousel: {
    name: "3 Adımda Tanıtım",
    slides: [
      { id: 1, title: "Adım 1: Keşfet", subtitle: "Yenilik", color: "blue" },
      { id: 2, title: "Adım 2: Öğren", subtitle: "Kolaylık", color: "green" },
      { id: 3, title: "Adım 3: Uygula", subtitle: "Başarı", color: "purple" },
    ],
  },
  storytellingCarousel: {
    name: "5 Slaytlık Hikaye",
    slides: [
      { id: 1, title: "Her Şey Bir Fikirle Başladı", subtitle: "Giriş", color: "purple" },
      { id: 2, title: "Zorlukların Üstesinden Geldik", subtitle: "Gelişme", color: "blue" },
      { id: 3, title: "İnanılmaz Bir Çözüm Ürettik", subtitle: "Gelişme", color: "blue" },
      { id: 4, title: "Binlerce Kullanıcıya Ulaştık", subtitle: "Sonuç", color: "green" },
      { id: 5, title: "Sıra Sende!", subtitle: "Hemen İndir", color: "orange" },
    ],
  },
  
};