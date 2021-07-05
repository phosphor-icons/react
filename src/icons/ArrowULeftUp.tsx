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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
    <path d="M208,80v88a64,64,0,0,1-128,0V88H40a8.00037,8.00037,0,0,1-5.65723-13.65674l48-48a8.00122,8.00122,0,0,1,11.31446,0l48,48A8.00038,8.00038,0,0,1,136,88H96v80a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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

const ArrowULeftUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowULeftUp.displayName = "ArrowULeftUp";

export default ArrowULeftUp;
