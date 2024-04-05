'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFollowPointer } from '@/hooks/use-follow-pointer'

export default function Pointer () {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)
  console.log('Pointer', x, y)

  return (
    <motion.div
      ref={ref}
      className='w-6 h-6 bg-primary rounded-full fixed z-[100] pointer-events-none'
      animate={{ x, y }}
    />
  )
}
