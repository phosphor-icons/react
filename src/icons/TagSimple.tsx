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
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
      opacity="0.2"
    />
    <path
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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
    <path d="M246.7,123.6,201,55.1A15.9,15.9,0,0,0,187.7,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.7a15.9,15.9,0,0,0,13.3-7.1h0l45.7-68.5A8.2,8.2,0,0,0,246.7,123.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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
      d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
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

const TagSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TagSimple.displayName = "TagSimple";

export default TagSimple;
