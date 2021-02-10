import * as React from 'react';
import SiteLayout from '../components/SiteLayout';
import Providers from '../components/Providers';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);

  return getLayout(
    <Providers>
      <Component {...pageProps} />
    </Providers>,
  );
}

export default MyApp;
