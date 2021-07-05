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
    <path
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
      opacity="0.2"
    />
    <path
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
    <path d="M237.68457,157.02344l-12-96.00049A24.03944,24.03944,0,0,0,201.86914,40H31.99414a16.01833,16.01833,0,0,0-16,16v88a16.01833,16.01833,0,0,0,16,16H75.0498l37.78907,75.57764A7.99869,7.99869,0,0,0,119.99414,240a40.04552,40.04552,0,0,0,40-40V184h53.875a24.00051,24.00051,0,0,0,23.81543-26.97656ZM71.99414,144h-40V56h40Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56A8,8,0,0,1,31.99414,48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56A8,8,0,0,1,31.99414,48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
      d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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

const ThumbsDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ThumbsDown.displayName = "ThumbsDown";

export default ThumbsDown;
