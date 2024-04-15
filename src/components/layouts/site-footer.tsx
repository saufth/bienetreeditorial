import Menu from '@/components/layouts/menu'
import { siteConfig } from '@/config/site'
import { Link } from '../ui/link'

export default function SiteFooter () {
  return (
    <footer className='border-t mt-spacing-7'>
      <div className='container'>
        <div className='py-spacing-7'>
          <Menu />
        </div>
        <div className='pb-spacing-6 sm:pt-spacing-6 flex flex-col gap-y-spacing-3 md:flex-row justify-between'>
          <div className='text-muted-foreground text-sm lg:text-base font-primary mt-3 md:mt-0 md:pt-1 lg:pt-2 uppercase order-2 md:order-1'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </div>
          <div className='flex flex-col md:flex-row gap-4 order-1 md:order-2'>
            <Link
              href='/terminos-y-condiciones'
              variant='muted'
              className='text-base lg:text-lg font-medium'
            >
              Términos y condiciones
            </Link>
            <Link
              href='/privacidad'
              variant='muted'
              className='text-base lg:text-lg font-medium'
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
