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
    <line
      x1="116"
      y1="92"
      x2="116"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="116" cy="160" r="16" />
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
      x1="124"
      y1="88"
      x2="124"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
    <circle cx="124" cy="164" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,72V184a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V72A24.1,24.1,0,0,1,48,48H200A24.1,24.1,0,0,1,224,72ZM116,128a8,8,0,0,0,16,0V88a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12,12,0,0,0,136,164Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="124"
      y1="88"
      x2="124"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
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
    <circle cx="124" cy="164" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="124"
      y1="88"
      x2="124"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
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
    <circle cx="124" cy="164" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="124"
      y1="88"
      x2="124"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
    <circle cx="124" cy="164" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BatteryWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BatteryWarning.displayName = "BatteryWarning";

export default BatteryWarning;
