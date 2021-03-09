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
      x1="79.97949"
      y1="127.99219"
      x2="175.97949"
      y2="127.99219"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M103.97266,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M151.97949,175.99609h40a48,48,0,0,0,0-96h-40"
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
      x1="79.96582"
      y1="127.99219"
      x2="175.96582"
      y2="127.99219"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M103.959,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M151.96582,175.99609h40a48,48,0,0,0,0-96h-40"
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
      <path d="M71.97266,127.99219a8.00009,8.00009,0,0,0,8,8h96a8,8,0,0,0,0-16h-96A8.00008,8.00008,0,0,0,71.97266,127.99219Z" />
      <path d="M103.96582,167.99609h-40a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16h-40a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Z" />
      <path d="M191.97266,71.99609h-40a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80h-40a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="79.98633"
      y1="127.99219"
      x2="175.98633"
      y2="127.99219"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M103.97949,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M151.98633,175.99609h40a48,48,0,0,0,0-96h-40"
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
      x1="79.99316"
      y1="127.99219"
      x2="175.99316"
      y2="127.99219"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M103.98633,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M151.99316,175.99609h40a48,48,0,0,0,0-96h-40"
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
      x1="80"
      y1="127.99219"
      x2="176"
      y2="127.99219"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,175.99609h40a48,48,0,0,0,0-96H152"
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

const LinkSimpleHorizontal = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

LinkSimpleHorizontal.displayName = "LinkSimpleHorizontal";

export default LinkSimpleHorizontal;
