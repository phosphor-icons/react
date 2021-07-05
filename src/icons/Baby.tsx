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
    <circle cx="92" cy="128" r="16" />
    <circle cx="164" cy="128" r="16" />
    <path
      d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16.00421,16.00421,0,0,0,24.00155,13.85859"
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
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <path
      d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <path d="M131.92139,24.0813C120.32031,40.37354,120.002,55.87939,120,56.044A8.00006,8.00006,0,0,0,136,56a8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.72876.125-14.4248,8.57715-30.85474a104.06072,104.06072,0,1,0,19.34424-1.064ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm78.9668,46.665a56.03047,56.03047,0,0,1-61.93213.001,7.99982,7.99982,0,1,1,8.85742-13.32422,40.03347,40.03347,0,0,0,44.21777-.001A7.99969,7.99969,0,1,1,158.9668,174.665ZM164,140a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
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
    <circle cx="92" cy="128" r="10" />
    <circle cx="164" cy="128" r="10" />
    <path
      d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <circle cx="92" cy="128" r="8" />
    <circle cx="164" cy="128" r="8" />
    <path
      d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <path
      d="M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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

const Baby = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Baby.displayName = "Baby";

export default Baby;
