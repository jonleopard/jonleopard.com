/** @jsx jsx */
import { Link, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import Layout from '../components/layout'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost

  return (
    <Layout>
      <div>
        <div>
          <div>Blog</div>
        </div>
        <div>
          <div>
            {posts.map(({ node: post }) => (
              <div key={post.title}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                <div>
                  <div dateTime={post.date}>{post.date}</div>
                </div>
              </div>
            ))}
          </div>
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
