import React from 'react';
import { Video } from 'remotion'; // absoluteFill importunu buradan da SİL

interface Props {
  src: string;
  startFrom?: number;
  muted?: boolean;
  volume?: number;
  style?: React.CSSProperties;
}

export const PhoneFrame: React.FC<Props> = ({ src, style, startFrom, muted, volume }) => {
  return (
    <div
      style={{
        ...style,
        width: 450,
        height: 900,
        borderRadius: 50,
        border: '14px solid #1a1a1a',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6)',
        zIndex: 10,
      }}
    >
      {/* Video İçeriği */}
      <Video
        src={src}
        startFrom={startFrom}
        muted={muted}
        volume={volume}
        style={{
          // DÜZELTME: absoluteFill yerine manuel CSS
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      
      {/* Ekran Parlama Efekti */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none z-20" />
    </div>
  );
};