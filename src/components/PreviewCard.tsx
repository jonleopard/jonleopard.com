import 'twin.macro';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

interface PreviewCardProps {
  src: string;
  text: string;
}

function PreviewCard({ src, text }: PreviewCardProps) {
  const [isShown, setIsShown] = React.useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow' }],
  });

  return (
    <>
      <a
        tw="text-blue-600 cursor-pointer visited:text-purple-600"
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => setIsShown(false)}
        ref={setReferenceElement}
      >
        {text}
      </a>
      {isShown && (
        <img
          src={src}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          tw="rounded w-44 lg:w-72 z-10"
        />
      )}
    </>
  );
}

export default PreviewCard;
