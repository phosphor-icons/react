/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z" />
    </>,
  ],
]);

const Circle: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Circle.displayName = "Circle";

export default Circle;
