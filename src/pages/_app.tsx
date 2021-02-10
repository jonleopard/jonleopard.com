import { Fragment } from 'react';
import Providers from '../components/Providers';
import { AppProps } from 'next/app';
import type { Page } from '../types/page';

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <Providers>
      {getLayout(
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Providers>
  );
}

export default MyApp;
