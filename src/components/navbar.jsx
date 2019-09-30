/* eslint-disable */
// TODO: disabling until I can reconfigure rules
/** @jsx jsx */
import { Flex, Box, Text } from "rebass";
import { jsx, css, keyframes } from "@emotion/core";

import { Link } from "gatsby";

const fade = keyframes`
  from {
    opacity: 0;

  to {
      opacity: 1;
    }
`;

// const AnimatedBlock = styled.div`
//   display: inline-block;
//   animation: ${fade} 0.5s alternate infinite;
// `;

const NavBar = () => {
  return (
    <Text fontSize={2} fontFamily="body">
      <Box width={1}>
        <Flex alignItems="center" py={3}>
          <Box>
            <Link to="/">
              jonleopard.com
              <div
                css={css`
                  animation: ${fade} 0.5s alternate infinite;
                  display: inline-block;
                `}
              >
                ▌
              </div>
            </Link>
          </Box>
          <Box mx="auto" />
          <Box pr={2}>
            <Link to="/profile">profile</Link>
          </Box>
          <Box pr={2}>
            <Link to="/blog">blog</Link>
          </Box>
        </Flex>
      </Box>
    </Text>
  );
};

export default NavBar;
