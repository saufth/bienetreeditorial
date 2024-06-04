import { type MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Manifest () : MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: `${siteConfig.name} official website`,
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#000000',
    prefer_related_applications: true,
    icons: [
      {
        src: '/android-chrome-192x192.jpg',
        sizes: '192x192',
        type: 'image/jpg',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.jpg',
        sizes: '512x512',
        type: 'image/jpg'
      }
    ]
  }
}
