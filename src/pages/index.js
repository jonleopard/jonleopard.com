import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import Header from '../components/home/header';
import Nav from '../components/header';
import Footer from '../components/footer';
import { Text, P } from '../components/typography';
import Section, { SectionTitle } from '../components/section';

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`;

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

export default ({
  data: {
    allContentfulBlogPost: {edges: posts}
  }  }) => {
    const title = 'Test'
  return (
    <Fragment>
      <Helmet tite={title} />
      <Nav />
      <Header />

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
      <Footer />
    </Fragment>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
