/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import Container from './container'

const main = props => (
  <main sx={{ width: '100%', flex: '1 1 auto' }}>
    <Container>{props.children}</Container>
  </main>
)

export default main
