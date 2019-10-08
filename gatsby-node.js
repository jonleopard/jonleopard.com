const _ = require(`lodash`)
const slash = require(`slash`)
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Redirects
  const redirectBatch = [
    {
      f: `/react-stateless-functional-components`,
      t: `/blog/react-stateless-functional-components`,
    },
    {
      f: `/update-on-learning-javascript`,
      t: `/blog/update-on-learning-javascript`,
    },
    {
      f: `/learning-how-to-program`,
      t: `/blog/learning-how-to-program`,
    },
    {
      f: `/new-machine-setup-automation`,
      t: `/blog/new-machine-setup-automation`,
    },
    {
      f: `/upgrading-ghost-inside-docker`,
      t: `/blog/upgrading-ghost-inside-docker`,
    },
    {
      f: `/installing-ghost-and-nginx-on-ubuntu-16-04`,
      t: `/blog/installing-ghost-and-nginx-on-ubuntu-16-04`,
    },
    {
      f: `/dotfile-management-with-gnu-stow`,
      t: `/blog/dotfile-management-with-gnu-stow`,
    },
  ]

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
      isPermanent: true,
    })
    // Uncomment next line to see forEach in action during build
    // console.log(`\nRedirecting:\n${f}\nTo:\n${t}\n`)
  })

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Grab template for blog posts
    const blogPost = path.resolve(`./src/templates/blog-post.js`)

    _.each(result.data.allContentfulBlogPost.edges, post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: slash(blogPost),
        context: {
          slug: post.node.slug,
          id: post.node.id,
        },
      })
    })
  })
}
