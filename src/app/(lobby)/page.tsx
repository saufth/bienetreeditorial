import Image from 'next/image'
import NextLink from '@/components/ui/next-link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CardStack } from '@/components/cards/card-stack'
import { Headline } from '@/components/headline'
import { LinkAuthor } from '@/components/link-author'
import CardVideo from '@/components/cards/card-video'
import BackgroundVideo from '@/components/background-video'
import {
  aboutUs,
  socialWork,
  testimonials,
  trustedBy,
  faq,
  founder
} from '@/config/organization'
import { services } from '@/config/services'
import { products } from '@/config/products'
import { siteConfig, siteNav } from '@/config/site'

export default function IndexPage () {
  const aboutUsLink = siteNav.find((nav) => nav.href === '/nosotros')!
  const servicesLink = siteNav.find((nav) => nav.href === '/servicios')!

  return (
    <>
      <section className='pt-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline>
            {`${siteConfig.slogan}.`}
          </Headline>
        </div>
        <div className='full-bleed-container mt-spacing-7 relative aspect-video z-10'>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
        <p className='f-body-1 container pt-gutter'>
          Autora:{' '}
          <LinkAuthor
            url={founder.url}
            name={founder.name}
          />
        </p>
      </section>
      <section id='nosotros'>
        <div className='container pt-spacing-9'>
          <header>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
              {aboutUs.label}
            </h2>
            <p className='f-display-3 xs:f-display-2 mt-spacing-3 text-balance font-header f-header'>
              {aboutUs.description}
            </p>
          </header>
          <div className='mt-spacing-6 cols-container'>
            <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-6-cols mt-spacing-6 md:mt-0 order-2 md:order-1'>
              <aboutUs.content.description />
              <Button
                asChild
                size='lg'
                className='flex mt-spacing-6'
              >
                <NextLink
                  href={aboutUsLink.href}
                  className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
                >
                  {aboutUsLink.title}
                </NextLink>
              </Button>
            </div>
            <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-6-cols bg-secondary order-1 md:order-2'>
              <Image
                src='/images/home-about-us.webp'
                alt='La mano de una persona marcando con un lapiz rojo palabras clave en un libro en un escritorio frente a una computadora.'
                width={2750}
                height={2750}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
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
      <section>
        <div className='container'>
          <div className='cols-container mt-spacing-9'>
            <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-6-cols'>
              <div className='sm:max-w-lg sm:pt-spacing-6 lg:pt-spacing-7'>
                <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
                  {services.label}
                </h2>
                <p className='f-display-3 mt-spacing-3 text-balance f-header'>
                  {services.title}.
                </p>
                <Button
                  asChild
                  size='lg'
                  className='flex mt-spacing-6'
                >
                  <NextLink
                    href={servicesLink.href}
                    className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
                  >
                    {servicesLink.title}
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
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section id='nuestros-clientes' className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
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
      <section id='testimonios'>
        <div className='container pt-spacing-9'>
          <div className='cols-container space-y-spacing-7 md:space-y-0'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
                Testimonios
              </h2>
              <p className='f-display-3 mt-spacing-3 text-balance f-header'>
                Lo que opinan nuestros clientes.
              </p>
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardStack className='w-full h-[480px]' items={testimonials} />
            </div>
          </div>
          <div className='cols-container mt-gutter gap-y-gutter relative z-10'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardVideo src='/video/home-about-us.mp4' />
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardVideo src='/video/home-about-us.mp4' />
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardVideo src='/video/home-about-us.mp4' />
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <CardVideo src='/video/home-about-us.mp4' />
            </div>
          </div>
        </div>
      </section>
      <section id='trabajo-social'>
        <div className='container pt-spacing-9'>
          <header>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Trabajo social
            </h2>
            <p className='text-muted-foreground f-subhead-1 text-balance mt-spacing-3'>
              <span className='f-display-2 font-header f-header block pb-spacing-5'>
                Ayudar nos mueve.
              </span>
              <span className='sr-only'>, por eso{' '}</span>
              Impulsamos dos iniciativas que contribuyen a la difusión de la literatura y sus beneficios
              entre niños, jóvenes y adultos: <b>Fundación Futuros Autores del Mundo</b> y el{' '}
              <b>Premio Manuel Salvador Gautier de Novela</b>.
            </p>
          </header>
          <div className='cols-container mt-spacing-7 gap-y-gutter relative z-10'>
            {socialWork.map((socialWorkItem, key) => (
              <div className='w-6-cols xs:w-3-cols md:w-4-cols lg:w-3-cols' key={key}>
                <NextLink
                  href={socialWorkItem.url}
                  target='_blank'
                  rel='noreferrer nooponer'
                >
                  <Card as='article'>
                    <CardContent>
                      <Image
                        src={socialWorkItem.image.src}
                        alt={socialWorkItem.image.alt}
                        width={socialWorkItem.image.width}
                        height={socialWorkItem.image.height}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle title={socialWorkItem.title}>
                        {socialWorkItem.title}
                      </CardTitle>
                      <CardDescription title={socialWorkItem.description}>
                        {socialWorkItem.description}
                      </CardDescription>
                      <div className='pt-spacing-4'>
                        <div className='f-subhead-3 font-semibold hover:underline flex items-center gap-x-2'>
                          Ver articulo
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='preguntas-frecuentes' className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
              {faq.title}
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              {faq.description}
            </p>
          </div>
          <div className='mt-spacing-6'>
            <Accordion type='single' collapsible className='w-full'>
              {faq.items.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={`item-${key}`}>
                  <AccordionTrigger className='f-subhead-2 text-left'>
                    {faqItem.title}
                  </AccordionTrigger>
                  <AccordionContent className='f-subhead-3'>
                    {faqItem.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section id='nosotros'>
        <div className='container pt-spacing-9'>
          <div>
            <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
              Revista Bien-être
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance font-header f-header'>
              Disfruta gratuitamente de nuestra revista.
            </p>
          </div>
          <div className='mt-spacing-6 cols-container'>
            <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-6-cols mt-spacing-6 md:mt-0 order-2 md:order-1'>
              <p className='text-muted-foreground f-subhead-1 text-balance [&>a]:border-b'>
                <b>Descubre secretos</b> de salud y bienestar físico, emocional y espiritual en cada uno
                de los números especializados de nuestra publicación <b>Bien-être</b>, así como{' '}
                <b>entrevistas exclusivas</b> a <b>personalidades de renombre internacional</b>.
              </p>
              <Button
                asChild
                size='lg'
                className='flex mt-spacing-6'
              >
                <NextLink
                  href='https://issuu.com/bienetremedia'
                  target='_blank'
                  rel='noreferrer nooponer'
                  className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
                >
                  Ver revista Bien-être
                </NextLink>
              </Button>
            </div>
            <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-6-cols bg-secondary order-1 md:order-2'>
              <Image
                src='/images/home-bienetre-magazine.webp'
                alt='Portadas de revistas Bien-être.'
                width={1000}
                height={1000}
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
