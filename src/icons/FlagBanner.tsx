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
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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
      points="40 48 40 48 224 48 176 108 224 168 40 168 40 48"
      opacity="0.2"
    />
    <polyline
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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
    <path d="M230.2,163a8,8,0,0,1-6.2,13H48v40a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8H224a8,8,0,0,1,6.2,13l-44,55Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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

const FlagBanner = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FlagBanner.displayName = "FlagBanner";

export default FlagBanner;
