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
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
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
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
      opacity="0.2"
    />
    <polygon
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
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
    <path d="M215.8,118.2a8,8,0,0,0-5-5.7L153.2,90.9l14.6-73.3a8.1,8.1,0,0,0-4.1-8.7,7.9,7.9,0,0,0-9.5,1.6l-112,120a7.9,7.9,0,0,0-2,7.3,8.2,8.2,0,0,0,5,5.7l57.6,21.6L88.2,238.4a8.1,8.1,0,0,0,4.1,8.7,8.4,8.4,0,0,0,3.7.9,7.9,7.9,0,0,0,5.8-2.5l112-120A7.9,7.9,0,0,0,215.8,118.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
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
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
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
      points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
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

const Lightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Lightning.displayName = "Lightning";

export default Lightning;
