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
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
    <circle cx="128" cy="96" r="64" opacity="0.2" />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
    <g>
      <path d="M176,64h48a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z" />
      <path d="M231.93652,211.98633a120.48718,120.48718,0,0,0-67.12-54.14258A71.86434,71.86434,0,0,0,198.18579,80H176a23.99523,23.99523,0,0,1-10.62024-45.51459A71.97718,71.97718,0,1,0,91.18359,157.84375a120.48811,120.48811,0,0,0-67.11865,54.14063,7.99981,7.99981,0,0,0,6.92432,12.00634l194.023.002a7.99957,7.99957,0,0,0,6.92431-12.00635Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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

const UserMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserMinus.displayName = "UserMinus";

export default UserMinus;
