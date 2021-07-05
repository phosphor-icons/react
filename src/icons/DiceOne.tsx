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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DiceOne = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DiceOne.displayName = "DiceOne";

export default DiceOne;
