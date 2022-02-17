import 'twin.macro'
import ListItem from './ListItem'

export default function LandingPages() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold mb-1">Landing Pages</h1>
      <div tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <ListItem
          symbol="🧊"
          label="ice cube"
          href="https://hvac-landing.jonleopard.com"
          title="HVAC"
        >
          A highly performant landing page,{' '}
          <a
            tw="text-blue-700"
            href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fhvac-landing.jonleopard.com%2F"
          >
            90+ lighthouse score.
          </a>{' '}
          Ready to scale with whatever you throw at it. Built with next.js.
        </ListItem>
        <ListItem
          symbol="☀️"
          label="sun"
          href="https://solar-landing.jonleopard.com"
          title="Solar"
        >
          Another performant landing page. Built with next.js
        </ListItem>
      </div>
    </div>
  )
}
