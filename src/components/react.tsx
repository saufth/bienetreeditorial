'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const Rect = ({ className }: { className?: string }) => (
  <span
    className={cn('w-[310px] sm:w-[480px] xl:w-[640px] h-[62%] xl:h-[58%] absolute inset-y-0 top-3 sm:top-5 xl:top-6 -right-2 my-auto -z-10',
      className
    )}
  >
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
)
