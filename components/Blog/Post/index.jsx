/* eslint-disable-next-line no-unused-vars */
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { jsx } from '@emotion/core';
import 'twin.macro';
import SEO from './SEO';
import SyntaxHighlighter from '../../SyntaxHighlighter';
import GlobalPrismStyles from '../../GlobalStyles/prism';
import { FormatDate, DateDistance } from '../../Date';

function PostView({ markdown, post }) {
  return (
    <>
      <SyntaxHighlighter data={post} />
      <SEO post={post} />
      <GlobalPrismStyles />
      <div tw="mb-10">
        <div tw="text-2xl font-bold">{post.title}</div>
        <div tw="flex">
          <FormatDate text="Published on " dateString={post.date} />
          <div tw="mr-1" />
          <DateDistance
            text=" and was updated "
            dateString={post.updatedAt}
          />
        </div>
      </div>
      <ReactMarkdown
        tw="w-full prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
        source={markdown}
      />
    </>
  );
}

export default PostView;
