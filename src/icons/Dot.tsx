/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2" />
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" />
    </>,
  ],
]);

const Dot: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Dot.displayName = "Dot";

export default Dot;
