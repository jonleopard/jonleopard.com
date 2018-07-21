const path = require('path');
const _ = require('lodash');

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


