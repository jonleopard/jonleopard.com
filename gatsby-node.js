const path = require('path');
const slugify = require('slug');
const { createFilePath } = require('gatsby-source-filesystem');

const BLOG_POST_SLUG_REGEX = /^\/.+\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)\/$/;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const permalink = node.frontmatter.path;
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    let slug = permalink;

    if (!slug && relativePath.includes('journal')) {
      // Generate final path + graphql fields for blog posts
      const match = BLOG_POST_SLUG_REGEX.exec(relativePath);
      if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];

        slug = `/${slugify(filename)}/`;

        const date = new Date(
          Number.parseInt(year, 10),
          Number.parseInt(month, 10) - 1,
          Number.parseInt(day, 10)
        );

        // Blog posts are sorted by date and display the date in their header.
        createNodeField({
          node,
          name: 'date',
          value: date.toJSON(),
        });
      }
    }

    if (!slug) {
      slug = relativePath;
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/article.js`);
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const { slug } = node.fields;
      const prev = index === 0 ? false : posts[index - 1].node;
      const next = index === posts.length - 1 ? false : posts[index + 1].node;
      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          slug,
        },
      });
    });

    return posts;
  });
};

exports.modifyWebpackConfig = ({ config, env }) => {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};
