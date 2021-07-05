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
      x1="216.00488"
      y1="39.99414"
      x2="40.00488"
      y2="39.99414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="122"
      y="106"
      width="104"
      height="52"
      rx="8"
      transform="translate(306 -42) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="56"
      y="80"
      width="52"
      height="144"
      rx="8"
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
    <rect
      x="116"
      y="100"
      width="112"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      opacity="0.2"
    />
    <rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2" />
    <line
      x1="216.00488"
      y1="39.99414"
      x2="40.00488"
      y2="39.99414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="116"
      y="100"
      width="112"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="56"
      y="72"
      width="56"
      height="152"
      rx="8"
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
    <path d="M224.00488,39.99414a7.99977,7.99977,0,0,1-8,8h-176a8,8,0,0,1,0-16h176A7.99977,7.99977,0,0,1,224.00488,39.99414ZM192,64H152a16.01833,16.01833,0,0,0-16,16v96a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,192,64Zm-88,0H64A16.01833,16.01833,0,0,0,48,80V216a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,104,64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="216.00488"
      y1="39.99414"
      x2="40.00488"
      y2="39.99414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="116"
      y="100"
      width="112"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="56"
      y="72"
      width="56"
      height="152"
      rx="8"
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
    <line
      x1="216.00488"
      y1="39.99414"
      x2="40.00488"
      y2="39.99414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="116"
      y="100"
      width="112"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="56"
      y="72"
      width="56"
      height="152"
      rx="8"
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
    <line
      x1="216.00488"
      y1="39.99414"
      x2="40.00488"
      y2="39.99414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="116"
      y="100"
      width="112"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="56"
      y="72"
      width="56"
      height="152"
      rx="8"
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

const AlignTop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AlignTop.displayName = "AlignTop";

export default AlignTop;
