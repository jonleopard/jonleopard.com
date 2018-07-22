import React, { Fragment } from 'react';
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components';
import theme from './theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  
  ::selection {
    background-color: #A980E4;
    color: #fff;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;   
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
		color: inherit;
		text-decoration: none;
		border-bottom: 1px solid #F59AF0;
    &:hover {
      color: ${props => props.theme.colors.primary};
		}
		&:visited {
      color: inherit;
    }

  p {
    margin: 0;
    padding: 0;
    }

  .content {
    a {
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      &:visited {
        color: inherit;
      }
      &:active {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    }
  }
`;

const ThemeProvider = ({ theme, webfonts, ...props }) => {
  if (webfonts) injectGlobal([], fontsCss)
  return (
    <Root
      theme={theme}
      {...props}
      children={<Fragment>{props.children}</Fragment>}
    />
  )
}

export default ThemeProvider;
