import { type Metadata } from 'next'
import Image from 'next/image'
import { Headline } from '@/components/headline'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/forms/contact-form'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Contacto',
  description: 'Pongámonos en contacto'
}

export default function ContactPage () {
  return (
    <>
      <section className='pt-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline text='Pongámonos en contacto.' />
        </div>
        <div className='container pt-spacing-9'>
          <div className='cols-container'>
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
