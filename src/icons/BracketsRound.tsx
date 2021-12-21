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
      d="M72,40S32,64,32,128s40,88,40,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M184,40s40,24,40,88-40,88-40,88"
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
      d="M72,40S32,64,32,128s40,88,40,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,40s40,24,40,88-40,88-40,88"
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
    <path d="M40,128c0,58.3,34.7,80.3,36.2,81.2A8,8,0,0,1,72,224a8.7,8.7,0,0,1-4.1-1.1C66.1,221.8,24,195.8,24,128S66.1,34.2,67.9,33.1a8.1,8.1,0,0,1,11,2.8,8,8,0,0,1-2.8,10.9C74.5,47.8,40,69.8,40,128ZM188.1,33.1a8,8,0,0,0-8.3,13.7c1.5.9,36.2,22.9,36.2,81.2s-34.7,80.3-36.1,81.1A8,8,0,0,0,184,224a8.7,8.7,0,0,0,4.1-1.1c1.8-1.1,43.9-27.1,43.9-94.9S189.9,34.2,188.1,33.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M72,40S32,64,32,128s40,88,40,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,40s40,24,40,88-40,88-40,88"
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
      d="M72,40S32,64,32,128s40,88,40,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,40s40,24,40,88-40,88-40,88"
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
      d="M72,40S32,64,32,128s40,88,40,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,40s40,24,40,88-40,88-40,88"
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

const BracketsRound = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BracketsRound.displayName = "BracketsRound";

export default BracketsRound;
