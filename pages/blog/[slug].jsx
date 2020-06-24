import * as React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import 'twin.macro';
import { getLayout } from '../../components/SiteLayout';
import PostView from '../../components/Blog/Post';
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from '../../lib/api';

function BlogPost({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div tw="max-w-2xl px-8 mx-auto" preview={preview}>
      {router.isFallback ? (
        <div tw="text-blue-700 text-sm">Loading...</div>
      ) : (
        <>
          <article>
            <PostView markdown={post.content} post={post} />
          </article>
        </>
      )}
    </div>
  );
}

export default BlogPost;

BlogPost.getLayout = getLayout;

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: false,
  };
}
