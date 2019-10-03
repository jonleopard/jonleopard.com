/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Box, Header } from 'theme-ui'

import Layout from '../components/layout'

const Index = () => (
  <>
    <Layout>
      <Box sx={{ width: '100%', mt: [40, 80] }}>
        <Flex sx={{ flexDirection: 'column' }}>
          <h1>You've reached the personal blog of Jon Leopard</h1>
        </Flex>
      </Box>
      <Box>
        <h3>
          <div>a web developer based in Paris</div>
        </h3>
      </Box>
    </Layout>
  </>
)

export default Index
