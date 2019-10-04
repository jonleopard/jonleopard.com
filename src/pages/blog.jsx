/** @jsx jsx */
import { Link, graphql } from 'gatsby'
import { jsx, Box } from 'theme-ui'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost

  return (
    <Layout>
      <PageHeader title="Blog" />
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
