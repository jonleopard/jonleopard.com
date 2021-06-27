import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'twin.macro';
import SEO from './SEO';
import SyntaxHighlighter from '../../SyntaxHighlighter';
import GlobalPrismStyles from '../../GlobalStyles/prism';
import { FormatDate, DateDistance } from '../../Date';

type PostProps = {
  markdown: string;
  post: {
    title: string;
    date: string;
    updatedAt: string;
  };
};

function PostView({
  markdown,
  post,
  post: { title, date, updatedAt },
}: PostProps) {
  return (
    <>
      <SyntaxHighlighter data={post} />
      <SEO post={post} />
      <GlobalPrismStyles />
      <div tw="mb-10">
        {/* <img src={post.coverImage.fields.file.url} /> */}
        <div tw="text-3xl font-extrabold mb-1">{title}</div>
        <div tw="flex flex-col md:flex-row">
          <FormatDate tw="flex-none" text="Published on " dateString={date} />
          <div tw="mr-1" />
          {updatedAt ? (
            <DateDistance
              tw="flex-none"
              text=" and was updated "
              dateString={updatedAt}
            />
          ) : null}
        </div>
      </div>
      <ReactMarkdown tw="w-full prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        {markdown}
      </ReactMarkdown>
    </>
  );
}

export default PostView;
