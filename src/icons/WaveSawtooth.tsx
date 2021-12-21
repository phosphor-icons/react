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
      points="24 128 128 64 128 192 232 128"
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
    <polygon points="24 128 128 64 128 192 232 128 24 128" opacity="0.2" />
    <polyline
      points="24 128 128 64 128 192 232 128"
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
    <path d="M128,200a7.8,7.8,0,0,1-3.9-1,8.1,8.1,0,0,1-4.1-7V78.3L28.2,134.8a8,8,0,0,1-8.4-13.6l104-64A8,8,0,0,1,136,64V177.7l91.8-56.5a8,8,0,0,1,8.4,13.6l-104,64A7.9,7.9,0,0,1,128,200Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="24 128 128 64 128 192 232 128"
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
      points="24 128 128 64 128 192 232 128"
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
      points="24 128 128 64 128 192 232 128"
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

const WaveSawtooth = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WaveSawtooth.displayName = "WaveSawtooth";

export default WaveSawtooth;
