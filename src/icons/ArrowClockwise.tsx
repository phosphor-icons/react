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
      points="176.167 99.716 224.167 99.716 224.167 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
      points="176.167 99.716 224.167 99.716 224.167 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
    <path d="M232.167,51.71582v48a8.00008,8.00008,0,0,1-8,8h-48a8.00037,8.00037,0,0,1-5.65722-13.65674L188.853,75.71582l-4.28467-4.28467a80.00009,80.00009,0,1,0,0,113.1377,8.00018,8.00018,0,1,1,11.31445,11.31347,96.00044,96.00044,0,1,1,0-135.76464l4.28418,4.28418,18.34278-18.34278A8.00009,8.00009,0,0,1,232.167,51.71582Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="176.167 99.716 224.167 99.716 224.167 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
      points="176.167 99.716 224.167 99.716 224.167 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
      points="176.167 99.716 224.167 99.716 224.167 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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

const ArrowClockwise = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowClockwise.displayName = "ArrowClockwise";

export default ArrowClockwise;
