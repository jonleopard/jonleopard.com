// example theme.js
import Prism from '@theme-ui/prism'
// import { toTheme } from "@theme-ui/typography";
// import trajan from "typography-theme-trajan";
import { system } from '@theme-ui/presets'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'
// import merge from "lodash.merge";

export default {
  ...system,
  initialColorMode: 'default',
  sizes: {
    container: 560,
  },
  styles: {
    pre: {
      ...nightOwl,
    },
    ...system.styles,
  },
}

// const typography = toTheme(trajan);

// export default merge(typography, {
//   ...future,
//   sizes: {
//     container: 560
//   },
//   styles: {
//     ...future.styles
//   }
// });
