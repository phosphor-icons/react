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
      points="120 32 24 128 120 224 120 176 176 176 176 80 120 80 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="216"
      y1="176"
      x2="216"
      y2="80"
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
      points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
      opacity="0.2"
    />
    <polygon
      points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="176"
      x2="216"
      y2="80"
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
    <path d="M114.34277,229.65723l-96-96a8.003,8.003,0,0,1,0-11.31446l96-96A8.00065,8.00065,0,0,1,128,32V72h56a8.00039,8.00039,0,0,1,8,8v96a8.00039,8.00039,0,0,1-8,8H128v40a8.00066,8.00066,0,0,1-13.65723,5.65723ZM216,184a8.00039,8.00039,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00039,8.00039,0,0,0,216,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="216"
      y1="176"
      x2="216"
      y2="80"
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
      points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="216"
      y1="176"
      x2="216"
      y2="80"
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
      points="120 32 24 128 120 224 120 176 184 176 184 80 120 80 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="176"
      x2="216"
      y2="80"
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

const ArrowFatLineLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowFatLineLeft.displayName = "ArrowFatLineLeft";

export default ArrowFatLineLeft;
