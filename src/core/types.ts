// src/core/types.ts

export type Language = 'tr' | 'en' | 'de' | 'es';

// 1. Transform Verisi (Telefonun ve Resmin uzaydaki konumu)
export interface Transform3D {
  x: number;
  y: number;
  scale: number;
  rotateX: number; // 3D eğim (yukarı/aşağı bakış)
  rotateY: number; // 3D eğim (sağa/sola bakış)
  rotateZ: number; // 2D döndürme (saat yönü)
}

// 2. Resim Verisi (Telefonun içindeki görsel)
export interface ImageContent {
  url: string | null;
  transform: Transform3D; // Resmin kendi dönüşü
  fit: 'cover' | 'contain';
}

// 3. Telefon Objesi (Çerçevenin kendisi)
export interface PhoneObject {
  style: 'iphone-14' | 'flat' | 'floating'; // Telefon tipi
  transform: Transform3D; // Telefonun sahnedeki duruşu
}

// 4. İçerik Verisi (Metinler, Renkler - Tasarım hariç saf bilgi)
export interface SlideContent {
  title: string;
  subtitle: string;
  badge?: string;
  cta?: string;
  footer?: string;
}

// 5. Ana Slayt Yapısı (Hepsini birleştiren model)
export interface SlideData {
  id: string;
  layoutId: string; // Hangi tasarım kodunun çalışacağını belirler (Örn: 'layout-hero-v1')
  themeColor: string; // Renk paleti
  
  // Nesneler
  phone: PhoneObject;
  image: ImageContent;
  content: Record<Language, SlideContent>; // Çoklu dil desteği direkt modelin içinde
}

export const DEFAULT_TRANSFORM: Transform3D = { x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 };