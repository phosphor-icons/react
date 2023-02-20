/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M228,160a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,160ZM40,108H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M222,160a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,160ZM40,102H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M220,160a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,160ZM40,100H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Z" />
    </>,
  ],
]);

const Equals: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Equals.displayName = "Equals";

export default Equals;
