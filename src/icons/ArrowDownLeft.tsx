/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M200.5,72.5,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.5,55.5a12,12,0,0,1,17,17Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M197.7,69.7,83.3,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.7L186.3,58.3a8.1,8.1,0,0,1,11.4,11.4Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M197.7,69.7,127.3,140l46.4,46.3a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,168,200H64a8,8,0,0,1-8-8V88a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7L116,128.7l70.3-70.4a8.1,8.1,0,0,1,11.4,11.4Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M196.2,68.2,78.5,186H168a6,6,0,0,1,0,12H64a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v89.5L187.8,59.8a5.9,5.9,0,0,1,8.4,8.4Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M197.7,69.7,83.3,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.7L186.3,58.3a8.1,8.1,0,0,1,11.4,11.4Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M194.8,66.8,73.7,188H168a4,4,0,0,1,0,8H64a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v94.3L189.2,61.2a4,4,0,1,1,5.6,5.6Z" />
    </>,
  ],
]);

const ArrowDownLeft: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

ArrowDownLeft.displayName = "ArrowDownLeft";

export default ArrowDownLeft;
