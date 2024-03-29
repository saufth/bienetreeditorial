'use client'
import { Icons } from '@/components/icons'
import { useTheme } from 'next-themes'

export function ModeToggle () {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className='relative'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.Sun
        className='h-auto w-6 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0'
        aria-hidden='true'
      />
      <Icons.Moon
        className='absolute top-0 h-auto w-6 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </button>
  )
}
