import * as React from 'react';
import 'twin.macro';
import Emoji from 'a11y-react-emoji';
import { getLayout } from '../components/SiteLayout';

function Index() {
  return (
    <>
      <div tw="flex py-10 max-w-3xl mx-auto items-center flex-col">
        <h1 tw="block text-lg md:text-2xl lg:text-4xl font-bold leading-none mb-2">
          Hey! I'm Jon <Emoji symbol="👋🏻" label="Waving" />
        </h1>
        <div tw="leading-tight text-gray-700">
          <p tw="mb-2">
            <Emoji tw="mr-1" symbol="👨🏻‍💻" label="Man Technologist" /> Web
            developer & Indie Hacker
          </p>
          <p tw="mb-2">
            <Emoji tw="mr-2" symbol="🌎" label="Earth" />
            Remote worker
          </p>
          <p tw="mb-2">
            <Emoji tw="mr-2" symbol="👾" label="Space Invader" />
            Gaming, photography, outdoors <br />
          </p>
          <p tw="mb-2">
            <Emoji tw="mr-2" symbol="🇺🇸" label="American Flag" />→{' '}
            <Emoji tw="mr-2" symbol="🇫🇷" label="France Flag" />
            U.S Expat living in Paris <br />
          </p>
        </div>
      </div>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
