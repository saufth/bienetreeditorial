import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { whatsappUrl } from '@/lib/utils'
import type {
  SiteConfig,
  MainNavItem,
  NavItem,
  NavItemExternal
} from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestros servicios',
    href: '/servicios'
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Preguntas frecuentes',
    href: '/faq'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const domain = 'bienetreeditorial.com'

export const contactEmail = `contacto@${domain}`

export const contactPhone = '5555555555'

export const socialNav: NavItem[] = [
  {
    title: 'facebook',
    href: 'https://www.facebook.com/keilagonzalezbaez'
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/keilagonzalezbaez/'
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/vivebienetre'
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/keilagonzalezbaez/'
  },
  {
    title: 'whatsapp',
    href: whatsappUrl(contactPhone)
  }
]

export const address: NavItemExternal = {
  name: 'Lorem ipsum #55 Int. #55 Col. Centro 55555, Querétaro, Qro.',
  url: 'https://maps.app.goo.gl/eRYE6njBE8pBw3Vz6'
}

export const siteConfig: SiteConfig = {
  name: 'Bienetre Editorial',
  slogan: 'Donde los líderes publican',
  description: 'Impulsamos a autores a publicar sus obras y a llegar a lectores en todo el mundo.',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav
  ]
}
