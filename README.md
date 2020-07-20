# phosphor-react

> A clean and friendly icon family for React

[![NPM](https://img.shields.io/npm/v/phosphor-react.svg)](https://www.npmjs.com/package/phosphor-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save phosphor-react
```
OR
```bash
yarn add phosphor-react
```

## Usage

```tsx
import React from 'react';
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
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Props
Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more, but the main way of interacting with them will usually be with the following props:
- `color?: string` specifies icon stroke/fill color.
- `size?: number | string` specifies icon height & width. As with standard HTML elements, this can  be a number, or a string with units `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`...
- `weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"` specifies the icon weight/style

### Imports
You may wish to import all icons for use in your project, though depending on your bundler this could cause overheads.

```tsx
import * as Icon from "phosphor-react";
...
<Icon.Smiley>
<Icon.Folder weight="thin">
<Icon.BatteryHalf size="24px">
```

## License

MIT © [rektdeckard](https://github.com/rektdeckard)
