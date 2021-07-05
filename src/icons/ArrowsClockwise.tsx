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
      d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="79.833 156.284 31.833 156.284 31.833 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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
      d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79.833 156.284 31.833 156.284 31.833 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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
    <path d="M232.167,51.71582v48a8.00039,8.00039,0,0,1-8,8h-48a8.00065,8.00065,0,0,1-5.65722-13.65723l18.34277-18.34277-4.28418-4.28418a80.08769,80.08769,0,0,0-113.13672,0A8.00052,8.00052,0,0,1,60.11719,60.11719a96.11137,96.11137,0,0,1,135.76562,0l4.28418,4.28418,18.34278-18.34278A8.00065,8.00065,0,0,1,232.167,51.71582ZM184.56836,184.56836a80.08769,80.08769,0,0,1-113.13672,0l-4.28418-4.28418,18.34277-18.34277A8.00065,8.00065,0,0,0,79.833,148.28418h-48a8.00039,8.00039,0,0,0-8,8v48a8.00052,8.00052,0,0,0,13.65722,5.65723L55.833,191.59863l4.28418,4.28418a96.11136,96.11136,0,0,0,135.76562,0,8.00052,8.00052,0,0,0-11.31445-11.31445Z" />
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
      d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="79.833 156.284 31.833 156.284 31.833 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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
      d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="79.833 156.284 31.833 156.284 31.833 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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
      d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79.833 156.284 31.833 156.284 31.833 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427"
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

const ArrowsClockwise = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowsClockwise.displayName = "ArrowsClockwise";

export default ArrowsClockwise;
