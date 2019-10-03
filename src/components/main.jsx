/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from './container'

const main = ({ children }) => (
  <main sx={{ width: '100%', flex: '1 1 auto' }}>
    <Container>{children}</Container>
  </main>
)

export default main
