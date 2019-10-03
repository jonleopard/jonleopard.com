/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter, Facebook, HackerNews, Reddit } from 'react-social-sharing'
import { jsx } from 'theme-ui'

import config from '../../config/website'

// Hard coded color: 'white' to resist color mode inheritance

const SocialMediaButtons = () => {
  const data = useStaticQuery(graphql`
    query SocialButtonQuery {
      contentfulBlogPost {
        title
        slug
      }
    }
  `)
  return (
    <>
      <div>
        <div>
          <div>Share this post ❤️</div>
        </div>
        <div>
          <div sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Twitter
              style={{ color: 'white' }}
              message={`${data.contentfulBlogPost.title} by ${config.userTwitter}`}
              link={`${config.siteUrl}/blog/${data.contentfulBlogPost.slug}`}
            />
            <Reddit
              style={{ color: 'white' }}
              link={`${config.siteUrl}/blog/${data.contentfulBlogPost.slug}`}
            />
            <Facebook
              style={{ color: 'white' }}
              link={`${config.siteUrl}/blog/${data.contentfulBlogPost.slug}`}
            />
            <HackerNews
              style={{ color: 'white' }}
              link={`${config.siteUrl}/blog/${data.contentfulBlogPost.slug}`}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialMediaButtons
