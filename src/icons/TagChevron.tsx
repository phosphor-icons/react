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
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
      opacity="0.2"
    />
    <path
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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
    <path d="M235.7,136.9l-42.7,64h0a15.9,15.9,0,0,1-13.3,7.1H24a7.8,7.8,0,0,1-7-4.2,8,8,0,0,1,.3-8.2L62.4,128,17.3,60.4a8,8,0,0,1-.3-8.2A7.8,7.8,0,0,1,24,48H179.7A15.9,15.9,0,0,1,193,55.1l42.7,64A16,16,0,0,1,235.7,136.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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
      d="M186.4,196.4l42.6-64a7.8,7.8,0,0,0,0-8.8l-42.6-64a7.9,7.9,0,0,0-6.7-3.6H24l45,67.6a7.8,7.8,0,0,1,0,8.8L24,200H179.7A7.9,7.9,0,0,0,186.4,196.4Z"
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

const TagChevron = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TagChevron.displayName = "TagChevron";

export default TagChevron;
