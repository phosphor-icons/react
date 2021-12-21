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
      d="M208,104c0,44.2-35.8,92-80,92s-80-47.8-80-92a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="144.7 193.7 160 232 96 232 111.3 193.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M140,70a36.8,36.8,0,0,1,22,22"
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
      d="M208,104a80,80,0,0,0-160,0c0,40.5,30.1,87.5,69.2,95h0L104,232h48l-13.2-33h0C177.9,191.5,208,144.5,208,104Z"
      opacity="0.2"
    />
    <path
      d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="138.8 199 152 232 104 232 117.2 199"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
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
    <path d="M128,16a88.1,88.1,0,0,0-88,88c0,23.4,9.4,49.4,25.1,69.5,11.9,15.2,26.2,25.7,41.3,30.9L96.6,229a8,8,0,0,0,.8,7.5A7.9,7.9,0,0,0,104,240h48a7.9,7.9,0,0,0,6.6-3.5,8,8,0,0,0,.8-7.5l-9.8-24.6c15.1-5.2,29.4-15.7,41.3-30.9C206.6,153.4,216,127.4,216,104A88.1,88.1,0,0,0,128,16Zm48.7,87.9h-1.4a8.1,8.1,0,0,1-7.9-6.7,39.7,39.7,0,0,0-32.7-32.7,8.1,8.1,0,0,1-6.6-9.3,7.9,7.9,0,0,1,9.2-6.5,55.9,55.9,0,0,1,45.9,45.9A7.9,7.9,0,0,1,176.7,103.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="138.8 199 152 232 104 232 117.2 199"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
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
      d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="138.8 199 152 232 104 232 117.2 199"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
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
      d="M208,104c0,44.2-35.8,96-80,96s-80-51.8-80-96a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="138.8 199 152 232 104 232 117.2 199"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136,56.7A47.8,47.8,0,0,1,175.3,96"
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

const Balloon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Balloon.displayName = "Balloon";

export default Balloon;
