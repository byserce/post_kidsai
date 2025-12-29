import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';
import '../app/globals.css'; // Tailwind stillerini yükle
import './style.css';        // Fontları yükle

registerRoot(RemotionRoot);