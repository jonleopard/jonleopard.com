/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import { useTransition, animated } from 'react-spring'
import Prism from '@theme-ui/prism'

// Components
import Global from './global'
import SEO from './SEO'
import Footer from './footer'
import NavBar from './navbar'
import Main from './main'

/*eslint-disable */
const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
}

const Layout = ({ children, location }) => {
  // Page transition hook
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Styled.root>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <SEO />
        <Global />
        <NavBar />
        <Main>
          <ThemeProvider components={components}>
            {transitions.map(({ item, key, props }) => (
              <animated.div key={key} style={props}>
                {children}
              </animated.div>
            ))}
          </ThemeProvider>
        </Main>
        <Footer />
      </div>
    </Styled.root>
  )
}

export default Layout
