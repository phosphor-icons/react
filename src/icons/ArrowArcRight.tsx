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
      points="163.882 148.118 227.882 148.118 227.882 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
    <polyline
      points="163.882 148.118 227.882 148.118 227.882 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
    <path d="M235.88184,84.11816v64a8.0004,8.0004,0,0,1-8,8h-64a8.00064,8.00064,0,0,1-5.65723-13.65722l26.08032-26.08008A87.99487,87.99487,0,0,0,40,184a8,8,0,0,1-16,0,104.00481,104.00481,0,0,1,171.667-78.98145l26.55762-26.55761a8.00065,8.00065,0,0,1,13.65723,5.65722Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="163.882 148.118 227.882 148.118 227.882 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
      points="163.882 148.118 227.882 148.118 227.882 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
      points="163.882 148.118 227.882 148.118 227.882 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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

const ArrowArcRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowArcRight.displayName = "ArrowArcRight";

export default ArrowArcRight;
