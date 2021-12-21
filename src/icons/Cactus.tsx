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
    <line
      x1="40"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44Z"
      opacity="0.2"
    />
    <line
      x1="40"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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
    <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V140H84A68.1,68.1,0,0,1,16,72a28,28,0,0,1,56,0A12,12,0,0,0,84,84h4V56a40,40,0,0,1,80,0v68h4a12,12,0,0,0,12-12,28,28,0,0,1,56,0,68.1,68.1,0,0,1-68,68h-4v28h48A8,8,0,0,1,224,216Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="40"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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
    <line
      x1="40"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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
    <line
      x1="40"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
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

const Cactus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cactus.displayName = "Cactus";

export default Cactus;
