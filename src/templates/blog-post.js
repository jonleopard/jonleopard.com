/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import { jsx, Box, Styled } from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import PageHeader from '../components/page-header'
import SocialMediaButtons from '../components/social-media-buttons'

const Template = ({ data }) => {
  const { title, date, body } = data.contentfulBlogPost
  if (!data) return null
  return (
    <Layout>
      <SEO />
      <article>
        <>
          <PageHeader title={title} subTitle={date} />
          <Styled.root
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
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
