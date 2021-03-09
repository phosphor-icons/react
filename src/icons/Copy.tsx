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
    <polyline
      points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="39.99902"
      y="87.99414"
      width="128"
      height="128"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <polygon
      points="168 87.993 168 167.993 216 167.993 216 39.993 88 39.993 88 87.993 168 87.993"
      opacity="0.2"
    />
    <polyline
      points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="39.99902"
      y="87.99414"
      width="128"
      height="128"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M215.99414,31.99316h-128a8.0004,8.0004,0,0,0-8,8v40.001h-40.001a8.0004,8.0004,0,0,0-8,8v128a8.0004,8.0004,0,0,0,8,8h128a8.00039,8.00039,0,0,0,8-8v-40.001h40.001a8.00039,8.00039,0,0,0,8-8v-128A8.0004,8.0004,0,0,0,215.99414,31.99316Zm-8,128h-32.001v-71.999a8.00039,8.00039,0,0,0-8-8h-71.999v-32.001h112Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="39.99902"
      y="87.99414"
      width="128"
      height="128"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polyline
      points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="39.99902"
      y="87.99414"
      width="128"
      height="128"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline
      points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="39.99902"
      y="87.99414"
      width="128"
      height="128"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Copy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Copy.displayName = "Copy";

export default Copy;
