import React from 'react'
import { Link, graphql } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'

import Layout from '../components/layout'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost

  return (
    <Layout>
      <Text fontFamily="body">
        <Box width={1} pt={[20, 80]}>
          <Heading fontFamily="heading" fontSize={6} pb={4}>
            Blog
          </Heading>
        </Box>
        <Flex flexDirection="column">
          <Box>
            {posts.map(({ node: post }) => (
              <Text fontSize={2} key={post.title} mb={3}>
                <Link to={`/blog/${post.slug}`} color="black">
                  {post.title}
                </Link>
                <Box pt={2}>
                  <Text fontSize={1} dateTime={post.date}>
                    {post.date}
                  </Text>
                </Box>
              </Text>
            ))}
          </Box>
        </Flex>
      </Text>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
`
