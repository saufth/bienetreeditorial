import { Highlight, type HighlightProps } from '@/components/highlight'
import { cn } from '@/lib/utils'
import type { Header } from '@/types'

interface SectionHeaderProps extends Header, Pick<HighlightProps, 'index' | 'indexEnd'> {
  className?: string
  headlineClassName?: string
  paragraphClassName?: string
}

const SectionHeader = (
  {
    title,
    description,
    index,
    indexEnd,
    className,
    headlineClassName,
    paragraphClassName
  } : SectionHeaderProps
) => {
  return (
    <div className={className}>
      <h2
        className={cn(
          'text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary',
          headlineClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'f-display-2 xs:f-display-2 mt-spacing-3 text-balance font-header f-header',
          paragraphClassName
        )}
      >
        <Highlight index={index} indexEnd={indexEnd}>
          {description}
        </Highlight>
      </p>
    </div>
  )
}

export {
  SectionHeader,
  type SectionHeaderProps
}
