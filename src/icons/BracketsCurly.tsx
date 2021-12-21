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
      d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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
      d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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
    <path d="M43.2,128a30.4,30.4,0,0,1,8,10.3c4.8,9.9,4.8,22,4.8,33.7,0,24.3,1,36,24,36a8,8,0,0,1,0,16c-17.5,0-29.3-6.1-35.2-18.3C40,195.8,40,183.7,40,172c0-24.3-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.7,24-36,0-11.7,0-23.8,4.8-33.7C50.7,38.1,62.5,32,80,32a8,8,0,0,1,0,16C57,48,56,59.7,56,84c0,11.7,0,23.8-4.8,33.7A30.4,30.4,0,0,1,43.2,128ZM240,120c-23,0-24-11.7-24-36,0-11.7,0-23.8-4.8-33.7C205.3,38.1,193.5,32,176,32a8,8,0,0,0,0,16c23,0,24,11.7,24,36,0,11.7,0,23.8,4.8,33.7a30.4,30.4,0,0,0,8,10.3,30.4,30.4,0,0,0-8,10.3c-4.8,9.9-4.8,22-4.8,33.7,0,24.3-1,36-24,36a8,8,0,0,0,0,16c17.5,0,29.3-6.1,35.2-18.3,4.8-9.9,4.8-22,4.8-33.7,0-24.3,1-36,24-36a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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
      d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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
      d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
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

const BracketsCurly = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BracketsCurly.displayName = "BracketsCurly";

export default BracketsCurly;
