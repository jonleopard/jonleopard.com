import * as React from 'react';
import App from 'next/app';
import SiteLayout from '../components/SiteLayout';
import Providers from '../components/Providers';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const getLayout =
      Component.getLayout ||
      ((page) => <SiteLayout children={page} />);

    return getLayout(
      <Providers>
        <Component {...pageProps} />
      </Providers>,
    );
  }
}

export default MyApp;
