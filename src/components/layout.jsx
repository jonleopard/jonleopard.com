/* eslint-disable */
// TODO: disabling until I can reconfigure rules
import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";
//import theme from "@rebass/preset";
import styled from "@emotion/styled";
import { Flex, Box } from "rebass";

import { merge, get } from "lodash";
import { useTransition, animated } from "react-spring";

// Fonts
import Rubik from "typeface-rubik";
import Lato from "typeface-lato";

// Components
import theme from "./theme";
import SEO from "./SEO";
import Footer from "./footer";
import NavBar from "./navbar";

const Wrapper = styled(Box)`
  max-width: 560px;
  margin: 0 auto;
  padding-left: 19px;
  padding-right: 19px;
`;

const Layout = ({ children, location }) => {
  // Page transition hook
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Flex
            flexDirection="column"
            sx={{
              minHeight: "100vh"
            }}
          >
            <NavBar />
            <Box
              sx={{
                flexGrow: 1
              }}
            >
              {transitions.map(({ item, key, props }) => (
                <animated.div key={key} style={props}>
                  {children}
                </animated.div>
              ))}
            </Box>
            <Footer />
          </Flex>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
