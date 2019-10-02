// example theme.js
import Prism from '@theme-ui/prism'
// import { toTheme } from "@theme-ui/typography";
// import trajan from "typography-theme-trajan";
import { system } from '@theme-ui/presets'
// import merge from "lodash.merge";

export default {
  initialColorMode: 'default',
  ...system,
  sizes: {
    container: 560,
  },
  styles: {
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
