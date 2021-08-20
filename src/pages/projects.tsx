import 'twin.macro'
import { NextSeo } from 'next-seo'
import routes from '../config/routes'
import { getLayout } from '../components/SiteLayout'
import { OSSProjects, WorkHistory, LandingPages } from '../components/Projects'

function Projects() {
  return (
    <>
      <NextSeo
        title={routes.projects.seo.title}
        description={routes.projects.seo.description}
        openGraph={routes.projects.seo.openGraph}
      />
      <div tw="max-w-3xl mx-auto px-4">
        <h1 tw="block text-5xl font-bold leading-none mb-10">Projects</h1>
        <div tw="grid grid-cols-1 gap-10">
          <OSSProjects />
          <LandingPages />
          <WorkHistory />
        </div>
      </div>
    </>
  )
}

Projects.getLayout = getLayout

export default Projects
