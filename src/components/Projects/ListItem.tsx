import React from 'react'
import 'twin.macro'
import Emoji from 'a11y-react-emoji'

interface OSSItemProps {
  href: string
  symbol: string
  label: string
  title: string
  children: React.ReactNode
}

function OSSItem({ href, symbol, label, title, children }: OSSItemProps) {
  return (
    <div>
      <Emoji symbol={symbol} role="img" aria-label={label} tw="mr-2" />
      <a
        tw="text-blue-600 text-lg"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p>{children}</p>
    </div>
  )
}

export default OSSItem
