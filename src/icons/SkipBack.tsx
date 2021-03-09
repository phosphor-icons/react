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
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="56"
      y1="40"
      x2="56"
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
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      opacity="0.2"
    />
    <path
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="40"
      x2="56"
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
    <path d="M56,32a8.00008,8.00008,0,0,1,8,8v73.73535l119.65723-73.124A16.0002,16.0002,0,0,1,208,54.26465v147.4707a16.004,16.004,0,0,1-24.34375,13.65283L64,142.26416V216a8,8,0,0,1-16,0V40A8.00008,8.00008,0,0,1,56,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="56"
      y1="40"
      x2="56"
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
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="56"
      y1="40"
      x2="56"
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
      d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="40"
      x2="56"
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

const SkipBack = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SkipBack.displayName = "SkipBack";

export default SkipBack;
