interface HighlightProps {
  children: string
  index?: number
  indexEnd?: number
}

const Highlight = ({ children, index = -1, indexEnd = index }: HighlightProps) => {
  const textData = children.split(' ')

  const indexEndFixed = indexEnd >= textData.length ? textData.length - 1 : indexEnd
  const isIndexOk = index >= 0 && index < textData.length
  const isIndexEndOk = indexEndFixed >= 0 && indexEndFixed >= index

  let spaceHandler = ''

  return (
    <>
      {isIndexOk && isIndexEndOk
        ? textData.map((word, key) => {
          if (key === 1) { spaceHandler = ' ' }

          return key < index || key > indexEndFixed
            ? `${spaceHandler}${word}`
            : (
              <span key={key}>
                {key === index && textData.map((highlightItem, highlightItemKey) => {
                  return highlightItemKey >= index && highlightItemKey <= indexEndFixed && (
                    <span key={highlightItemKey}>
                      {spaceHandler}
                      <span className='inline-block relative z-10'>
                        {highlightItem}
                        <span className='w-full h-3/5 bg-accent m-auto absolute bottom-0 top-2 sm:top-1 md:top-4 left-0 -z-10 after:w-2 sm:after:w-4 xl:after:w-5 after:h-full after:bg-accent after:absolute after:left-full after:top-0' />
                      </span>
                    </span>
                  )
                })}
              </span>
              )
        })
        : children}
    </>
  )
}

export {
  Highlight,
  type HighlightProps
}
