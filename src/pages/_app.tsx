import * as React from 'react';
import SiteLayout from '../components/SiteLayout';
import Providers from '../components/Providers';
import { AppProps } from 'next/app';
import type { Page } from '../types/page';

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);

  return getLayout(
    <Providers>
      <Component {...pageProps} />
    </Providers>,
  );
}

export default MyApp;
