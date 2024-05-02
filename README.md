> [!IMPORTANT]
> As part of a major update, we will be replacing the existing `phosphor-react` package with `@phosphor-icons/react`. We recommend using this new version, as it has improved performance and a significantly smaller bundle size. No APIs have been changed, so drop-in replacement should be straightforward. The legacy package will continue to receive maintenance, but will not be updated with new icons upstream. [Take me to the legacy version ➜](https://github.com/phosphor-icons/react/tree/legacy)

<img src="/meta/phosphor-mark-tight-yellow.png" width="128" align="right" />

# @phosphor-icons/react

Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. Explore all our icons at [phosphoricons.com](https://phosphoricons.com).

[![NPM](https://img.shields.io/npm/v/@phosphor-icons/react.svg?style=flat-square)](https://www.npmjs.com/package/@phosphor-icons/react) [![Travis](https://img.shields.io/github/actions/workflow/status/phosphor-icons/react/main.yml?branch=vite&style=flat-square)](https://travis-ci.com/github/phosphor-icons/react)

[![GitHub stars](https://img.shields.io/github/stars/phosphor-icons/react?style=flat-square&label=Star)](https://github.com/phosphor-icons/react)
[![GitHub forks](https://img.shields.io/github/forks/phosphor-icons/react?style=flat-square&label=Fork)](https://github.com/phosphor-icons/react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/phosphor-icons/react?style=flat-square&label=Watch)](https://github.com/phosphor-icons/react)
[![Follow on GitHub](https://img.shields.io/github/followers/rektdeckard?style=flat-square&label=Follow)](https://github.com/rektdeckard)

## Installation

```bash
npm i @phosphor-icons/react
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

### React Server Components and SSR

When using Phosphor Icons in an SSR environment, within a React Server Component, or in any environment that does not permit the use of the Context API ([Next.js](https://nextjs.org/) Server Component, for example), import icons from the `/dist/ssr` submodule:

```tsx
import { Fish } from "@phosphor-icons/react/dist/ssr";

const MyServerComponent = () => {
  return <Fish weight="duotone" />;
};
```

> [!NOTE]
> These variants do not use React Context, and thus cannot inherit styles from an ancestor `IconContext`.

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

> [!NOTE]
> The context will also pass any provided SVG props down to icon instances, which can be useful E.G. in adding accessible `aria-label`s, `classNames`, etc.

> [!NOTE]
> React Context is not available in some environments. See [React Server Components and SSR](#react-server-components-and-ssr) for details.

### Composability

<img src="/meta/cube-rotate.svg" width="128" align="right" />

Components can accept arbitrary SVG elements as children, so long as they are valid children of the `<svg>` element. This can be used to modify an icon with background layers or shapes, filters, animations, and more. The children will be placed _below_ the normal icon contents.

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

> [!NOTE]
> The coordinate space of slotted elements is relative to the contents of the icon `viewBox`, which is 256x256 square. Only [valid SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category) will be rendered.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "@phosphor-icons/react";

<Icon.Smiley />
<Icon.Folder weight="thin" />
<Icon.BatteryHalf size="24px" />
```

For information on using Phosphor Icons in Server Components, see See [React Server Components and SSR](#react-server-components-and-ssr).

### Custom Icons

It is possible to extend Phosphor with your custom icons, taking advantage of the styling and context abstractions used in our library. To create a custom icon, first design your icons on a 256x256 pixel grid, and export them as SVG. For best results, flatten the icon so that you only export assets with `path` elements. Strip any `fill` or `stroke` attributes, as these will be inherited from the wrapper.

Next, create a new React `forwardRef` component, importing the `IconBase` component, as well as the `Icon` and `IconWeight` types from this library. Define a `Map<IconWeight, ReactElement>` that maps each icon weight to _the contents of each SVG asset_, effectively removing the wrapping `<svg>` element from each. Name your component, and render an `<IconBase />`, passing all props and the ref, as well as the `weights` you defined earlier, as JSX props:

```tsx
import { forwardRef, ReactElement } from "react";
import { Icon, IconBase, IconWeight } from "@phosphor-icons/react";

const weights = new Map<IconWeight, ReactElement>([
  ["thin", <path d="..." />],
  ["light", <path d="..." />],
  ["regular", <path d="..." />],
  ["bold", <path d="..." />],
  ["fill", <path d="..." />],
  [
    "duotone",
    <>
      <path d="..." opacity="0.2" />
      <path d="..." />
    </>,
  ],
]);

const CustomIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

CustomIcon.displayName = "CustomIcon";

export default CustomIcon;
```

> [!NOTE]
> If you have multiple child elements, wrap them in a `Fragment`. Typically our `duotone` icons have multiple elements, with the background layer at 20% opacity.

If Custom Icons are intended to be used in [React Server Components](#react-server-components-and-ssr), use `<SSRBase />` instead of `<IconBase />` as the render component.

## Our Related Projects

- [@phosphor-icons/homepage](https://github.com/phosphor-icons/homepage) ▲ Phosphor homepage and general info
- [@phosphor-icons/core](https://github.com/phosphor-icons/core) ▲ Phosphor icon assets and catalog
- [@phosphor-icons/react](https://github.com/phosphor-icons/react) ▲ Phosphor icon component library for React
- [@phosphor-icons/web](https://github.com/phosphor-icons/web) ▲ Phosphor icons for Vanilla JS
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue) ▲ Phosphor icon component library for Vue
- [@phosphor-icons/swift](https://github.com/phosphor-icons/swift) ▲ Phosphor icon component library for SwiftUI
- [@phosphor-icons/elm](https://github.com/phosphor-icons/phosphor-elm) ▲ Phosphor icons for Elm
- [@phosphor-icons/flutter](https://github.com/phosphor-icons/flutter) ▲ Phosphor IconData library for Flutter
- [@phosphor-icons/webcomponents](https://github.com/phosphor-icons/webcomponents) ▲ Phosphor icons as Web Components
- [@phosphor-icons/figma](https://github.com/phosphor-icons/figma) ▲ Phosphor icons Figma plugin
- [@phosphor-icons/sketch](https://github.com/phosphor-icons/sketch) ▲ Phosphor icons Sketch plugin
- [@phosphor-icons/pack](https://github.com/phosphor-icons/pack) ▲ Phosphor web font stripper to generate minimal icon bundles
- [@phosphor-icons/theme](https://github.com/phosphor-icons/theme) ▲ A VS Code (and other IDE) theme with the Phosphor color palette

## Community Projects

- [phosphor-react-native](https://github.com/duongdev/phosphor-react-native) ▲ Phosphor icon component library for React Native
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) ▲ Phosphor icons for Svelte apps
- [phosphor-r](https://github.com/dreamRs/phosphoricons) ▲ Phosphor icon wrapper for R documents and applications
- [blade-phosphor-icons](https://github.com/codeat3/blade-phosphor-icons) ▲ Phosphor icons in your Laravel Blade views
- [wireui/phosphoricons](https://github.com/wireui/phosphoricons) ▲ Phosphor icons for Laravel
- [phosphor-css](https://github.com/lucagoslar/phosphor-css) ▲ CSS wrapper for Phosphor SVG icons
- [ruby-phosphor-icons](https://github.com/maful/ruby-phosphor-icons) ▲ Phosphor icons for Ruby and Rails applications
- [eleventy-plugin-phosphoricons](https://github.com/reatlat/eleventy-plugin-phosphoricons) ▲ An Eleventy plugin for add shortcode, allows Phosphor icons to be embedded as inline svg into templates
- [phosphor-leptos](https://github.com/SorenHolstHansen/phosphor-leptos) ▲ Phosphor icon component library for Leptos apps (rust)
- [wordpress-phosphor-icons-block](https://github.com/robruiz/phosphor-icons-block) ▲ Phosphor icon block for use in WordPress v5.8+
- [ember-phosphor-icons](https://github.com/IgnaceMaes/ember-phosphor-icons) ▲ Phosphor icons for Ember apps

If you've made a port of Phosphor and you want to see it here, just open a PR [here](https://github.com/phosphor-icons/homepage)!

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)
