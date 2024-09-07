import { Author as NextAuthor } from 'next/dist/lib/metadata/types/metadata-types'
import { whatsappUrl } from '@/lib/utils'
import type {
  SiteConfig,
  MainNavItem,
  NavItem
} from '@/types'

export const author: NextAuthor = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const homeNav: MainNavItem[] = [
  {
    title: 'Publicaciones recientes',
    href: '/#publicaciones-recientes'
  },
  {
    title: 'Nuestras alianzas',
    href: '/#nuestras-alianzas'
  },
  {
    title: 'Testimonios',
    href: '/#testimonios'
  },
  {
    title: 'Trabajo social',
    href: '/#trabajo-social'
  },
  {
    title: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes'
  }
]

export const siteNav: MainNavItem[] = [
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Nuestros servicios',
    href: '/servicios'
  },
  {
    title: 'Trabaja con nosotros',
    href: '/contacto'
  }
]

export const domain = 'bienetreeditorial.com'

export const contactEmail = 'asistencia@bienetremedia.com'

export const contact = [
  {
    country: 'República Dominicana',
    phone: {
      number: '8092794504',
      code: '+1',
      fullNumber: '+18092794504'
    },
    address: {
      name: 'Santiago, República Dominicana, 51000',
      url: 'https://maps.app.goo.gl/SNbTbfihTpc9FjRT6'
    }
  }
]

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
    href: whatsappUrl(contact[0]!.phone.fullNumber)
  }
]

export const siteConfig: SiteConfig = {
  name: 'Bienetre Editorial',
  slogan: 'Donde los ganadores publican',
  description: 'Impulsamos a autores a publicar sus obras y a llegar a lectores en todo el mundo.',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav,
    ...homeNav
  ]
}
