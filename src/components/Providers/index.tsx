import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'twin.macro';
import PlausibleProvider from 'next-plausible';
import 'tailwindcss/dist/base.min.css';
import SEO from './SEO';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PlausibleProvider domain="jonleopard.com">
        <SEO />
        <GlobalStyles />
        {children}
      </PlausibleProvider>
    </ThemeProvider>
  );
};
export default Provider;
