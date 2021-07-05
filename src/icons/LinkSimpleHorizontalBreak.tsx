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
      d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,175.99609h40a48,48,0,0,0,0-96H152"
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

pathsByWeight.set("fill", () => (
  <>
    <g>
      <path d="M103.99316,167.99609h-40a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16h-40a56,56,0,0,0,0,112h40a8,8,0,1,0,0-16Z" />
      <path d="M192,71.99609H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,175.99609h40a48,48,0,0,0,0-96H152"
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
      d="M103.99316,175.99609h-40a48,48,0,0,1,0-96h40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,175.99609h40a48,48,0,0,0,0-96H152"
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

const LinkSimpleHorizontalBreak = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

LinkSimpleHorizontalBreak.displayName = "LinkSimpleHorizontalBreak";

export default LinkSimpleHorizontalBreak;
