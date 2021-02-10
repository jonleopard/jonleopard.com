import * as React from 'react';
import 'twin.macro';
import { getLayout } from '../components/SiteLayout';

function Index() {
  return (
    <>
      <div tw="flex px-4 max-w-3xl mx-auto">
        <div tw="text-left">
          <h1 tw="block text-xl md:text-3xl lg:text-5xl font-bold leading-none mb-2">
            Hey, I'm Jon!
          </h1>
          <p tw="leading-tight text-gray-700 mb-2">
            I'm passionate about web development and love building great online
            products. Have a cool idea that you'd like to discuss, or need help
            developing it?
          </p>
          <p tw="leading-tight text-blue-600">
            <a href="mailto:discuss@jonleopard.com"> Let's talk.</a>
          </p>
        </div>
      </div>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
