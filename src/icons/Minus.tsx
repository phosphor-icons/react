/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M216,140H40a12,12,0,0,1,0-24H216a12,12,0,0,1,0,24Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M216,134H40a6,6,0,0,1,0-12H216a6,6,0,0,1,0,12Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M216,132H40a4,4,0,0,1,0-8H216a4,4,0,0,1,0,8Z" />
    </>,
  ],
]);

const Minus: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Minus.displayName = "Minus";

export default Minus;
