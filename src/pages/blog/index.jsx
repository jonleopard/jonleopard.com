import * as React from 'react';
import 'twin.macro';
import { getAllPostsForBlogList } from '../../lib/api';
import generateRssFeed from '../../lib/rss';
import generateSitemap from '../../lib/sitemap';
import BlogList from '../../components/Blog/List';
import { getLayout } from '../../components/SiteLayout';

function BlogIndex({ posts, preview }) {
  return (
    <>
      <div tw="max-w-3xl mx-auto px-4" preview={preview}>
        <h1 tw="block text-5xl font-bold leading-none mb-10">Blog</h1>
        <BlogList posts={posts} />
      </div>
    </>
  );
}

BlogIndex.getLayout = getLayout;

export default BlogIndex;

export async function getStaticProps({ preview = false }) {
  await generateRssFeed();
  await generateSitemap();

  const posts = await getAllPostsForBlogList(preview);
  return {
    props: { posts, preview },
  };
}
