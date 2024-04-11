import { Highlight } from '@/components/highlight'

export const Headline = ({ text }: { text: string }) => {
  const headlineData = text.split(' ')

  return (
    <h1 className='f-display-1 font-header x:leading-[150%] sm:leading-[140%] xl:leading-[140%] -tracking-tight text-right'>
      {headlineData.map((word, key) => {
        return key < (headlineData.length - 1)
          ? `${word} `
          : (
            <Highlight key={key}>
              {word}
            </Highlight>
            )
      })}
    </h1>
  )
}
