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
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      opacity="0.2"
    />
    <path
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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
    <path d="M231.86133,80.11621A24.01156,24.01156,0,0,0,213.86914,72h-53.875V56a40.04552,40.04552,0,0,0-40-40,7.99869,7.99869,0,0,0-7.15527,4.42236L75.0498,96H31.99414a16.01833,16.01833,0,0,0-16,16v88a16.01833,16.01833,0,0,0,16,16h169.875a24.03945,24.03945,0,0,0,23.81543-21.02344l12-96A24.01444,24.01444,0,0,0,231.86133,80.11621ZM31.99414,112h40v88h-40Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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
      d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414"
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

const ThumbsUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ThumbsUp.displayName = "ThumbsUp";

export default ThumbsUp;
