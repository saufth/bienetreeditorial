import { type Metadata } from 'next'
import Image from 'next/image'
import { Headline } from '@/components/headline'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: services.title,
  description: services.description
}

export default function ServicesPage () {
  return (
    <>
      <section className='py-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline text={`${services.title}.`} />
          <div className='mt-spacing-6 max-w-md lg:max-w-lg'>
            <p className='text-muted-foreground f-subhead-2 text-right text-balance'>
              {services.description}
            </p>
          </div>
        </div>
      </section>
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Nuestros servicios
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              Queremos que los autores alcancen su objetivo.
            </p>
          </div>
          <div className='space-y-spacing-8 mt-spacing-8'>
            {services.items.map((serviceItem, key) => (
              <article className='cols-container mt-spacing-3 odd:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-spacing-6 md:mt-0 order-2'>
                  <div className='sm:max-w-lg md:pt-spacing-6 lg:pt-spacing-7'>
                    <h3 className='f-heading-2 f-header'>
                      {serviceItem.title}
                    </h3>
                    <p className='f-subhead-2 text-muted-foreground mt-spacing-5'>
                      {serviceItem.description}
                    </p>
                  </div>
                </div>
                <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-7-cols bg-secondary order-1'>
                  <Image
                    src={serviceItem.image.src}
                    alt={serviceItem.image.alt}
                    width={serviceItem.image.width}
                    height={serviceItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full shadow-xl dark:shadow-none'
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
