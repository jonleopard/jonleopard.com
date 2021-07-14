import * as React from 'react';
import 'twin.macro';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { getAllPostsForBlogList } from '../lib/api';
import generateRssFeed from '../lib/rss';
import generateSitemap from '../lib/sitemap';
import SubscribeBox from '../components/SubscribeBox';
import BlogList from '../components/Blog/List';
import { getLayout } from '../components/SiteLayout';
import routes from '../config/routes';

function BlogIndex({ posts }) {
  return (
    <>
      <NextSeo
        title={routes.blog.seo.title}
        description={routes.blog.seo.description}
        openGraph={routes.blog.seo.openGraph}
      />
      <div tw="max-w-3xl mx-auto px-4">
        <h1 tw="block text-5xl font-bold leading-none mb-10">Blog</h1>
        <BlogList posts={posts} />
        <div tw="pt-12">
          <SubscribeBox />
        </div>
      </div>
    </>
  );
}

BlogIndex.getLayout = getLayout;

export default BlogIndex;

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed();
  await generateSitemap();

  const posts = await getAllPostsForBlogList();
  return {
    props: { posts },
  };
};
