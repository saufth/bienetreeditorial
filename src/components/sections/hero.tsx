import { CallToAction } from '@/components/call-to-action'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { type NavItem, type HeadingWithOptionalDescription } from '@/types'

interface HeroProps extends HeadingWithOptionalDescription {
  link?: NavItem
}

export default function Hero ({ title, description, link }: HeroProps) {
  return (
    <section className='pt-spacing-7 pb-spacing-9'>
      <div className='container'>
        <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl'>
          <h1
            className='f-display-1 font-serif text-balance'
          >
            {title}
          </h1>
          {typeof description === 'string'
            ? (
              <p
                className='f-heading-3 text-balance mt-spacing-4'
              >
                {description}
              </p>
              )
            : description && (
              <div
                className='mt-spacing-4 space-y-spacing-3'
              >
                {description.map((paragraph, key) => (
                  <p key={key} className='f-heading-3 text-balance'>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          {link && (
            <div
              className='mt-spacing-6'
            >
              <CallToAction
                href={link.href}
                size='lg'
                className='group overflow-hidden'
                contentClassName='flex gap-x-spacing-4'
              >
                {link.title}
                <div className='w-7 md:w-8 h-7 md:h-8 bg-accent rounded-full grid place-content-center relative z-20'>
                  <LightningBoltIcon className='w-3.5 md:w-4 h-3.5 md:h-4 relative z-10 [&_*]:fill-accent-foreground group-hover:scale-[1.3] transition-transform duration-500' />
                  <div className='w-full h-full bg-accent/10 rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-500 scale-0 group-hover:scale-[4]' />
                </div>
              </CallToAction>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
