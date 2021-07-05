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
    <path d="M231.18652,195.51465A7.9997,7.9997,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a7.99958,7.99958,0,0,1-6.31445-12.91113L71.64258,128H48a8.00019,8.00019,0,0,1-6.34082-12.87793l80-104a8,8,0,0,1,12.68164,0l80,104A8.00019,8.00019,0,0,1,208,128H184.35742l45.957,59.08887A7.99813,7.99813,0,0,1,231.18652,195.51465Z" />
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
