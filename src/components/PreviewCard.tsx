import 'twin.macro'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'

interface PreviewCardProps {
  src: string
  text: string
}

function PreviewCard({ src, text }: PreviewCardProps) {
  const [isShown, setIsShown] = React.useState(false)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow' }],
  })

  return (
    <>
      <a
        tw="text-blue-600 cursor-pointer visited:text-purple-600"
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => setIsShown(false)}
        ref={setReferenceElement}
      >
        {text}
      </a>
      {isShown && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div tw="w-44 h-52 lg:w-72">
            <Image
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcv3VrPQAHDgKqSdQCcwAAAABJRU5ErkJggg=="
              layout="fill"
              objectFit="contain"
              src={src}
              alt={text}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PreviewCard
