import 'twin.macro';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

function PreviewCard({ src, text }) {
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
          tw="rounded mx-4 w-1/3 sm:w-auto z-10"
        />
      )}
    </>
  );
}

export default PreviewCard;
