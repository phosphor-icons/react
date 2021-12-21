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
    <circle
      cx="95.9"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="95.9 60 95.9 136 183.9 136 215.9 200 239.9 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M163.2,184.1A64,64,0,1,1,103.9,96h56"
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
    <circle cx="95.9" cy="40" r="20" opacity="0.2" />
    <circle
      cx="95.9"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="95.9 60 95.9 132 183.9 132 215.9 196 239.9 188"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M167.8,164a64,64,0,1,1-63.9-68h56"
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
    <path d="M247.5,185.5a8,8,0,0,0-10.1-5.1l-17.5,5.8L191,128.4a7.9,7.9,0,0,0-7.1-4.4h-80V104h56a8,8,0,0,0,0-16h-56V62.6a24,24,0,1,0-16,0V89.8a72,72,0,1,0,87.8,74.7,8,8,0,1,0-15.9-1,56,56,0,1,1-71.9-57.2V132a8,8,0,0,0,8,8h83l29.8,59.6a8,8,0,0,0,7.2,4.4,7.3,7.3,0,0,0,2.5-.4l24-8A8,8,0,0,0,247.5,185.5Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="95.9"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="95.9 60 95.9 132 183.9 132 215.9 196 239.9 188"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M167.8,164a64,64,0,1,1-63.9-68h56"
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
    <circle
      cx="95.9"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="95.9 60 95.9 132 183.9 132 215.9 196 239.9 188"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M167.8,164a64,64,0,1,1-63.9-68h56"
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
    <circle
      cx="95.9"
      cy="40"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="95.9 60 95.9 132 183.9 132 215.9 196 239.9 188"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M167.8,164a64,64,0,1,1-63.9-68h56"
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

const Wheelchair = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wheelchair.displayName = "Wheelchair";

export default Wheelchair;
