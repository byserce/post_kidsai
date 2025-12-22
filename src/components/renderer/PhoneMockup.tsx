// src/components/renderer/PhoneMockup.tsx
import React from 'react';
import { PhoneObject, ImageContent } from '@/core/types';

interface Props {
  phone: PhoneObject;
  image: ImageContent;
}

export const PhoneMockup: React.FC<Props> = ({ phone, image }) => {
  // Telefonun sahnedeki duruşu (3D)
  const phoneStyle: React.CSSProperties = {
    transform: `
      translateX(${phone.transform.x}px) 
      translateY(${phone.transform.y}px) 
      scale(${phone.transform.scale}) 
      rotateX(${phone.transform.rotateX}deg) 
      rotateY(${phone.transform.rotateY}deg) 
      rotateZ(${phone.transform.rotateZ}deg)
    `,
    transition: 'transform 0.1s ease-out',
  };

  // İçerideki resmin duruşu
  const imageStyle: React.CSSProperties = {
    objectFit: image.fit,
    transform: `
      translateX(${image.transform.x}%) 
      translateY(${image.transform.y}%) 
      scale(${image.transform.scale}) 
      rotate(${image.transform.rotateZ}deg)
    `,
  };

  return (
    <div 
      className="absolute z-10 w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl border-[12px] border-slate-900 overflow-hidden"
      style={phoneStyle} // 3D burada uygulanıyor
    >
      {/* Ekran Yansıması (Reflection) - Profesyonel Dokunuş */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-20" />

      {/* Ekran İçeriği */}
      <div className="w-full h-full bg-slate-100 relative overflow-hidden">
        {image.url ? (
          <img src={image.url} className="w-full h-full origin-center" style={imageStyle} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">Resim Yok</div>
        )}
      </div>
    </div>
  );
};