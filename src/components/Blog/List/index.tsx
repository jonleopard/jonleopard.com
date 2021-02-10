import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import 'twin.macro';
import { FormatDate } from '../../Date';

interface LineClamp {
  lines: number;
}

// Might extract these two later
const LineClamp = styled.span`
  -webkit-line-clamp: ${(props: LineClamp) => props.lines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;

function BlogList({ posts }) {
  if (!posts || posts.length === 0) return null;
  return (
    <div tw="grid grid-cols-1 gap-8">
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            href="/blog/[slug]"
            as={`/blog/${post.slug}`}
            passHref
          >
            <a tw="text-base mb-2 text-blue-600">{post.title}</a>
          </Link>

          <LineClamp lines={2} tw="text-base mb-1">
            {post.excerpt}
          </LineClamp>

          <FormatDate
            text="Published on "
            dateString={post.date}
            key={post.id}
          />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
