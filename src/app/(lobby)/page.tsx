import Image from 'next/image'
import { Icons } from '@/components/icons'
import { Rect } from '@/components/react'
import { aboutUs } from '@/config/organization'
import { siteConfig } from '@/config/site'

const headlineData = siteConfig.slogan.split(' ')

export default function IndexPage () {
  return (
    <>
      <section className='py-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <div>
            <h1
              className='f-display-1 font-header text-right'
            >
              {headlineData.map((word, key) => {
                return key < (headlineData.length - 1)
                  ? `${word} `
                  : (
                    <span key={key} className='w-full block relative z-0'>
                      {`${word}.`}
                      <Rect />
                    </span>
                    )
              })}
            </h1>
          </div>
          <div className='mt-spacing-6 max-w-md lg:max-w-lg'>
            <p className='text-muted-foreground f-subhead-2 text-right text-balance'>
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container py-spacing-9'>
          <header>
            <h2 className='f-subhead-3 font-light text-muted-foreground uppercase font-primary'>
              {aboutUs.title}
            </h2>
            <Icons.Logoname className='w-full xs:w-auto h-auto xs:h-24 sm:h-36 xl:h-48 mt-spacing-4' />
            <p className='xs:ml-spacing-5 max-w-6xl f-subhead-2 text-muted-foreground mt-spacing-7 text-balance'>
              {aboutUs.description}
            </p>
          </header>
          <div className='cols-container mt-spacing-8'>
            <div className='w-6-cols md:w-1/2-cols relative 2xl:pl-6 mt-spacing-7 md:mt-0 order-2 md:order-1 space-y-spacing-7'>
              {aboutUs.items.map((item, key) => (
                <div key={key} className='md:pl-spacing-6 lg:pl-spacing-7'>
                  <h3 className='f-subhead-2 font-primary font-light uppercase'>
                    {item.title}
                  </h3>
                  <p className='mt-spacing-4 f-bodt-1 text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className='w-6-cols md:w-1/2-cols order-1 md:order-2'>
              {aboutUs.image && (
                <Image
                  src={aboutUs.image.src}
                  alt={aboutUs.image.alt}
                  width={aboutUs.image.width}
                  height={aboutUs.image.height}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
