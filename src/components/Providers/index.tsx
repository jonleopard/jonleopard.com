import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import PlausibleProvider from 'next-plausible'
import SEO from './SEO'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

const Provider = ({ children }) => {
  return (
    <PlausibleProvider domain="jonleopard.com">
      <SEO />
      <BaseStyles />
      <CustomStyles />
      {children}
    </PlausibleProvider>
  )
}
export default Provider
