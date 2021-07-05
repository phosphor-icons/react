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
    <path d="M40,128c0,58.28906,34.6748,80.25488,36.15088,81.16113a8.00025,8.00025,0,0,1-8.26709,13.69922C66.09229,221.78516,24,195.751,24,128S66.09229,34.21484,67.88379,33.13965a8,8,0,0,1,8.2583,13.7041C74.544,47.8291,40,69.82129,40,128ZM188.11621,33.13965a8.00032,8.00032,0,0,0-8.26709,13.69922C181.3252,47.74512,216,69.71094,216,128s-34.6748,80.25488-36.11621,81.13965a8.00047,8.00047,0,1,0,8.23242,13.7207C189.90771,221.78516,232,195.751,232,128S189.90771,34.21484,188.11621,33.13965Z" />
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
