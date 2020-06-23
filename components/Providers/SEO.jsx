import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

const SeoConfig = {
  title: 'Jon Leopard',
  description: 'Product designer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jonleopard.com',
    site_name: 'Jon Leopard',
    images: [
      {
        url: 'https://jonleopard.com/meta/og-image.png',
        alt: 'Jon Leopard',
      },
    ],
  },
  twitter: {
    handle: '@jonlprd',
    site: '@jonlprd',
    cardType: 'summary_large_image',
  },
};

export default function SEO() {
  const router = useRouter();

  let emoji = '🥞';
  if (router.route.indexOf('/profile') === 0) emoji = '👽';
  if (router.route.indexOf('/blog') === 0) emoji = '📚';

  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name="theme-color" content="#fefefe" />
        <link
          rel="apple-touch-icon"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/meta/mask-icon.svg"
          color="#050505"
        />
        <link rel="manifest" href="/meta/manifest.json" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
      </Head>
    </>
  );
}
