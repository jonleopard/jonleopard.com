import * as React from 'react';
import { GetStaticProps } from 'next';
import 'twin.macro';
import { getAllPostsForBlogList } from '../lib/api';
import generateRssFeed from '../lib/rss';
import generateSitemap from '../lib/sitemap';
import SubscribeBox from '../components/SubscribeBox';
import BlogList from '../components/Blog/List';
import { getLayout } from '../components/SiteLayout';

function BlogIndex({ posts }) {
  return (
    <>
      <div tw="max-w-3xl mx-auto px-4">
        <h1 tw="block text-5xl font-bold leading-none mb-10">Blog</h1>
        <BlogList posts={posts} />
        <SubscribeBox />
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
