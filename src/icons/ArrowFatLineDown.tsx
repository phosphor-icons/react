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
      points="32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
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
      points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
      opacity="0.2"
    />
    <polygon
      points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
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
    <path d="M229.65723,141.65723l-96,96a8.003,8.003,0,0,1-11.31446,0l-96-96A8.00065,8.00065,0,0,1,32,128H72V72a8.00039,8.00039,0,0,1,8-8h96a8.00039,8.00039,0,0,1,8,8v56h40a8.00066,8.00066,0,0,1,5.65723,13.65723ZM184,40a8.00039,8.00039,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00039,8.00039,0,0,0,184,40Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
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
      points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
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
      points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
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

const ArrowFatLineDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowFatLineDown.displayName = "ArrowFatLineDown";

export default ArrowFatLineDown;
