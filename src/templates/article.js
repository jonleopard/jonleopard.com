import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import PageHeader from '../components/page-header';
import Markdown from '../components/markdown';
import SEO from '../components/SEO';
import config from '../../config/website';

export default function Template({ data }) {
  const disqusShortname = 'jonleopard';
  const disqusUrl = `https://jonleopard.com/${data.contentfulBlogPost.slug}`;
  return (
    <main>
      <article>
        <SEO
          postPath={data.contentfulBlogPost.slug}
          postNode={data.contentfulBlogPost}
          postSEO
        />
        <PageHeader
          title={data.contentfulBlogPost.title}
          subTitle={`By ${config.author} on ${data.contentfulBlogPost.date}`}
        />
        <Markdown
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
          id="top"
          className="content"
        />
      </article>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={data.contentfulBlogPost.title}
        title={data.contentfulBlogPost.title}
        url={disqusUrl}
      />
    </main>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      showcaseImage
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      date(formatString: "DD MMMM YYYY")
      id
      slug
    }
  }
`;
