/** @jsx jsx */
import React from 'react'
import { graphql, Box } from 'gatsby'
import { jsx } from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import PageHeader from '../components/page-header'
import SocialMediaButtons from '../components/social-media-buttons'

const Template = ({ data }) => {
  if (!data) return null
  return (
    <Layout>
      <SEO />
      <article>
        <>
          <PageHeader
            title={data.contentfulBlogPost.title}
            subTitle={data.contentfulBlogPost.date}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
            id="top"
            className="content"
          />
        </>
      </article>
      <SocialMediaButtons />
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      id
      slug
      date(formatString: "DD MMMM YYYY")
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`
