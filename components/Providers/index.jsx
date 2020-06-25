import * as React from 'react';
// import GlobalStyles from '../GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwindcss/dist/base.min.css';

import SEO from './SEO';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      {children}
    </ThemeProvider>
  );
};
