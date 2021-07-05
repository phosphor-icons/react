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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
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
    <path d="M128,20A108,108,0,1,0,236,128,108.12249,108.12249,0,0,0,128,20Zm0,196a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Zm0-160a72,72,0,1,0,72,72A72.08124,72.08124,0,0,0,128,56Zm.00293,103.99512a31.76384,31.76384,0,0,0,25.60254-12.79981,8,8,0,0,1,12.791,9.61182,47.99976,47.99976,0,1,1,0-57.62451,8,8,0,0,1-12.791,9.61181,32.001,32.001,0,1,0-25.60254,51.20069Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
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

const Copyright = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Copyright.displayName = "Copyright";

export default Copyright;
