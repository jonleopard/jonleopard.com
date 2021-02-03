import * as React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

function SEO({ post }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for Jon Leopard's Blog"
          href="https://jonleopard.com/blog/rss"
        />
      </Head>

      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          url: `https://jonleopard.com/blog/${post.slug}`,
          description: post.excerpt,
          images: [
            {
              url: post.showcaseImage,
              alt: post.title,
            },
          ],
          site_name: 'Blog',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}

export default SEO;
