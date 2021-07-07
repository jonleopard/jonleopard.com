import 'twin.macro';
import * as React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getLayout } from '../../components/SiteLayout';
import PostView from '../../components/Blog/Post';
import SubscribeBox from '../../components/SubscribeBox';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';

function BlogPost({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div tw="max-w-3xl px-4 mx-auto">
      {router.isFallback ? (
        <div tw="text-blue-700 text-sm">Loading...</div>
      ) : (
        <>
          <article tw="prose prose-purple prose-sm sm:prose lg:prose-lg xl:prose-xl">
            <PostView markdown={post.content} post={post} />
          </article>
          <SubscribeBox />
        </>
      )}
    </div>
  );
}

export default BlogPost;

BlogPost.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostAndMorePosts(params.slug);

  return {
    props: {
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    // Figure out if I really need this. Leaving it to 'true'
    // causes an error.
    fallback: false,
  };
};
