interface HighlightProps {
  children: string
  index: number
}

export const Highlight = ({ children, index }: HighlightProps) => {
  const textData = children.split(' ')
  const isInRange = index >= 0 && index < textData.length

  return (
    <>
      {isInRange
        ? textData.map((word, key) => {
          const space = key > 0 ? ' ' : ''
          return key !== index
            ? `${space}${word}`
            : (
              <span key={key}>
                {space}
                <span className='relative z-10'>
                  {word}
                  <span className='w-full h-3/5 absolute inset-0 m-auto bg-accent top-3 -z-10' />
                </span>
              </span>
              )
        })
        : children}
    </>
  )
}
