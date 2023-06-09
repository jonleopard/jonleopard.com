import "twin.macro";
import Emoji from "a11y-react-emoji";
import Link from "next/link";
import { getLayout } from "../components/SiteLayout";

function Index() {
  return (
    <>
      <div tw="flex py-10 max-w-3xl mx-auto flex-col">
        <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div tw="sm:text-center lg:text-left">
            <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span tw="block xl:inline">
                Hey! I'm Jon <Emoji symbol="👋🏻" label="Waving" />
              </span>{" "}
              <span tw="block text-5xl text-gray-600">
                {" "}
                I'm a software developer passionate about writing clean code and
                crafting great web experiences.
              </span>
            </h1>
            <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I’m currently seeking a new role. An ideal position would be something that involves:
              <ul>
                <li>- React stack (Next.js)</li>
                <li>- Typescript</li>
                <li>- Golang (api work)</li>
                <li>- Small to meduim sized team</li>
                <li>- Remote or Phoenix/Scottsdale area</li>
              </ul>
              <p tw="mt-3">
                If you or anyone you know is looking for a web developer, please
                send me a line at work(at)jonleopard.com!
              </p>
            </p>
            <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div tw="mt-3 sm:mt-0">
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
  );
}

Index.getLayout = getLayout;

export default Index;
