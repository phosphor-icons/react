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
      points="136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="176"
      x2="40"
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
      points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32"
      opacity="0.2"
    />
    <polygon
      points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="176"
      x2="40"
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
    <path d="M132.93848,231.39062A8,8,0,0,1,128,224V184H72a8.00039,8.00039,0,0,1-8-8V80a8.00039,8.00039,0,0,1,8-8h56V32a8.00065,8.00065,0,0,1,13.65723-5.65723l96,96a8.003,8.003,0,0,1,0,11.31446l-96,96A8.002,8.002,0,0,1,132.93848,231.39062ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="176"
      x2="40"
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
      points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="176"
      x2="40"
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
      points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="176"
      x2="40"
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

const ArrowFatLineRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowFatLineRight.displayName = "ArrowFatLineRight";

export default ArrowFatLineRight;
