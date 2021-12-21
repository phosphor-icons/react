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
      d="M192,120h26.7a8.1,8.1,0,0,0,7.4-4.9l15.3-36.8a8.1,8.1,0,0,0-3.2-9.9L192,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M64,120H37.3a8.1,8.1,0,0,1-7.4-4.9L14.6,78.3a8.1,8.1,0,0,1,3.2-9.9L64,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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
      d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40Z"
      opacity="0.2"
    />
    <path
      d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40Z"
      opacity="0.2"
    />
    <path
      d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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
    <path d="M245.4,61.3,196,33.1h0a8,8,0,0,0-4-1.1H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-4,1.1h0L10.6,61.3a15.9,15.9,0,0,0-6.4,21l18.4,36.9A16,16,0,0,0,36.9,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h19.1a16,16,0,0,0,14.3-8.8l18.4-36.9A15.9,15.9,0,0,0,245.4,61.3ZM36.9,112,18.5,75.2,56,53.8V112Zm182.2,0H200V53.8l37.5,21.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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
      d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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
      d="M192,120h27.1a7.9,7.9,0,0,0,7.1-4.4l18.4-36.8a8.1,8.1,0,0,0-3.2-10.6L192,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,120H36.9a7.9,7.9,0,0,1-7.1-4.4L11.4,78.8a8.1,8.1,0,0,1,3.2-10.6L64,40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z"
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

const TShirt = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TShirt.displayName = "TShirt";

export default TShirt;
