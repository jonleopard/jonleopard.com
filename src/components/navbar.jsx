/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { css, keyframes } from '@emotion/core'
import { Sun, Moon } from 'react-feather'

import { Link } from 'gatsby'
import Container from './container'

const fade = keyframes`
  from {
    opacity: 0;

  to {
      opacity: 1;
    }
`

const NavBar = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header>
      <Container>
        <div
          sx={{
            py: '10px',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link to="/" sx={{ py: 2 }}>
            jonleopard.com
            <div
              css={css`
                animation: ${fade} 0.5s alternate infinite;
                display: inline-block;
              `}
            >
              ▌
            </div>
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Link to="/profile" sx={{ variant: 'styles.navlink', ml: 3 }}>
            profile
          </Link>
          <Link to="/blog" sx={{ variant: 'styles.navlink', ml: 3 }}>
            blog
          </Link>
          <div
            sx={{ ml: 3 }}
            title="Toggle Color Mode"
            tabIndex={0}
            role="button"
            onClick={e => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
            onKeyDown={setColorMode}
          >
            {colorMode === 'default' ? <Sun size={22} /> : <Moon size={22} />}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default NavBar
