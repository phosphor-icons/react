> **ATTENTION:** As part of a major update, we will be replacing the existing `phosphor-react` package with `@phosphor-icons/react`. We recommend using this new version, as it has improved performance and significantly smaller bundle size. No APIs have been changed, so drop-in replacement should be straightforward. The legacy package will continue to recieve maintenance, but will not be updated with new icons upstream. [Take me to the legacy version ➜](https://github.com/phosphor-icons/react/tree/legacy)

<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# phosphor-react

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/@phosphor-icons/react.svg?style=flat-square)](https://www.npmjs.com/package/@phosphor-icons/react) [![Travis](https://img.shields.io/github/actions/workflow/status/phosphor-icons/react/main.yml?branch=vite&style=flat-square)](https://travis-ci.com/github/phosphor-icons/react)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/react?style=flat-square&label=Star)](https://github.com/phosphor-icons/react)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/react?style=flat-square&label=Fork)](https://github.com/phosphor-icons/react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/react?style=flat-square&label=Watch)](https://github.com/phosphor-icons/react)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
yarn add @phosphor-icons/react
```

or

```bash
npm install --save @phosphor-icons/react
```

## Usage

Simply import the icons you need, and add them anywhere in your render method. Phosphor supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import { Horse, Heart, Cube } from "@phosphor-icons/react";

const App = () => {
  return (
    <main>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </main>
  );
};
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.
- **alt?**: `string` – Add accessible alt text to an icon.

### Context

Phosphor takes advantage of React Context to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

```tsx
import { IconContext, Horse, Heart, Cube } from "@phosphor-icons/react";

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
        <Cube /> {/* Me three :) */}
      </div>
    </IconContext.Provider>
  );
};
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

> **Note:** The context will also pass any provided SVG props down to icon instances, which can be useful E.G. in adding accessible `aria-label`s, `classNames`, etc.

### Composability

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components can accept arbitrary SVG elements as children, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations and more. The children will be placed _below_ the normal icon contents.

The following will cause the Cube icon to rotate and pulse:

```jsx
const RotatingCube = () => {
  return (
    <Cube color="darkorchid" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Cube>
  );
};
```

> **Note:** The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is a 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "@phosphor-icons/react";

<Icon.Smiley />
<Icon.Folder weight="thin" />
<Icon.BatteryHalf size="24px" />
```

## Our Related Projects

- [phosphor-home](https://github.com/phosphor-icons/phosphor-home) ▲ Phosphor homepage and general info
- [phosphor-vue](https://github.com/phosphor-icons/phosphor-vue) ▲ Phosphor icon component library for Vue
- [phosphor-icons](https://github.com/phosphor-icons/phosphor-icons) ▲ Phosphor icons for Vanilla JS
- [phosphor-flutter](https://github.com/phosphor-icons/phosphor-flutter) ▲ Phosphor IconData library for Flutter
- [phosphor-webcomponents](https://github.com/phosphor-icons/phosphor-webcomponents) ▲ Phosphor icons as Web Components
- [phosphor-figma](https://github.com/phosphor-icons/phosphor-figma) ▲ Phosphor icons Figma plugin
- [phosphor-sketch](https://github.com/phosphor-icons/phosphor-sketch) ▲ Phosphor icons Sketch plugin

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/phosphor-home)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
