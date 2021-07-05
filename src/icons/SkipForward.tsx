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
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
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
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
      opacity="0.2"
    />
    <path
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
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
    <path d="M208,40V216a8,8,0,0,1-16,0V142.26416l-119.65625,73.124A16.00029,16.00029,0,0,1,48,201.73535V54.26465A16.0002,16.0002,0,0,1,72.34277,40.61133L192,113.73535V40a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
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
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
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
      d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
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
