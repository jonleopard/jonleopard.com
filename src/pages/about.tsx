import { NextSeo } from 'next-seo'
import 'twin.macro'
import { Intro } from '../components/About'
import { getLayout } from '../components/SiteLayout'
import routes from '../config/routes'

function About() {
  return (
    <>
      <NextSeo
        title={routes.about.seo.title}
        description={routes.about.seo.description}
        openGraph={routes.about.seo.openGraph}
      />
      <div tw="max-w-3xl mx-auto px-4">
        <div tw="grid grid-cols-1 gap-10">
          <Intro />
        </div>
      </div>
    </>
  )
}

About.getLayout = getLayout

export default About
