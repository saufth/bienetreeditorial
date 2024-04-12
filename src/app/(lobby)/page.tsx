import Image from 'next/image'
import NextLink from '@/components/ui/next-link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { CardStack } from '@/components/cards/card-stack'
import { Headline } from '@/components/headline'
import { Icons } from '@/components/icons'
import { organizationAge, testimonials, trustedBy } from '@/config/organization'
import { products } from '@/config/products'
import { siteConfig } from '@/config/site'
import { services } from '@/config/services'

export default function IndexPage () {
  return (
    <>
      <section className='pt-spacing-7 pb-spacing-9'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline text={`${siteConfig.slogan}.`} />
          <div className='mt-spacing-6 max-w-lg lg:max-w-xl'>
            <p className='text-muted-foreground f-subhead-1 text-right text-balance'>
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>
      <div className='bg-card border-y mt-spacing-7'>
        <div className='max-w-xl md:max-w-5xl mx-auto px-gutter py-spacing-9'>
          <Icons.Logomark className='w-12 sm:w-16 h-auto mx-auto' />
          <p className='f-heading-1 text-muted-foreground font-light text-center x:leading-[150%] sm:leading-[160%] xl:leading-[160%] mt-spacing-7 [&>b]:border-b'>
            Somo <b>expertos en literatura y edición</b>. Llevamos <b>más de {organizationAge} años</b>{' '}
            <b>mejorando la vida de autores</b> en todo el mundo. <b>Nos apasionan los libros</b> y
            queremos que más gente tenga acceso y se interese por ellos.
          </p>
          <Button
            asChild
            size='lg'
            className='flex mt-spacing-6 mx-auto'
          >
            <NextLink
              href='/nosotros'
              className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
            >
              Conocenos
            </NextLink>
          </Button>
        </div>
      </div>
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Publicaciones recientes
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance font-header f-header'>
              Autores que publicaron con nosotros recientemente.
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
                  <h3 className='f-subhead-2 sm:f-subhead-3 font-medium text-muted-foreground'>
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
      <div>
        <div className='container'>
          <div className='cols-container mt-spacing-9'>
            <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-6-cols'>
              <div className='sm:max-w-lg sm:pt-spacing-6 lg:pt-spacing-7'>
                <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
                  {services.label}
                </h2>
                <p className='f-display-2 mt-spacing-3 text-balance f-header'>
                  {services.title}.
                </p>
                <Button
                  asChild
                  size='lg'
                  className='flex mt-spacing-6'
                >
                  <NextLink
                    href='/servicios'
                    className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
                  >
                    Servicios
                  </NextLink>
                </Button>
              </div>
            </div>
            <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-6-cols bg-secondary mt-spacing-6 md:mt-0'>
              <Image
                src='/images/home-services.webp'
                alt='Las manos de dos personas sosteniendo un libro y apuntando al contenido en un escritorio con un monitor.'
                width={2750}
                height={2750}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full shadow-xl dark:shadow-none'
              />
            </div>
          </div>
        </div>
      </div>
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
                  className='w-6-cols sm:w-1/2-cols lg:w-1/3-cols h-48 sm:h-52 xl:h-60 flex flex-col justify-between bg-card border px-6 py-8 xl:px-8 xl:py-10 text-card-foreground shadow-md dark:shadow-none group'
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
                  <div className='flex items-center gap-x-2 self-end f-body-1 font-medium group-hover:underline'>
                    {client.name}
                    <ArrowRightIcon className='w-auto h-4 fill-card-foreground' />
                  </div>
                </NextLink>
              )
            })}
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
    </>
  )
}
