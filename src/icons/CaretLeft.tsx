/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M160,220a12.2,12.2,0,0,1-8.5-3.5l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128l71.5,71.5a12,12,0,0,1,0,17A12.2,12.2,0,0,1,160,220Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="160 208 80 128 160 48 160 208" />
    </g>
    <path d="M160,216a8.3,8.3,0,0,1-5.7-2.3l-80-80a8.1,8.1,0,0,1,0-11.4l80-80a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,168,48V208a8,8,0,0,1-4.9,7.4A8.5,8.5,0,0,1,160,216ZM91.3,128,152,188.7V67.3Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M168,48V208a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-80-80a8.1,8.1,0,0,1,0-11.4l80-80a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,168,48Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M160,214a5.8,5.8,0,0,1-4.2-1.8l-80-80a5.8,5.8,0,0,1,0-8.4l80-80a5.9,5.9,0,0,1,8.4,8.4L88.5,128l75.7,75.8A6,6,0,0,1,160,214Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M160,216a8.5,8.5,0,0,1-5.7-2.3l-80-80a8.1,8.1,0,0,1,0-11.4l80-80a8.1,8.1,0,0,1,11.4,11.4L91.3,128l74.4,74.3a8.1,8.1,0,0,1,0,11.4A8.5,8.5,0,0,1,160,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M160,212a3.9,3.9,0,0,1-2.8-1.2l-80-80a3.9,3.9,0,0,1,0-5.6l80-80a4,4,0,1,1,5.6,5.6L85.7,128l77.1,77.2a3.9,3.9,0,0,1,0,5.6A3.9,3.9,0,0,1,160,212Z" />
  </>
);

const CaretLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CaretLeft.displayName = "CaretLeft";

export default CaretLeft;
