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
    <line
      x1="31.99627"
      y1="128"
      x2="175.99627"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="103.996 56 175.996 128 103.996 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="216"
      y1="40"
      x2="216"
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
    <line
      x1="31.99627"
      y1="128"
      x2="183.99627"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="111.996 56 183.996 128 111.996 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="40"
      x2="216"
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
    <path d="M189.65332,122.34326a8,8,0,0,1,0,11.31348l-72,72A8.0001,8.0001,0,0,1,103.99609,200V136h-72a8,8,0,0,1,0-16h72V56a8.0001,8.0001,0,0,1,13.65723-5.65674ZM216,32a8.00008,8.00008,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8.00008,8.00008,0,0,0,216,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="31.99627"
      y1="128"
      x2="183.99627"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="111.996 56 183.996 128 111.996 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="216"
      y1="40"
      x2="216"
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
    <line
      x1="31.99627"
      y1="128"
      x2="183.99627"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="111.996 56 183.996 128 111.996 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="216"
      y1="40"
      x2="216"
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
    <line
      x1="31.99627"
      y1="128"
      x2="183.99627"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="111.996 56 183.996 128 111.996 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="40"
      x2="216"
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

const ArrowLineRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowLineRight.displayName = "ArrowLineRight";

export default ArrowLineRight;
