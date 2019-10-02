/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'

import Container from './container'

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => (
  <footer
    sx={{
      flexWrap: 'wrap',
      alignItems: 'center',
      p: 2,
      variant: 'styles.footer',
    }}
  >
    <Container>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          mx: 'auto',
          px: 2,
          py: 4,
        }}
      >
        <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://github.com/jonleopard"
          itemProp="sameAs"
        >
          github
        </Link>
        <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://twitter.com/jonlprd"
          itemProp="sameAs"
        >
          twitter
        </Link>
        <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://stackoverflow.com/users/10541736/jon-leopard"
          itemProp="sameAs"
        >
          stack overflow
        </Link>
        <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://t.me/hiJon"
          itemProp="sameAs"
        >
          telegram
        </Link>
        <Link
          sx={{ variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://keybase.io/jonleopard/pgp_keys.asc"
          itemProp="sameAs"
        >
          gpg
        </Link>
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>&copy; {CURRENT_YEAR} Jon Leopard</div>
      </div>
    </Container>
  </footer>
)

export default Footer
