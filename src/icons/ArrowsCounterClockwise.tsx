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
      d="M190.2254,65.7746a88,88,0,0,0-124.4508,0L31.83348,99.71573"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="176.167 156.284 224.167 156.284 224.167 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.7746,190.2254a88,88,0,0,0,124.4508,0l33.94112-33.94113"
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
      d="M190.2254,65.7746a88,88,0,0,0-124.4508,0L31.83348,99.71573"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.167 156.284 224.167 156.284 224.167 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,0,0,124.4508,0l33.94112-33.94113"
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
    <path d="M79.833,107.71582h-48a8.00008,8.00008,0,0,1-8-8v-48a8.00009,8.00009,0,0,1,13.65722-5.65674L55.833,64.40186l4.28418-4.28418a96.10959,96.10959,0,0,1,135.76562,0,8.00018,8.00018,0,1,1-11.31445,11.31347,80.09125,80.09125,0,0,0-113.13672,0L67.147,75.71582,85.49023,94.05908A8.00037,8.00037,0,0,1,79.833,107.71582Zm144.334,40.56836h-48a8.00037,8.00037,0,0,0-5.65722,13.65674L188.853,180.28418l-4.28467,4.28467a80.09125,80.09125,0,0,1-113.13672,0,8.00018,8.00018,0,0,0-11.31445,11.31347,96.11017,96.11017,0,0,0,135.76562,0l4.28418-4.28418,18.34278,18.34278a8.00009,8.00009,0,0,0,13.65722-5.65674v-48A8.00008,8.00008,0,0,0,224.167,148.28418Z" />
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
      d="M190.2254,65.7746a88,88,0,0,0-124.4508,0L31.83348,99.71573"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="176.167 156.284 224.167 156.284 224.167 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.7746,190.2254a88,88,0,0,0,124.4508,0l33.94112-33.94113"
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
      d="M190.2254,65.7746a88,88,0,0,0-124.4508,0L31.83348,99.71573"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="176.167 156.284 224.167 156.284 224.167 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.7746,190.2254a88,88,0,0,0,124.4508,0l33.94112-33.94113"
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
      d="M190.2254,65.7746a88,88,0,0,0-124.4508,0L31.83348,99.71573"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.167 156.284 224.167 156.284 224.167 204.284"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,0,0,124.4508,0l33.94112-33.94113"
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

const ArrowsCounterClockwise = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowsCounterClockwise.displayName = "ArrowsCounterClockwise";

export default ArrowsCounterClockwise;
