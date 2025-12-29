export interface VideoLayer {
  id: string;
  type: 'video' | 'text' | 'shape';
  src?: string; // Ekran kaydı videosunun yolu
  text?: Record<string, string>; // Çoklu dil
  style: any;
  startFrame: number; // Hangi karede girecek
  durationInFrames: number; // Ne kadar duracak
}

export interface ReelScene {
  id: string;
  templateId: 'viral-v1' | 'minimal-v1';
  durationInSeconds: number; // Örn: 15 saniye
  fps: number; // Genelde 30 veya 60
  primaryColor: string;
  videoSource: string; // Kullanıcının yüklediği ekran kaydı
  texts: {
    title: string;
    hook: string; // "Bunu İzlemeden Geçme!" gibi
    cta: string;
  };
}