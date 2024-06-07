import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import type { Author } from '@/types'

export interface LinkAuthorProps extends Author {
  className?: string
}

export const LinkAuthor = ({ name, url, className }: LinkAuthorProps) => {
  const href = typeof url === 'string' ? url : url.href

  return (
    <NextLink
      href={href}
      target='_blank'
      rel='nooponer noreferrer'
      className={cn('f-body-1', className)}
    >
      <b>
        {name}
      </b>
    </NextLink>
  )
}
