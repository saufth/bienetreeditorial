import { type Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { SectionHeader } from '@/components/sections/section-header'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Trabaja con nosotros',
  description: 'Solicita ahora un presupuesto.'
}

export default function ContactPage () {
  return (
    <>
      <Hero title='Trabaja con nosotros' highlight={2} />
      <section>
        <div className='container pt-spacing-9'>
          <SectionHeader
            title='Ponte en contacto'
            description='Solicita un presupuesto.'
          />
          <div className='mt-spacing-6 space-y-spacing-4'>
            <p className='text-muted-foreground f-subhead-1 text-balance [&>a]:border-b'>
              Solicita ahora un presupuesto y recibe <b>gratis</b> nuestro e-book{' '}
              <b>"5 pasos indispensables para entregar tu borrador a la editorial y verte profesional"</b>.
            </p>
            <p className='text-muted-foreground f-subhead-1 text-balance [&>a]:border-b'>
              Llena el siguiente formulario y prepárate para publicar un <b>libro ganador</b>.
            </p>
          </div>
          <div className='cols-container mt-spacing-6'>
            <div className='w-full lg:w-5-cols relative mt-12 lg:mt-0 order-2 lg:order-1'>
              <ContactForm />
            </div>
            <div className='w-full lg:w-7-cols order-1 lg:order-2'>
              <Image
                src='/images/contact-page.webp'
                alt='Mujer hablando por teléfono mientras sostiene una tables y esta parada en medo de la sala de su casa'
                width={2840}
                height={2840}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
