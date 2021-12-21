/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <path
      d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M165.2,122.7a64,64,0,0,1,0,90.6,64.5,64.5,0,0,1-90.8,0,8,8,0,1,1,11.2-11.4,48.4,48.4,0,0,0,68.3,0A48,48,0,0,0,119.8,120a48.3,48.3,0,0,0-34.2,14.1,8,8,0,0,1-13.5-7L87.8,30.7A7.9,7.9,0,0,1,95.7,24H176a8,8,0,0,1,0,16H102.5L91,110.8a63,63,0,0,1,28.8-6.8A64.4,64.4,0,0,1,165.2,122.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M176,32H95.7L80,128.4a56.4,56.4,0,0,1,79.5,0,55.8,55.8,0,0,1,0,79.2,56.4,56.4,0,0,1-79.5,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const NumberFive = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberFive.displayName = "NumberFive";

export default NumberFive;
