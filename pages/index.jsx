import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Emoji from 'a11y-react-emoji';
import 'twin.macro';
import { getLayout } from '../components/SiteLayout';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Index() {
  return (
    <>
      <div tw="flex max-w-2xl px-8 mx-auto">
        <div tw="text-left">
          <h1 tw="block text-xl md:text-2xl lg:text-3xl font-bold leading-none mb-2">
            Hey, I'm Jon!
          </h1>
          <h2 tw="block text-xl md:text-xl lg:text-2xl font-bold leading-none">
            I do full stack web development.
          </h2>
          <h2 tw="leading-tight text-gray-700">
            My primary languages are Javascript (ES6) and Go.
          </h2>
          <p tw="leading-tight text-gray-700">
            Have a cool idea that you'd like to disuss or have
            developed?
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
