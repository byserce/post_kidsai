import type { Metadata } from 'next';
import { Fredoka, Luckiest_Guy } from 'next/font/google';
import './globals.css';

// 1. Yazı Tiplerini Tanımlıyoruz
// Gövde metinleri için okunaklı, yumuşak font
const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

// Başlıklar için eğlenceli, kalın font
const luckiest = Luckiest_Guy({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KidsAI Post Studio',
  description: 'Instagram içerik üretim fabrikası.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${fredoka.variable} ${luckiest.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}