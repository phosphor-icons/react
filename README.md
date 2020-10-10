<img src="https://i.imgur.com/QKFwzHe.png" width="192" align="right" />

# phosphor-react

A clear, playful, and adaptable icon family for React. A complete list of icons can be found on [our website](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/phosphor-react.svg?style=flat-square)](https://www.npmjs.com/package/phosphor-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Travis](https://img.shields.io/travis/com/rektdeckard/phosphor-react.svg?style=flat-square)](https://travis-ci.com/github/rektdeckard/phosphor-react)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/phosphor-react?style=flat-square&label=Star)](https://github.com/phosphor-icons/phosphor-react)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/phosphor-react?style=flat-square&label=Fork)](https://github.com/phosphor-icons/phosphor-react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/phosphor-react?style=flat-square&label=Watch)](https://github.com/phosphor-icons/phosphor-react)
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

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Horse, Heart, Cube } from "phosphor-react";

const App = () => {
  return (
    <div>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Context

Phosphor takes advantage of React Context to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { IconContext, Horse, Heart, Cube } from "phosphor-react";

const App = () => {
  return (
    <IconContext.Provider
      value={{
        color: "limegreen",
        size: 32,
        weight: "bold",
        mirrored: false,
      }}
    >
      <div>
        <Horse /> {/* I'm lime-green, 32px, and bold! */}
        <Heart /> {/* Me too! */}
        <Cube />  {/* Me three :) */}
      </div>
    </IconContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

> **Note:** The `color`, `size`, `weight`, and `mirrored` properties are all _required_ props when creating a context.

<!-- ### Composability -->
<!-- Icons can be composed with children... -->

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "phosphor-react";
...
<Icon.Smiley />
<Icon.Folder weight="thin" />
<Icon.BatteryHalf size="24px" />
```

## Related Projects

- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
