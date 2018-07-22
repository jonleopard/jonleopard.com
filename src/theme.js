import palx from 'palx';

const pink = '#F59AF0';
const purple = '#a980e4';
const grey = '#F5F5F5';

export const palette = palx(purple);

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff',
};

export const brand = {
  primary: pink,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver,
};

export const oldColors = {
  background: '#F5F5F5',
  heading: '#000000',
  text: '#000000',
  textHover: '#F59AF0',
  border: '#e6e9ef',
  link: '#000000',
  primary: '#F59AF0',
};

export const colors = {
  ...brand,
  ...grays,
  ...palette,
};

export const breakpoints = [32, 48, 64, 80];
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
export const font = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif,${emoji}`;
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace';

export const fontSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72, 96];
export const fontWeight = [300, 400, 500, 600];
export const regular = 400;
export const bold = 700;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold };

export const scaleFactor = 17 / 16;
export const transition = '0.125s ease-out';

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = '9999px';
export const radii = ['0px', '4px', '8px', '16px', pill];
export const radius = '4px';

export const shadowColor = 'rgba(0,0,0.16)';
export const baseShadow = '0 0 2px 0 rgba(0,0,0,.08),';
export const boxShadows = [
  `${baseShadow}0 2px 4px 0 ${shadowColor}`,
  `${baseShadow}0 4px 8px 0 ${shadowColor}`,
  `${baseShadow}0 12px 12px 0 ${shadowColor}`,
  `${baseShadow}0 24px 24px 0 ${shadowColor}`,
];

const theme = {
  colors,
  breakpoints,
  space,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  scaleFactor,
  transition,
  pill,
  radii,
  radius,
  shadowColor,
  baseShadow,
  boxShadows,
};

export default theme;
