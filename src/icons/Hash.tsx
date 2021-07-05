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
    <line
      x1="43.63636"
      y1="96"
      x2="224"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="40"
      x2="144"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="112"
      y1="40"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="160"
      x2="212.36376"
      y2="160"
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
    <line
      x1="43.63636"
      y1="96"
      x2="224"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="144"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="40"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="160"
      x2="212.36376"
      y2="160"
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
    <path d="M224,88H175.40381l8.46728-46.56934a8.00005,8.00005,0,1,0-15.74218-2.86132L159.1416,88H111.40381l8.46728-46.56934a8.00005,8.00005,0,1,0-15.74218-2.86132L95.1416,88H43.63672a8,8,0,0,0,0,16h48.5957l-8.72754,48H32a8,8,0,0,0,0,16H80.59619l-8.46728,46.56934a8.00005,8.00005,0,1,0,15.74218,2.86132L96.8584,168h47.73779l-8.46728,46.56934a8.00005,8.00005,0,1,0,15.74218,2.86132L160.8584,168h51.50488a8,8,0,1,0,0-16h-48.5957l8.72754-48H224a8,8,0,0,0,0-16Zm-76.49512,64H99.76758l8.72754-48h47.7373Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="43.63636"
      y1="96"
      x2="224"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="40"
      x2="144"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="40"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="160"
      x2="212.36376"
      y2="160"
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
    <line
      x1="43.63636"
      y1="96"
      x2="224"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="40"
      x2="144"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="40"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="160"
      x2="212.36376"
      y2="160"
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
    <line
      x1="43.63636"
      y1="96"
      x2="224"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="144"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="40"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="160"
      x2="212.36376"
      y2="160"
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

const Hash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Hash.displayName = "Hash";

export default Hash;
