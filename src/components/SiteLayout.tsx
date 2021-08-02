import * as React from 'react'
import 'twin.macro'
import Navbar from './Navbar'
import Footer from './Footer'

const SiteLayout = ({ children }) => (
  <div tw="flex flex-col min-h-screen antialiased bg-white">
    <div>
      <Navbar />
    </div>
    <div tw="mt-6 sm:mt-0 sm:py-12 flex-grow">{children}</div>
    <Footer />
  </div>
)

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
