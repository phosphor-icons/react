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
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <path d="M195.88281,195.88281a96.11136,96.11136,0,0,1-135.76562,0,8.00052,8.00052,0,0,1,11.31445-11.31445,79.99992,79.99992,0,1,0,0-113.13721L67.147,75.71582,85.49023,94.05908A8.00037,8.00037,0,0,1,79.833,107.71582h-48a8.00008,8.00008,0,0,1-8-8v-48a8.00009,8.00009,0,0,1,13.65722-5.65674L55.833,64.40186l4.28418-4.28418A96.00062,96.00062,0,0,1,195.88281,195.88281Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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

const ArrowCounterClockwise = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowCounterClockwise.displayName = "ArrowCounterClockwise";

export default ArrowCounterClockwise;
