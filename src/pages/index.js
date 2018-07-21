import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text, P } from 'components/typography';
import Section, { SectionTitle } from 'components/section';
import config from '../../config/website';

// import svgAnimation from '../assets/images/icon.svg';


const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allContentfulBlogPost;
  return (
    <div>
      <main>
        <Helmet title={config.siteTitle}>
          <meta name="twitter:title" content={config.siteTitle} />
          <meta name="twitter:description" content={config.siteDescription} />
        </Helmet>
        <Section pt={[20, 40]}>
          <h1>
            Hello, my name is Jon.
            <br />
            I am a web developer based in Paris.
          </h1>
        </Section>
        <SectionTitle>Recent articles</SectionTitle>
        {posts.map(({ node: post }) => (
          <Box mb={2} key={post.title}>
            <Text>
              <Link to={post.slug} style={{ color: 'black' }}>
                {post.title}
                <PostDate is="time" dateTime={post.date}>
                  {post.date}
                </PostDate>
              </Link>
            </Text>
          </Box>
        ))}
      </main>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          date(formatString: "DD MMMM YYYY")
          title
          slug
          id
        }
      }
    }
  }
`;
