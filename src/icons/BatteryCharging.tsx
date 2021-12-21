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
    <rect
      x="46"
      y="38"
      width="144"
      height="180"
      rx="16"
      transform="translate(246 10) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="244"
      y1="96"
      x2="244"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="118 168 134 128 102 128 118 88"
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
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      opacity="0.2"
    />
    <line
      x1="248"
      y1="96"
      x2="248"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="124 168 140 128 108 128 124 88"
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
    <path d="M248,88a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z" />
    <path d="M200,48H48A24.1,24.1,0,0,0,24,72V184a24.1,24.1,0,0,0,24,24H200a24.1,24.1,0,0,0,24-24V72A24.1,24.1,0,0,0,200,48Zm-52.6,83-16,40a7.9,7.9,0,0,1-7.4,5,8,8,0,0,1-3-.6,7.9,7.9,0,0,1-4.4-10.4l11.6-29H108a7.9,7.9,0,0,1-6.6-3.5,8,8,0,0,1-.8-7.5l16-40a8,8,0,1,1,14.8,6l-11.6,29H140a7.9,7.9,0,0,1,6.6,3.5A8,8,0,0,1,147.4,131Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="248"
      y1="96"
      x2="248"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="124 168 140 128 108 128 124 88"
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
      x1="248"
      y1="96"
      x2="248"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="124 168 140 128 108 128 124 88"
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
      x1="248"
      y1="96"
      x2="248"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="124 168 140 128 108 128 124 88"
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

const BatteryCharging = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BatteryCharging.displayName = "BatteryCharging";

export default BatteryCharging;
