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
      d="M124,136a8,8,0,0,1-8-8,16,16,0,0,1,16-16,25.9,25.9,0,0,1,26,26,36,36,0,0,1-36,36,46,46,0,0,1-46-46,56,56,0,0,1,56-56,65.9,65.9,0,0,1,66,66,76,76,0,0,1-76,76,86,86,0,0,1-86-86,96,96,0,0,1,96-96A106.1,106.1,0,0,1,238,138"
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
      d="M136,136a8,8,0,0,1,8,8,16,16,0,0,1-16,16,23.9,23.9,0,0,1-24-24,32,32,0,0,1,32-32,40,40,0,0,1,40,40,48,48,0,0,1-48,48,56,56,0,0,1-56-56,64.1,64.1,0,0,1,64-64,72,72,0,0,1,72,72,80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144"
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
    <path d="M248,144a8,8,0,0,1-16,0,96.2,96.2,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.1,80.1,0,0,0,80,80,72.1,72.1,0,0,0,72-72,64.1,64.1,0,0,0-64-64,56,56,0,0,0-56,56,48,48,0,0,0,48,48,40,40,0,0,0,40-40,32.1,32.1,0,0,0-32-32,24.1,24.1,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24.1,24.1,0,0,1-24,24,32.1,32.1,0,0,1-32-32,40,40,0,0,1,40-40,48,48,0,0,1,48,48,56,56,0,0,1-56,56,64.1,64.1,0,0,1-64-64,72.1,72.1,0,0,1,72-72,80.1,80.1,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.2,96.2,0,0,1-96-96A104.2,104.2,0,0,1,136,32,112.1,112.1,0,0,1,248,144Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M136,136a8,8,0,0,1,8,8,16,16,0,0,1-16,16,23.9,23.9,0,0,1-24-24,32,32,0,0,1,32-32,40,40,0,0,1,40,40,48,48,0,0,1-48,48,56,56,0,0,1-56-56,64.1,64.1,0,0,1,64-64,72,72,0,0,1,72,72,80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144"
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
      d="M136,136a8,8,0,0,1,8,8,16,16,0,0,1-16,16,23.9,23.9,0,0,1-24-24,32,32,0,0,1,32-32,40,40,0,0,1,40,40,48,48,0,0,1-48,48,56,56,0,0,1-56-56,64.1,64.1,0,0,1,64-64,72,72,0,0,1,72,72,80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144"
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
      d="M136,136a8,8,0,0,1,8,8,16,16,0,0,1-16,16,23.9,23.9,0,0,1-24-24,32,32,0,0,1,32-32,40,40,0,0,1,40,40,48,48,0,0,1-48,48,56,56,0,0,1-56-56,64.1,64.1,0,0,1,64-64,72,72,0,0,1,72,72,80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144"
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

const Spiral = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Spiral.displayName = "Spiral";

export default Spiral;
