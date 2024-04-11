import { Open_Sans as OpenSansFont } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = OpenSansFont({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  display: 'swap',
  variable: '--font-sans'
})

export const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/primary-light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/primary-medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/primary-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-primary'
})

export const fontHeader = localFont({
  src: '../../public/fonts/header-regular.woff2',
  display: 'swap',
  variable: '--font-header'
})
