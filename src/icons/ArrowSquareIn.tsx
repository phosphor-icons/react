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
    <polyline
      points="112 204 111.992 144.008 52 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="39.9714"
      y1="216.0286"
      x2="111.9714"
      y2="144.0286"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
    <rect x="64" y="40" width="152" height="152" rx="8" opacity="0.2" />
    <polyline
      points="112 204 111.992 144.008 52 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="39.9714"
      y1="216.0286"
      x2="111.9714"
      y2="144.0286"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
    <path d="M119.99219,144.00684,120,203.999a8.00018,8.00018,0,0,1-13.65674,5.65821l-24.3435-24.34375L45.62793,221.68555a8.00018,8.00018,0,0,1-11.31348-11.31446L70.68579,174,46.34326,149.65723A8.00038,8.00038,0,0,1,52,136h.001l59.99218.00781A8,8,0,0,1,119.99219,144.00684ZM208,32H72A16.01833,16.01833,0,0,0,56,48V96a8,8,0,0,0,16,0V48H208V184H160a8,8,0,0,0,0,16h48a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="112 204 111.992 144.008 52 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="39.9714"
      y1="216.0286"
      x2="111.9714"
      y2="144.0286"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
    <polyline
      points="112 204 111.992 144.008 52 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="39.9714"
      y1="216.0286"
      x2="111.9714"
      y2="144.0286"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
    <polyline
      points="112 204 111.992 144.008 52 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="39.9714"
      y1="216.0286"
      x2="111.9714"
      y2="144.0286"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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

const ArrowSquareIn = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowSquareIn.displayName = "ArrowSquareIn";

export default ArrowSquareIn;
