import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFBF7',
    theme_color: '#FF3864',
    icons: [
      {
        src: '/images/brand/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
