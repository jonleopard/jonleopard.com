import * as React from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';
import tw from 'twin.macro';
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
          <h1 tw="block text-xl md:text-3xl lg:text-5xl font-bold leading-none mb-2">
            Hey, I'm Jon!
          </h1>
          <p tw="leading-tight text-gray-700 mb-2">
            I'm passionate about web development and love building
            great online products. Have a cool idea that you'd like to
            discuss, or need help developing it?
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
