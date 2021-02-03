/* eslint-disable-next-line no-unused-vars */
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
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
        <div tw="text-3xl font-extrabold mb-1">{post.title}</div>
        <div tw="flex flex-col md:flex-row">
          <FormatDate
            tw="flex-none"
            text="Published on "
            dateString={post.date}
          />
          <div tw="mr-1" />
          {post.updatedAt ? (
            <DateDistance
              tw="flex-none"
              text=" and was updated "
              dateString={post.updatedAt}
            />
          ) : null}
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
