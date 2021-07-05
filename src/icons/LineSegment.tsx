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
      cx="64"
      cy="192"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="192"
      cy="64"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="175.02944"
      y1="80.97056"
      x2="80.97056"
      y2="175.02944"
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
    <circle cx="64" cy="192" r="24" opacity="0.2" />
    <circle cx="192" cy="64" r="24" opacity="0.2" />
    <circle
      cx="64"
      cy="192"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="192"
      cy="64"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.02944"
      y1="80.97056"
      x2="80.97056"
      y2="175.02944"
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
    <path d="M214.62793,86.62695a32.0716,32.0716,0,0,1-38.88245,4.94141L91.56836,175.74561a32.00172,32.00172,0,1,1-50.19629-6.37256l.00049-.001a32.05731,32.05731,0,0,1,38.88208-4.94043l84.177-84.17725a32.00172,32.00172,0,1,1,50.19629,6.37256Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="64"
      cy="192"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="192"
      cy="64"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="175.02944"
      y1="80.97056"
      x2="80.97056"
      y2="175.02944"
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
      cx="64"
      cy="192"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="192"
      cy="64"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="175.02944"
      y1="80.97056"
      x2="80.97056"
      y2="175.02944"
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
      cx="64"
      cy="192"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="192"
      cy="64"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.02944"
      y1="80.97056"
      x2="80.97056"
      y2="175.02944"
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

const LineSegment = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LineSegment.displayName = "LineSegment";

export default LineSegment;
