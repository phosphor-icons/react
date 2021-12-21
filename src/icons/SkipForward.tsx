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
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="216"
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
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      opacity="0.2"
    />
    <path
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="216"
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
    <path d="M208,40V216a8,8,0,0,1-16,0V142.3L72.3,215.4a16.2,16.2,0,0,1-8.3,2.3,15.4,15.4,0,0,1-7.8-2,15.9,15.9,0,0,1-8.2-14V54.3A16,16,0,0,1,72.3,40.6L192,113.7V40a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="216"
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
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="216"
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
      d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="216"
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

const SkipForward = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SkipForward.displayName = "SkipForward";

export default SkipForward;
