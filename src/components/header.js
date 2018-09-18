import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-link';
import { Flex, Box } from 'grid-styled';

import { Text } from './typography';

const Logo = styled('a')`
  display: block;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  border-bottom: 0;
  font-weight: 500;
`;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nav = Box.extend`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      padding: 0 8px;
    }
  }
  a {
    color: ${props => props.theme.colors.text};
    border-bottom: 0;
    &:hover {
      color: ${props => props.theme.colors.textHover};
    }
  }
`;

export default () => (
  <StyledNav is="header" justifyContent="space-between">
    <Logo href="/">jonleopard.com</Logo>
    <Nav is="nav">
      <ul>
        <li>
          <Text fontSize={[1, 2]} style={{ lineHeight: '1em' }}>
            <Link to="/profile">Profile</Link>
          </Text>
        </li>

        <li>
          <Text fontSize={[1, 2]} style={{ lineHeight: '1em' }}>
            <a
              href="https://github.com/jonleopard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Text>
        </li>
        <li>
          <Text fontSize={[1, 2]} style={{ lineHeight: '1em' }}>
            <a
              href="https://twitter.com/jonlprd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Text>
        </li>
      </ul>
    </Nav>
  </StyledNav>
);
