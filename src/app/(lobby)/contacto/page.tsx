import { type Metadata } from 'next'
import Image from 'next/image'
import { Headline } from '@/components/headline'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/forms/contact-form'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Trabaja con nosotros',
  description: 'Solicita ahora un presupuesto.'
}

export default function ContactPage () {
  return (
    <>
      <section className='pt-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline>
            Trabaja con nosotros
          </Headline>
        </div>
        <div className='container pt-spacing-9'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Ponte en contacto
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance font-header f-header'>
              Solicita un presupuesto.
            </p>
          </div>
          <div className='mt-spacing-6 space-y-spacing-4'>
            <p className='text-muted-foreground f-subhead-1 text-balance [&>a]:border-b'>
              Solicita ahora un presupuesto y recibe GRATIS nuestro e-book{' '}
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
