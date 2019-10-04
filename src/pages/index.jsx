/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Box, Header } from 'theme-ui'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const Index = () => (
  <>
    <Layout>
      <PageHeader title="Hi, I'm Jon." />
      <h3>A web developer based in Paris</h3>
    </Layout>
  </>
)

export default Index
