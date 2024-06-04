import { Highlight } from '@/components/highlight'

export const Headline = ({ children }: { children: string }) => {
  const headline = children.split(' ')

  return (
    <h1 className='f-display-1 font-header x:leading-[150%] sm:leading-[140%] xl:leading-[140%] -tracking-tight text-right'>
      {headline.map((word, key) => {
        return key < (headline.length - 1)
          ? `${word} `
          : (
            <span className='w-full block relative z-0' key={key}>
              {word}
              <Highlight />
            </span>
            )
      })}
    </h1>
  )
}
