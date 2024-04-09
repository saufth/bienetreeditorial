'use client'
import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type ImageProps } from '@/types'
import Image from 'next/image'

let interval: any

interface Card {
  id: number
  name: string
  designation: string
  content: ReactNode
  image: ImageProps
}

interface CardStackProps {
  items: Card[]
  offset?: number
  scaleFactor?: number
  className?: string
}

export const CardStack = ({
  className,
  items,
  offset,
  scaleFactor
}: CardStackProps) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 5000)
  }

  return (
    <div className={cn('h-64 w-64 relative', className)}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className='absolute bg-card text-card-foreground h-full w-full p-8 shadow-xl border dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between'
            style={{
              transformOrigin: 'top center'
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index //  decrease z-index for the cards that are behind
            }}
          >
            <div className='f-subhead-2 font-normal text-neutral-700 dark:text-neutral-200 italic text-blance'>
              {card.content}
            </div>
            <div className='flex gap-x-4 items-center'>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className='w-16 h-16 rounded-full'
              />
              <div>
                <p className='f-subhead-3 text-neutral-500 font-medium dark:text-white'>
                  {card.name}
                </p>
                <p className='f-subhead-3 text-neutral-400 font-normal dark:text-neutral-200'>
                  {card.designation}
                </p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
