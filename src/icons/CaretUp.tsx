/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,172a12.2,12.2,0,0,1-8.5-3.5L128,97,56.5,168.5a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80a12,12,0,0,1,0,17A12.2,12.2,0,0,1,208,172Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="48 160 128 80 208 160 48 160" />
    </g>
    <path d="M208,168H48a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l80-80a8.1,8.1,0,0,1,11.4,0l80,80a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,208,168ZM67.3,152H188.7L128,91.3Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M215.4,163.1A8,8,0,0,1,208,168H48a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l80-80a8.1,8.1,0,0,1,11.4,0l80,80A8.4,8.4,0,0,1,215.4,163.1Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,166a5.8,5.8,0,0,1-4.2-1.8L128,88.5,52.2,164.2a5.9,5.9,0,0,1-8.4-8.4l80-80a5.8,5.8,0,0,1,8.4,0l80,80A6,6,0,0,1,208,166Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,168a8.5,8.5,0,0,1-5.7-2.3L128,91.3,53.7,165.7a8.1,8.1,0,0,1-11.4-11.4l80-80a8.1,8.1,0,0,1,11.4,0l80,80a8.1,8.1,0,0,1,0,11.4A8.5,8.5,0,0,1,208,168Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,164a3.9,3.9,0,0,1-2.8-1.2L128,85.7,50.8,162.8a4,4,0,0,1-5.6-5.6l80-80a3.9,3.9,0,0,1,5.6,0l80,80a3.9,3.9,0,0,1,0,5.6A3.9,3.9,0,0,1,208,164Z" />
  </>
);

const CaretUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CaretUp.displayName = "CaretUp";

export default CaretUp;
