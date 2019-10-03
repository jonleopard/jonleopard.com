/** @jsx jsx */
import { Link, graphql } from 'gatsby'
import { jsx, Box } from 'theme-ui'

import Layout from '../components/layout'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost

  return (
    <Layout>
      <Box sx={{ width: ['100%', '50%'], pt: 80 }}>
        <h1 sx={{ fontSize: [7, 6], mb: 3 }}>Blog</h1>
      </Box>
      <div>
        <div>
          {posts.map(({ node: post }) => (
            <div key={post.title} sx={{ mb: 2 }}>
              <Link
                sx={{ fontSize: 3, color: 'inherit' }}
                to={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <Box>
                <div dateTime={post.date}>{post.date}</div>
              </Box>
            </div>
          ))}
        </div>
      </div>
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
