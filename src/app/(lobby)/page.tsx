import { Icons } from '@/components/icons'
import { Rect } from '@/components/react'
import { siteConfig } from '@/config/site'

const headlineData = siteConfig.slogan.split(' ')

export default function IndexPage () {
  return (
    <>
      <section className='pt-spacing-7 pb-spacing-9'>
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
          <div className='mt-spacing-6 max-w-xs xl:max-w-sm'>
            <p className='text-muted-foreground f-body-1 text-right text-balance'>
              Somos una empresa editorial matriz con más de 13 años en el mercado.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div>
            <h2 className='f-subhead-3 font-light text-muted-foreground uppercase font-primary'>
              Acerca de nosotros
            </h2>
            <Icons.Logoname className='w-auto h-48 mt-spacing-4' />
          </div>
        </div>
      </section>
    </>
  )
}
