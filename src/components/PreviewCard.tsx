import 'twin.macro';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

function PreviewCard({ src, text }) {
  const [isShown, setIsShown] = React.useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
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
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <img src={src} tw="rounded max-w-xs z-10" />
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
}

export default PreviewCard;
