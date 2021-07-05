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
      d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
      d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
    <path d="M184,168.00488a63.99178,63.99178,0,0,1-109.24219,45.251,8,8,0,0,1,11.31446-11.313,47.994,47.994,0,1,0,33.93554-81.93408,7.99947,7.99947,0,0,1-6.55469-12.58594L160.626,40H80a8,8,0,0,1,0-16h95.9873A7.99946,7.99946,0,0,1,182.542,36.58594l-48.28125,69.00683A64.055,64.055,0,0,1,184,168.00488Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
      d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
      d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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

const NumberThree = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberThree.displayName = "NumberThree";

export default NumberThree;
