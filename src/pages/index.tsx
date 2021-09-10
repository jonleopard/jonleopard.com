import * as React from 'react'
import 'twin.macro'
import Emoji from 'a11y-react-emoji'
import Link from 'next/link'
import { PopupButton } from 'react-calendly'
import { getLayout } from '../components/SiteLayout'

function Index() {
  return (
    <>
      <div tw="flex py-10 max-w-3xl mx-auto flex-col">
        <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div tw="sm:text-center lg:text-left">
            <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span tw="block xl:inline">
                Hey! I'm Jon <Emoji symbol="👋🏻" label="Waving" />
              </span>{' '}
              <span tw="block text-5xl text-gray-600">
                {' '}
                I'm a Front End Developer and API Specialist living in Paris, FR
              </span>
            </h1>
            <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I help individuals & enterprises solve technical problems and I’m
              currently{' '}
              <span tw="bg-green-100 text-green-800 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0">
                available
              </span>{' '}
              for work!
            </p>
            <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div tw="rounded-md shadow">
                <PopupButton
                  tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  url="https://calendly.com/contact-4394/15min"
                  text="Schedule a call"
                />
              </div>
              <div tw="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/about">
                  <a tw="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Learn more about me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

Index.getLayout = getLayout

export default Index
