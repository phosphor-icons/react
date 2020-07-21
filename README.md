<img src="https://i.imgur.com/QKFwzHe.png" width="192" align="right" />

# phosphor-react
A clear, playful, and adaptable icon family for React.

[![NPM](https://img.shields.io/npm/v/phosphor-react.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-react.svg?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-react)

[![GitHub stars](https://img.shields.io/github/stars/rektdeckard/phosphor-react?style=flat-square&label=Star)](https://github.com/rektdeckard/phosphor-react)
[![GitHub forks](https://img.shields.io/github/forks/rektdeckard/phosphor-react?style=flat-square&label=Fork)](https://github.com/rektdeckard/phosphor-react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/rektdeckard/phosphor-react?style=flat-square&label=Watch)](https://github.com/rektdeckard/phosphor-react)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation
```bash
yarn add phosphor-react
```
or
```bash
npm install --save phosphor-react
```

## Usage
```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Horse, Heart, Cube } from "phosphor-react";

const App = () => {
  return (
    <>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Props
Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:
- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

<!-- ### Composability -->
<!-- Icons can be composed with children... -->

### Imports
You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "phosphor-react";
...
<Icon.Smiley>
<Icon.Folder weight="thin">
<Icon.BatteryHalf size="24px">
```

## License

MIT © [rektdeckard](https://github.com/rektdeckard)
