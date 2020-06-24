import * as React from 'react';
// import GlobalStyles from '../GlobalStyles';
import { ThemeProvider } from 'styled-components';
import SEO from './SEO';
import 'tailwindcss/dist/base.min.css';

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
