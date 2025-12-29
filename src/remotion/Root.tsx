import React from 'react';
import { Composition } from 'remotion';
import { KidsAIReel } from './compositions/KidsAIReel';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KidsAIReel"
        component={KidsAIReel}
        durationInFrames={30 * 15} // Varsayılan süre
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
           videoSrc: '',
           texts: {
             tr: { hook: "HAYVANLARI\nKEŞFET! 🦁", cta: "HEMEN İNDİR", title: "KidsAI" },
             en: { hook: "DISCOVER\nANIMALS! 🦁", cta: "DOWNLOAD NOW", title: "KidsAI" },
             de: { hook: "TIERE\nENTDECKEN! 🦁", cta: "JETZT LADEN", title: "KidsAI" },
             es: { hook: "¡DESCUBRE\nANIMALES! 🦁", cta: "DESCARGAR", title: "KidsAI" },
           },
           activeLanguage: 'tr',
           clickEvents: []
        }}
      />
    </>
  );
};