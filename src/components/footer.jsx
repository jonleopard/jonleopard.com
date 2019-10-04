/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'

import Container from './container'

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => (
  <footer
    sx={{
      variant: 'styles.footer',
    }}
  >
    <Container>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: 'center',
          mx: -2,
          mt: 5,
          py: 4,
        }}
      >
        <a
          sx={{ color: 'inherit', variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://github.com/jonleopard"
          itemProp="sameAs"
        >
          github
        </a>
        <a
          sx={{ color: 'inherit', variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://twitter.com/jonlprd"
          itemProp="sameAs"
        >
          twitter
        </a>
        <a
          sx={{ color: 'inherit', variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://stackoverflow.com/users/10541736/jon-leopard"
          itemProp="sameAs"
        >
          stack overflow
        </a>
        <a
          sx={{ color: 'inherit', variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://t.me/hiJon"
          itemProp="sameAs"
        >
          telegram
        </a>
        <a
          sx={{ color: 'inherit', variant: 'styles.navlink', p: 2 }}
          target="_blank"
          rel="noopener noreferrer me"
          href="https://keybase.io/jonleopard/pgp_keys.asc"
          itemProp="sameAs"
        >
          gpg
        </a>

        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>&copy; {CURRENT_YEAR} Jon Leopard</div>
      </div>
    </Container>
  </footer>
)

export default Footer
