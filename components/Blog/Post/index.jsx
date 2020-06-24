import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import 'twin.macro';
import SEO from './SEO';
import SyntaxHighlighter from '../../SyntaxHighlighter';
import GlobalPrismStyles from '../../GlobalStyles/prism';
import GlobalMarkdownStyles from '../../GlobalStyles/markdown';
import { FormatDate, DateDistance } from '../../Date';

function PostView({ markdown, post }) {
  return (
    <>
      <SyntaxHighlighter data={post} />
      <SEO post={post} />
      <GlobalPrismStyles />
      <GlobalMarkdownStyles />
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
      <ReactMarkdown className="markdown" source={markdown} />
    </>
  );
}

export default PostView;
