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
      d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
      d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
    <path d="M165.17383,122.73535a64.11724,64.11724,0,0,1-90.81836,90.53174,7.99968,7.99968,0,1,1,11.28906-11.3374,47.99883,47.99883,0,1,0,0-67.85645,7.99971,7.99971,0,0,1-13.541-6.95215L87.77344,30.7168A8.00076,8.00076,0,0,1,95.66992,24H176a8,8,0,0,1,0,16H102.47461l-11.501,70.75537a64.53171,64.53171,0,0,1,74.2002,11.98Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
      d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
      d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
