import * as React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import routes from '../config/routes'

const defaultRoutes = [routes.home, routes.about, routes.projects, routes.blog]

const StyledLink = ({ isActive, children, href }) => (
  <Link href={href} passHref>
    <a
      css={[
        tw`py-2 px-3 block text-black text-base font-medium rounded-lg hover:bg-gray-100`,
        isActive && tw`bg-gray-100 rounded-lg`,
      ]}
    >
      {children}
    </a>
  </Link>
)

function Navbar() {
  const router = useRouter()
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div tw="max-w-3xl mx-auto px-2 sm:px-6">
            <div tw="relative flex items-center justify-between h-16">
              <div tw="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button tw="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span tw="sr-only">Open main menu</span>
                  {open ? (
                    <FiX tw="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu tw="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div tw="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div tw="hidden sm:block">
                  <div tw="flex space-x-4 -ml-5">
                    {defaultRoutes.map((route) => {
                      const isActive = route.path === router.pathname
                      return (
                        <StyledLink
                          href={route.path}
                          key={route.path}
                          isActive={isActive}
                        >
                          {route.label}
                        </StyledLink>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel tw="sm:hidden">
            <div tw="px-2 pt-2 pb-3 space-y-1">
              {defaultRoutes.map((route) => {
                const isActive = route.path === router.pathname
                return (
                  <StyledLink
                    href={route.path}
                    key={route.path}
                    isActive={isActive}
                  >
                    {route.label}
                  </StyledLink>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
