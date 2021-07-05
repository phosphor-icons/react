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
      points="168 48 208 48 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208 168 208 208 168 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="48"
      x2="208"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="156.28419"
      y1="99.71581"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="208"
      x2="99.7158"
      y2="156.2842"
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
      points="168 48 208 48 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 168 208 208 168 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="48"
      x2="208"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="150.62718"
      y1="105.37282"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="208"
      x2="105.37282"
      y2="150.62718"
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
    <path d="M216,48V88a8.00018,8.00018,0,0,1-13.65723,5.65674L188,79.314l-31.71582,31.71583a8.00035,8.00035,0,0,1-11.31445-11.314L176.68579,68l-14.343-14.34326A8.00038,8.00038,0,0,1,168,40h40A8.00008,8.00008,0,0,1,216,48Zm-4.93848,112.60889a8.00113,8.00113,0,0,0-8.71875,1.73437L188,176.686,53.65723,42.34326A8.00018,8.00018,0,1,0,42.34277,53.65674L176.686,188l-14.34327,14.34326A8.00038,8.00038,0,0,0,168,216h40a8.00008,8.00008,0,0,0,8-8V168A8.00015,8.00015,0,0,0,211.06152,160.60889ZM99.71582,144.97021l-57.373,57.373a8.00018,8.00018,0,0,0,11.31446,11.31348l57.373-57.37256a8.00035,8.00035,0,0,0-11.31445-11.314Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="168 48 208 48 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 168 208 208 168 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="48"
      x2="208"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="150.62718"
      y1="105.37282"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="208"
      x2="105.37282"
      y2="150.62718"
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
      points="168 48 208 48 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 168 208 208 168 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="48"
      x2="208"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="150.62718"
      y1="105.37282"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="208"
      x2="105.37282"
      y2="150.62718"
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
      points="168 48 208 48 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 168 208 208 168 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="48"
      x2="208"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="150.62718"
      y1="105.37282"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="208"
      x2="105.37282"
      y2="150.62718"
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

const ShuffleSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShuffleSimple.displayName = "ShuffleSimple";

export default ShuffleSimple;
