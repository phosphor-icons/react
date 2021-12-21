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
      points="79.8 99.7 31.8 99.7 31.8 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
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
      points="79.8 99.7 31.8 99.7 31.8 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
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
    <path d="M195.9,195.9a96.1,96.1,0,0,1-135.8,0,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0,80,80,0,1,0,0-113.2l-4.3,4.3L85.5,94.1a8,8,0,0,1-5.7,13.6h-48a8,8,0,0,1-8-8v-48a8.2,8.2,0,0,1,5-7.4,8,8,0,0,1,8.7,1.8L55.8,64.4l4.3-4.3A96,96,0,0,1,195.9,195.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="79.8 99.7 31.8 99.7 31.8 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
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
      points="79.8 99.7 31.8 99.7 31.8 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
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
      points="79.8 99.7 31.8 99.7 31.8 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
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
