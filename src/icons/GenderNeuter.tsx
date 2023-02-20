/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M212,104a84,84,0,1,0-96,83.1V232a12,12,0,0,0,24,0V187.1A84,84,0,0,0,212,104Zm-84,60a60,60,0,1,1,60-60A60,60,0,0,1,128,164Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M200,104a72,72,0,1,1-72-72A72,72,0,0,1,200,104Z" opacity="0.2" />
      <path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.1,80.1,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.1,64.1,0,0,1,128,168Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M128,24a80,80,0,0,0-8,159.6V232a8,8,0,0,0,16,0V183.6A80,80,0,0,0,128,24Zm0,144a64,64,0,1,1,64-64A64.1,64.1,0,0,1,128,168Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M206,104a78,78,0,1,0-84,77.7V232a6,6,0,0,0,12,0V181.7A78,78,0,0,0,206,104Zm-78,66a66,66,0,1,1,66-66A66.1,66.1,0,0,1,128,170Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.1,80.1,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.1,64.1,0,0,1,128,168Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M204,104a76,76,0,1,0-80,75.9V232a4,4,0,0,0,8,0V179.9A76.1,76.1,0,0,0,204,104Zm-76,68a68,68,0,1,1,68-68A68.1,68.1,0,0,1,128,172Z" />
    </>,
  ],
]);

const GenderNeuter: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

GenderNeuter.displayName = "GenderNeuter";

export default GenderNeuter;
