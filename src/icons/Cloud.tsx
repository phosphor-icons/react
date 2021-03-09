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
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
      opacity="0.2"
    />
    <path
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
    <path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.464,87.464,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43561,103.43561,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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

const Cloud = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cloud.displayName = "Cloud";

export default Cloud;
