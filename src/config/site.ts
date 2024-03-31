import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { whatsappUrl } from '@/lib/utils'
import { services } from '@/config/services'
import type {
  SiteConfig,
  MainNavItem,
  NavItem,
  NavItemWithChildren,
  NavItemExternal
} from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

const servicesNav: NavItemWithChildren[] = services.map(({ title, slug }) => ({ title, href: slug! }))

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestros servicios',
    href: '/servicios',
    items: servicesNav
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
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
  description: 'Editorial con más de 13 años en el mercado y operaciones internacionales',
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
