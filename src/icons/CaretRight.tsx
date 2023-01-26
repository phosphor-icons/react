/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M96,220a12.2,12.2,0,0,1-8.5-3.5,12,12,0,0,1,0-17L159,128,87.5,56.5a12,12,0,0,1,17-17l80,80a12,12,0,0,1,0,17l-80,80A12.2,12.2,0,0,1,96,220Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="96 48 176 128 96 208 96 48" />
    </g>
    <path d="M96,216a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,88,208V48a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l80,80a8.1,8.1,0,0,1,0,11.4l-80,80A8.3,8.3,0,0,1,96,216Zm8-148.7V188.7L164.7,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M181.7,133.7l-80,80A8.3,8.3,0,0,1,96,216a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,88,208V48a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l80,80A8.1,8.1,0,0,1,181.7,133.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M96,214a6,6,0,0,1-4.2-10.2L167.5,128,91.8,52.2a5.9,5.9,0,0,1,8.4-8.4l80,80a5.8,5.8,0,0,1,0,8.4l-80,80A5.8,5.8,0,0,1,96,214Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M96,216a8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4L164.7,128,90.3,53.7a8.1,8.1,0,0,1,11.4-11.4l80,80a8.1,8.1,0,0,1,0,11.4l-80,80A8.5,8.5,0,0,1,96,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M96,212a3.9,3.9,0,0,1-2.8-1.2,3.9,3.9,0,0,1,0-5.6L170.3,128,93.2,50.8a4,4,0,0,1,5.6-5.6l80,80a3.9,3.9,0,0,1,0,5.6l-80,80A3.9,3.9,0,0,1,96,212Z" />
  </>
);

const CaretRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CaretRight.displayName = "CaretRight";

export default CaretRight;
