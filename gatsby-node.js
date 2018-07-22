const path = require('path');
const _ = require('lodash');

// NOTES
// Gatsby is generating pages here and the default component
// for this query is 'article.js', which is correct since we
// are querying contentful for blog posts.

// If you have other pages that have content being pulled
// from contentful, you'll need to make a new createPage
// E.g. https://github.com/LeKoArts/portfolio/blob/master/gatsby-node.js
// https://www.gatsbyjs.org/packages/gatsby-source-contentful/

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const component = path.resolve('./src/templates/article.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        _.forEach(result.data.allContentfulBlogPost.edges, ({ node }) => {
          createPage({
            path: node.slug,
            component,
            context: {
              slug: node.slug,
            },
          });
        });
      })
    );
  });
};

// This makes it so that you can import like so 'components/header'
// exports.modifyWebpackConfig = ({ config, env }) => {
//   config.merge({
//     resolve: {
//       root: path.resolve(__dirname, './src'),
//       extensions: ['', '.js', '.jsx', '.json'],
//     },
//   });
//   return config;
// };
