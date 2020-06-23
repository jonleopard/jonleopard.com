import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

// These were taken from:
// https://gist.github.com/sw-yx/28c25962485101ca291ec1947b9d0b3e
const GlobalMarkdownStyles = createGlobalStyle`
  .markdown {
  a {
    ${tw`text-blue-700 underline`}
  }
  p {
    ${tw`my-4`}
  }

  blockquote,
  figure {
    ${tw`mx-10 my-4 italic`}
  }

  hr {
    ${tw`border`};
  }

  h1 {
    ${tw`my-2 text-4xl font-bold`}
  }

  h2 {
    ${tw`my-3 text-2xl font-bold`}
  }

  h3 {
    ${tw`my-4 text-lg font-bold`}
  }

  h4 {
    ${tw`my-5 text-base font-bold`}
  }

  h5 {
    ${tw`my-6 text-sm font-bold`}
  }

  h6 {
    ${tw`my-10 text-xs font-bold`}
  }

  article,
  aside,
  nav,
  section {
    h1 {
      ${tw`my-3 text-2xl font-bold`}
    }

    article,
    aside,
    nav,
    section {
      h1 {
        ${tw`my-4 text-lg font-bold`}
      }

      article,
      aside,
      nav,
      section {
        h1 {
          ${tw`my-5 text-base font-bold`}
        }

        article,
        aside,
        nav,
        section {
          h1 {
            ${tw`my-6 text-sm font-bold`}text-sm font-bold my-6;
          }

          article,
          aside,
          nav,
          section {
            h1 {
              ${tw`my-10 text-xs font-bold`}
            }
          }
        }
      }
    }
  }

  ul,
  menu {
    // should be my-4 for proper reset, but thats ugly af
    ${tw`pl-10 my-1 list-disc`}
  }

  ol {
    ${tw`pl-10 my-4 list-decimal`};
  }

  ul,
  ol {
    ul {
      ${tw`list-disc`}
    }

    ul,
    ol {
      ul {
        list-style-type: square;
      }
    }
  }

  dd {
    ${tw`pl-10`}
  }

  dl {
    ${tw`my-4`}
  }

  ul,
  ol,
  menu,
  dl {
    ul,
    ol,
    menu,
    dl {
      ${tw`m-0`}
    }
  }

  legend {
    ${tw`px-1 py-0`}
  }

  fieldset {
    ${tw`px-1 pt-0 pb-2 mx-1 my-0`}
  }

  b,
  strong {
    ${tw`font-bold`}
  }

  pre {
    ${tw`my-4`}
  }
}

`;

export default GlobalMarkdownStyles;
