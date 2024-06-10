'use client'
import { type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Title, Description } from '@/types'

export interface HeroProps extends Title, Partial<Description>, PropsWithChildren {
  highlight?: number
  className?: string
}

export const Hero = ({ title, description, highlight = 0, children, className }: HeroProps) => {
  const headline = title.split(' ')
  return (
    <section className={cn('pt-spacing-9', className)}>
      <div className='container flex flex-col items-end 2xs:pr-spacing-5 xs:pl-[67px] sm:pl-0 xs:pr-spacing-8'>
        <h1 className='f-display-1 font-header x:leading-[150%] sm:leading-[140%] xl:leading-[140%] -tracking-tight text-right'>
          {headline.map((word, key) => {
            const highlightItndex = highlight < headline.length && highlight >= 0 ? highlight : 0
            return key !== highlightItndex
              ? `${word} `
              : (
                <span className='w-full block relative z-0' key={key}>
                  {word}
                  <span className='w-[310px] sm:w-[480px] xl:w-[640px] h-[62%] xl:h-[58%] absolute inset-y-0 top-3 sm:top-5 xl:top-6 -right-2 my-auto -z-10'>
                    <motion.span
                      initial={{
                        height: '0%'
                      }}
                      animate={{
                        height: '100%'
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.25,
                        stiffness: 100,
                        damping: 10,
                        type: 'spring'
                      }}
                      className='w-full h-0 absolute right-0 bottom-0 bg-accent'
                    />
                  </span>
                </span>
                )
          })}
        </h1>
        {description && (
          <div className='mt-spacing-6 max-w-md lg:max-w-lg'>
            <p className='text-muted-foreground f-subhead-2 text-right text-balance'>
              {description}
            </p>
          </div>
        )}
      </div>
      {children}
    </section>
  )
}
