import Image from 'next/image'
import { Icons } from '@/components/icons'
import { Rect } from '@/components/react'
import { aboutUs } from '@/config/organization'
import { siteConfig } from '@/config/site'
import { products } from '@/config/products'

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
            <p className='text-muted-foreground f-subhead-2 text-right text-balance italic'>
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
            <p className='xs:ml-spacing-5 max-w-6xl f-subhead-2 text-muted-foreground mt-spacing-7 text-balance italic'>
              {aboutUs.description}
            </p>
          </header>
          <div className='cols-container mt-spacing-8'>
            <div className='w-6-cols md:w-1/2-cols relative 2xl:pl-6 mt-spacing-7 md:mt-0 order-2 md:order-1 space-y-spacing-7'>
              {aboutUs.items.map((item, key) => (
                <div key={key} className='md:pl-spacing-6 lg:pl-spacing-7'>
                  <h3 className='f-subhead-3 font-primary font-light uppercase'>
                    {item.title}
                  </h3>
                  <p className='mt-spacing-3 f-body-1 text-muted-foreground italic'>
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
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div className='text-right sm:text-left'>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Publicaciones recientes
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance font-header x:leading-[150%] sm:leading-[140%] xl:leading-[140%] -tracking-tight'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='cols-container py-spacing-6'>
            {products.map((product, key) => (
              <article className='w-8-cols sm:w-1/3-cols lg:w-4-cols mt-spacing-6' key={key}>
                <div>
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                    loading='lazy'
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='f-subhead-2 sm:f-subhead-3 font-medium text-muted-foreground italic'>
                    {product.author}
                  </h3>
                  {product.description && (
                    <div className='mt-2'>
                      <p className='f-subhead-1 sm:f-subhead-2 font-bold'>
                        {product.title}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
