import { Star, Cloud, Sparkles, Zap, Heart, Rocket } from 'lucide-react';

// --- TİP TANIMLAMALARI ---
export type ThemeStyle = {
  bg: string;       // Arka plan rengi (tailwind class)
  gradient: string; // Arka plan gradyanı (tailwind class)
  accent: string;   // Vurgu metin rengi
  pill: string;     // Üstteki küçük başlık hapının stili
  icon: any;        // Lucide ikonu
  decor: string;    // Dekoratif unsurların rengi
  borderColor: string; // Telefon çerçevesi rengi
  patternOpacity: string; // Desen görünürlüğü
};

export const themes: Record<string, ThemeStyle> = {
  // --- KIDSAI RESMİ TEMA ---
  kidsaiOfficial: {
    // Pastel Mavi'den Hafif Mora geçiş (Uygulama arka planı hissi)
    bg: "bg-[#E0F7FA]", 
    gradient: "from-[#E0F7FA] via-[#B2EBF2] to-[#E1BEE7]", 
    accent: "text-white", 
    // Hap: Parlak Turuncu (Dikkat çekici)
    pill: "bg-[#FFA726] text-white border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.15)]",
    icon: Cloud, 
    decor: "text-[#FFEB3B]", // Parlak sarı yıldızlar
    borderColor: "border-white", // Telefon çerçevesi bembeyaz ve kalın (Oyuncak gibi)
    patternOpacity: "opacity-[0.4]", // Desen biraz daha belirgin
  },
};

export type ThemeColor = keyof typeof themes;

export type SlideContent = {
  id: number;
  title: string;
  subtitle: string;
  seriesTag?: string; // Örn: "GÜN 1"
  ctaText?: string;   // Örn: "Hemen İndir!"
  color: ThemeColor;
  storeTitle?: string;
  storeSubtitle?: string;
  phoneStyle?: string;
  phoneRotation?: number; 
  phoneScale?: number; // Telefonun boyut çarpanı
  phonePosition?: { x: number; y: number }; // Telefonun konumu (offset)
  imageFit?: 'cover' | 'contain' | 'fill';
  imagePosition?: { x: number; y: number };
  imageZoom?: number;
  imageRotation?: number;
};

export type LayoutConfig = {
  name:string;
  slides: SlideContent[];
};

// --- DÜZENLER ---
export const layouts: { [key: string]: LayoutConfig } = {
  launchAnnouncement: {
    name: "🚀 KidsAI Lansman (Resmi)",
    slides: [
      { 
        id: 1, 
        seriesTag: "YENİ", 
        subtitle: "MACERA BAŞLASIN!", 
        title: "KIDSAI ŞİMDİ YAYINDA", 
        ctaText: "ÜCRETSİZ İNDİR",
        storeTitle: "Hemen Keşfet", 
        storeSubtitle: "App Store & Google Play",
        color: "kidsaiOfficial", 
        phoneStyle: "floating", // Telefon havada süzülüyor
        imageZoom: 1, 
      },
    ],
  },
};