import * as React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';
import routes from '../config/routes';

const defaultRoutes = [routes.home, routes.about, routes.projects, routes.blog];

interface StyledLink {
  isActive: boolean;
}

interface Props {
  activeRoute: string;
}

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
);

function Navbar() {
  const router = useRouter();
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
                      const isActive = route.path === router.pathname;
                      return (
                        <StyledLink
                          href={route.path}
                          key={route.path}
                          isActive={isActive}
                        >
                          {route.label}
                        </StyledLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel tw="sm:hidden">
            <div tw="px-2 pt-2 pb-3 space-y-1">
              {defaultRoutes.map((route) => {
                const isActive = route.path === router.pathname;
                return (
                  <StyledLink
                    href={route.path}
                    key={route.path}
                    isActive={isActive}
                  >
                    {route.label}
                  </StyledLink>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// function Navbar() {
//   const router = useRouter();
//   return (
//     <Disclosure as="nav" tw="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div tw="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div tw="relative flex items-center justify-between h-16">
//               <div tw="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button tw="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span tw="sr-only">Open main menu</span>
//                   {open ? (
//                     <FiX tw="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <FiMenu tw="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div tw="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                 <div tw="flex-shrink-0 flex items-center">
//                   <img
//                     tw="block lg:hidden h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                     alt="Workflow"
//                   />
//                   <img
//                     tw="hidden lg:block h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
//                     alt="Workflow"
//                   />
//                 </div>
//                 <div tw="hidden sm:block sm:ml-6">
//                   <div tw="flex space-x-4">
//                     {defaultRoutes.map((route) => {
//                       const isActive = route.path === router.pathname;
//                       <StyledLink
//                         key={route.path}
//                         href={route.path}
//                         isActive={isActive}
//                       >
//                         {route.label}
//                       </StyledLink>;
//                     })}
//                   </div>
//                 </div>
//               </div>
//               <div tw="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button tw="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"></button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel tw="sm:hidden">
//             <div tw="px-2 pt-2 pb-3 space-y-1">
//               {defaultRoutes.map((route) => {
//                 const isActive = route.path === router.pathname;
//                 <StyledLink
//                   key={route.path}
//                   href={route.path}
//                   isActive={isActive}
//                 >
//                   {route.label}
//                 </StyledLink>;
//               })}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

export default Navbar;
