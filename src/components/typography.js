import React from 'react';
import styled from 'styled-components';
import cleanElement from 'clean-element';
import { fontSize, fontWeight, space } from 'styled-system';
import { Box } from 'grid-styled';

const BaseType = styled(Box)`
  margin: 0;
  padding: 0;
  line-height: 1.2em;
  color: ${props => props.theme.colors.text};
  ${fontSize};
  ${fontWeight};
  ${space};
`;

export const H1 = ({ children, ...otherProps }) => (
  <BaseType
    is="h1"
    fontWeight="400"
    fontSize={[6, 6, 7]}
    mt={[1]}
    mb={[1]}
    {...otherProps}
  >
    {children}
  </BaseType>
);

export const H2 = ({ children, ...otherProps }) => (
  <BaseType is="h2" fontWeight="500" fontSize={[1, 2, 3]} {...otherProps}>
    {children}
  </BaseType>
);

export const H3 = ({ children, ...otherProps }) => (
  <BaseType is="h3" fontWeight="500" fontSize={[1, 2]} {...otherProps}>
    {children}
  </BaseType>
);

export const H4 = ({ children, ...otherProps }) => (
  <BaseType is="h4" fontWeight="400" fontSize={[1, 2]} {...otherProps}>
    {children}
  </BaseType>
);

export const Text = ({ children, ...otherProps }) => (
  <BaseType
    is="p"
    fontWeight="400"
    fontSize={[2, 2, 3]}
    style={{ lineHeight: '1.8em' }}
    {...otherProps}
  >
    {children}
  </BaseType>
);

export const P = styled(Text)`
  margin-bottom: 0.4em;
`;
