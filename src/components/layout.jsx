/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { useTransition, animated } from 'react-spring'

// Components
import Global from './global'
import SEO from './SEO'
import Footer from './footer'
import NavBar from './navbar'
import Main from './main'

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
          {transitions.map(({ item, key, props }) => (
            <animated.div key={key} style={props}>
              {children}
            </animated.div>
          ))}
        </Main>
        <Footer />
      </div>
    </Styled.root>
  )
}

export default Layout
