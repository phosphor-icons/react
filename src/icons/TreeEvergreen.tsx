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
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="240"
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
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      opacity="0.2"
    />
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="240"
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
    <path d="M231.2,195.5A8,8,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a8,8,0,0,1-6.3-12.9L71.6,128H48a8,8,0,0,1-6.3-12.9l80-104a8,8,0,0,1,12.6,0l80,104A8,8,0,0,1,208,128H184.4l45.9,59.1A8,8,0,0,1,231.2,195.5Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="240"
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
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="240"
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
    <polygon
      points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="240"
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

const TreeEvergreen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TreeEvergreen.displayName = "TreeEvergreen";

export default TreeEvergreen;
