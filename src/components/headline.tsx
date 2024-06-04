import { Highlight } from '@/components/highlight'

export const Headline = ({ children }: { children: string }) => {
  const headlineData = children.split(' ')

  return (
    <h1 className='f-display-1 font-header x:leading-[150%] sm:leading-[140%] xl:leading-[140%] -tracking-tight text-right'>
      {headlineData.map((word, key) => {
        return key < (headlineData.length - 1)
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
