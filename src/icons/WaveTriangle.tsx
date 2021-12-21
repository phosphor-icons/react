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
    <polyline
      points="24 128 76 56 180 200 232 128"
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
    <polyline
      points="24 128 76 56 180 200 232 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon points="24 128 76 56 180 200 232 128 24 128" opacity="0.2" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M180,208a7.9,7.9,0,0,1-6.5-3.3L76,69.7l-45.5,63a8,8,0,1,1-13-9.4l52-72a8.1,8.1,0,0,1,13,0l97.5,135,45.5-63a8,8,0,0,1,13,9.4l-52,72A7.9,7.9,0,0,1,180,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="24 128 76 56 180 200 232 128"
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
    <polyline
      points="24 128 76 56 180 200 232 128"
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
    <polyline
      points="24 128 76 56 180 200 232 128"
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

const WaveTriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WaveTriangle.displayName = "WaveTriangle";

export default WaveTriangle;
