import { type Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { Icons } from '@/components/icons'
import { aboutUs } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: aboutUs.title,
  description: aboutUs.description
}

export default function AboutUsPage () {
  return (
    <>
      <Hero title={`${aboutUs.title}.`} description={aboutUs.description} />
      <section>
        <div className='container pt-spacing-9'>
          <header>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
              {aboutUs.label}
            </h2>
            <p className='sr-only'>{siteConfig.name}</p>
            <Icons.Logoname className='w-full xs:w-auto h-auto xs:h-24 sm:h-36 xl:h-48 mt-spacing-4' />
          </header>
          <div className='mt-spacing-6'>
            <div className='hidden md:block bg-primary float-right ml-gutter mb-gutter'>
              <Image
                src='/images/home-services.webp'
                alt='Las manos de dos personas sosteniendo un libro y apuntando al contenido en un escritorio con un monitor.'
                width={2750}
                height={2750}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='md:w-md lg:w-xl xl:w-2xl h-auto'
              />
            </div>
            <div className='mt-spacing-6 md:mt-0 space-y-spacing-6'>
              <aboutUs.content.description />
              <div className='block md:hidden bg-primary'>
                <Image
                  src='/images/home-services.webp'
                  alt='Las manos de dos personas sosteniendo un libro y apuntando al contenido en un escritorio con un monitor.'
                  width={2750}
                  height={2750}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                />
              </div>
              {aboutUs.content.items.map((aboutUsItem, key) => (
                <article className='space-y-spacing-4' key={key}>
                  <h3 className='f-heading-2 mt-spacing-3 text-balance font-header f-header'>
                    {aboutUsItem.title}
                  </h3>
                  <aboutUsItem.description />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <div className='space-y-spacing-7 mt-spacing-7'>
            {aboutUs.items.map((aboutUsItem, key) => (
              <article className='cols-container mt-spacing-3 odd:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-spacing-6 md:mt-0 order-2'>
                  <div className='sm:max-w-lg sm:pt-spacing-6 lg:pt-spacing-7'>
                    <h3 className='f-heading-2 f-header'>
                      {aboutUsItem.title}
                    </h3>
                    <p className='f-subhead-2 text-muted-foreground text-balance mt-spacing-5'>
                      {aboutUsItem.description}.
                    </p>
                  </div>
                </div>
                <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-7-cols bg-secondary order-1'>
                  <Image
                    src={aboutUsItem.image.src}
                    alt={aboutUsItem.image.alt}
                    width={aboutUsItem.image.width}
                    height={aboutUsItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                </div>
              </article>
            ))}
          </div> */}
    </>
  )
}
