import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { CardStack } from '@/components/cards/card-stack'
import { Highlight } from '@/components/highlight'
import { Icons } from '@/components/icons'
import { aboutUs, faq, testimonials, trustedBy } from '@/config/organization'
import { products } from '@/config/products'
import { siteConfig } from '@/config/site'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import NextLink from '@/components/ui/next-link'
import { services } from '@/config/services'

const Headline = () => {
  const headlineData = siteConfig.slogan.split(' ')

  return (
    <h1 className='f-display-1 f-header text-right'>
      {headlineData.map((word, key) => {
        return key < (headlineData.length - 1)
          ? `${word} `
          : (
            <Highlight key={key}>
              {`${word}.`}
            </Highlight>
            )
      })}
    </h1>
  )
}

export default function IndexPage () {
  return (
    <>
      <section className='py-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline />
          <div className='mt-spacing-6 max-w-md lg:max-w-lg'>
            <p className='text-muted-foreground f-subhead-2 text-right text-balance italic'>
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container pt-spacing-9'>
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
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Publicaciones recientes
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance font-header f-header'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='cols-container mt-spacing-6'>
            {products.map((product, key) => (
              <article className='w-8-cols sm:w-1/3-cols lg:w-4-cols mt-spacing-6' key={key}>
                <div>
                  {product.image && (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      width={product.image.width}
                      height={product.image.height}
                      sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                      loading='lazy'
                    />
                  )}
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
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Nuestros servicios
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              Llega a una mayor audiencia y aumenta tus ganancias.
            </p>
          </div>
          <div className='space-y-spacing-7 mt-spacing-7'>
            {services.map((serviceItem, key) => (
              <div className='cols-container items-center mt-spacing-3 odd:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-5 md:mt-0 order-2'>
                  <div className='sm:max-w-lg'>
                    <h3 className='f-heading-3 f-header'>
                      {serviceItem.title}
                    </h3>
                    <p className='f-body-1 text-muted-foreground italic mt-spacing-4'>
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
                    className='w-full shadow-xl'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container pt-spacing-9'>
          <div className='cols-container space-y-spacing-7 md:space-y-0'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
                Testimonios
              </h2>
              <p className='f-display-2 mt-spacing-3 text-balance f-header'>
                Lo que dicen de nosotros.
              </p>
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardStack className='w-full h-[480px]' items={testimonials} />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Nuestros clientes
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              Ellos confiaron en nosotros.
            </p>
          </div>
          <div className='cols-container items-center justify-center gap-y-gutter mt-spacing-6'>
            {trustedBy.map((client, key) => {
              const imageHeightStyles = [
                'h-16 sm:h-[72px] xl:h-20',
                'h-9 sm:h-12 xl:h-14',
                'h-14 sm:h-16 xl:h-[72px]',
                'h-8 sm:h-10 xl:h-12',
                'h-9 sm:h-12 xl:h-14'
              ]

              return (
                <NextLink
                  key={key}
                  href={client.url}
                  target='_blank'
                  rel='noreferrer nooponer'
                  className='w-6-cols sm:w-1/2-cols lg:w-1/3-cols h-48 sm:h-52 xl:h-60 flex flex-col justify-between bg-card border px-6 py-8 xl:px-8 xl:py-10 text-card-foreground shadow-md group'
                >
                  <div>
                    {client.image && (
                      <>
                        <Image
                          src={client.image.src}
                          alt={client.image.alt}
                          width={client.image.width}
                          height={client.image.height}
                          className={`dark:hidden w-auto ${imageHeightStyles[key]}`}
                        />
                        <Image
                          src={`${client.image.src.split('.')[0]}-dark.webp`}
                          alt={client.image.alt}
                          width={client.image.width}
                          height={client.image.height}
                          className={`hidden dark:block w-auto ${imageHeightStyles[key]}`}
                        />
                      </>
                    )}
                  </div>
                  <div className='flex items-center gap-x-2 self-end f-body-1 font-medium group-hover:underline italic'>
                    {client.name}
                    <ArrowRightIcon className='w-auto h-4 fill-card-foreground' />
                  </div>
                </NextLink>
              )
            })}
          </div>
        </div>
      </section>
      <section className='pt-spacing-9 pb-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Preguntas frecuentes
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='mt-spacing-6'>
            <Accordion type='single' collapsible className='w-full'>
              {faq.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={`item-${key}`}>
                  <AccordionTrigger className='f-subhead-2 italic text-left'>
                    {faqItem.title}
                  </AccordionTrigger>
                  <AccordionContent className='f-subhead-3 italic'>
                    {faqItem.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
