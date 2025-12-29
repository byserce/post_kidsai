/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remotion paketlerini bundle işleminden hariç tutar
    serverComponentsExternalPackages: [
        '@remotion/bundler', 
        '@remotion/renderer',
        'tailwindcss',
        'autoprefixer',
        'postcss',
    ],
  },
};

export default nextConfig;