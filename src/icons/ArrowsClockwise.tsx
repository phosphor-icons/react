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
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
    <path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80.2,80.2,0,0,0-113.2,0,7.9,7.9,0,0,1-11.3,0,8,8,0,0,1,0-11.3,96.2,96.2,0,0,1,135.8,0l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7ZM184.6,184.6a80.2,80.2,0,0,1-113.2,0l-4.3-4.3,18.4-18.4a8,8,0,0,0-5.7-13.6h-48a8,8,0,0,0-8,8v48a8.2,8.2,0,0,0,5,7.4,8,8,0,0,0,3,.6,7.8,7.8,0,0,0,5.7-2.4l18.3-18.3,4.3,4.3a96.1,96.1,0,0,0,135.8,0,8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,184.6,184.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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
