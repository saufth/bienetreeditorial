import { type Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Headline } from '@/components/headline'
import { faq } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: faq.title,
  description: faq.description
}

export default function AboutUsPage () {
  return (
    <>
      <section className='py-spacing-7'>
        <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
          <Headline text={`${faq.title}.`} />
          <div className='mt-spacing-6 max-w-md lg:max-w-lg'>
            <p className='text-muted-foreground f-subhead-2 text-right text-balance'>
              {faq.description}
            </p>
          </div>
        </div>
      </section>
      <section className='pt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-body-1 font-light text-muted-foreground uppercase font-primary'>
              {faq.label}
            </h2>
            <p className='f-display-3 mt-spacing-3 text-balance f-header'>
              Preguntas más frecuentadas por nuestros clientes.
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
    </>
  )
}
