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
      points="120 80 168 32 216 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
      points="120 80 168 32 216 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
    <path d="M223.39062,83.06152A8,8,0,0,1,216,88H176v80a64,64,0,0,1-128,0V80a8,8,0,0,1,16,0v88a48,48,0,0,0,96,0V88H120a8.00037,8.00037,0,0,1-5.65723-13.65674l48-48a8.00034,8.00034,0,0,1,11.31446,0l48,48A7.99931,7.99931,0,0,1,223.39062,83.06152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="120 80 168 32 216 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
      points="120 80 168 32 216 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
      points="120 80 168 32 216 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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

const ArrowURightUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowURightUp.displayName = "ArrowURightUp";

export default ArrowURightUp;
