"use client";

import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  onDownloadAll: () => void;
};

export function Header({ onDownloadAll }: HeaderProps) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg border-green-200/50 sticky top-4 z-50">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold font-headline text-primary flex items-center gap-2 justify-center md:justify-start">
          <Sparkles className="text-accent" /> KidsAI Post Fabrikası
        </h1>
        <p className="text-muted-foreground mt-1">Görselleri yükle, profesyonel postlarını indir.</p>
      </div>
      <Button 
        onClick={onDownloadAll}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 mt-4 md:mt-0"
        size="lg"
      >
        <Download size={20} /> HEPSİNİ İNDİR
      </Button>
    </div>
  );
}
