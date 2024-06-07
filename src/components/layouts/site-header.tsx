'use client'
import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/layouts/mode-toggle'
import Menu from '@/components/layouts/menu'
import NextLink from '@/components/ui/next-link'
import { siteConfig, siteNav } from '@/config/site'

export default function SiteHeader () {
  const { scrollYProgress } = useScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.03) {
        setVisible(true)
        setIsOnTop(true)
      } else {
        setIsOnTop(false)
        direction < 0
          ? setVisible(true)
          : setVisible(false)
      }
    }
  })

  const contactLink = siteNav.find((nav) => nav.href === '/contacto')!

  return (
    <>
      <motion.header
        initial={{
          y: 0,
          borderColor: 'transparent'
        }}
        animate={{
          y: visible || isMenuOpen ? 0 : -100,
          borderColor: isOnTop || isMenuOpen ? 'transparent' : 'oklch(var(--border))'
        }}
        transition={{
          duration: 0.5,
          delay: 0.1
        }}
        className='w-full sticky top-0 left-0 z-40 bg-background/80 backdrop-saturate-150 backdrop-blur-lg border-b'
      >
        <nav aria-label={`${siteConfig.name} directory`}>
          <div className='container relative z-10'>
            <div
              className='w-full h-[74px] lg:h-24 flex justify-between items-center'
            >
              <div className='h-6 lg:h-8'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logoalt className='w-auto h-full' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-6'>
                <Button asChild size='lg' className='hidden sm:flex'>
                  <NextLink
                    href={contactLink.href}
                    onClick={closeMenu}
                    className='pt-px lg:pt-0 font-primary uppercase lg:font-medium text-xs lg:text-sm tracking-wider'
                  >
                    Contacto
                  </NextLink>
                </Button>
                <ModeToggle />
                <button className='w-9 h-2.5 relative' onClick={toggleMenu}>
                  <motion.span
                    initial={{
                      backgroundColor: 'oklch(var(--foreground))',
                      top: 0,
                      left: 0
                    }}
                    animate={{
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(var(--foreground))',
                      top: isMenuOpen ? 3.8 : 0,
                      left: isMenuOpen ? 3.6 : 0,
                      rotate: isMenuOpen ? 45 : 0
                    }}
                    transition={{
                      duration: 1,
                      type: 'spring'
                    }}
                    className='w-4/5 h-0.5 absolute'
                  />
                  <motion.span
                    initial={{
                      backgroundColor: 'oklch(var(--foreground))',
                      bottom: 0,
                      right: 0
                    }}
                    animate={{
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(var(--foreground))',
                      bottom: isMenuOpen ? 3.8 : 0,
                      right: isMenuOpen ? 3.6 : 0,
                      rotate: isMenuOpen ? -45 : 0
                    }}
                    transition={{
                      duration: 1,
                      type: 'spring'
                    }}
                    className='w-4/5 h-0.5 absolute'
                  />
                  <span className='sr-only'>Toggle menu</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      <motion.div
        initial={{ height: '0px' }}
        animate={{ height: isMenuOpen ? '100dvh' : '0px' }}
        transition={{
          duration: 0.8,
          type: 'spring'
        }}
        className='w-full bg-background/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-x-hidden overflow-y-auto'
      >
        <div className='container mt-spacing-8 md:mt-spacing-9 pb-gutter'>
          <Menu action={closeMenu} />
        </div>
      </motion.div>
    </>
  )
}
