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
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,100H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
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
      d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72Z"
      opacity="0.2"
    />
    <rect
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="88"
      x2="224"
      y2="88"
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
    <path d="M208,48H48A24.1,24.1,0,0,0,24,72V184a24.1,24.1,0,0,0,24,24H208a24.1,24.1,0,0,0,24-24V72A24.1,24.1,0,0,0,208,48Zm-56.5,76.8a24,24,0,0,1-47,0A16.1,16.1,0,0,0,88.8,112H40V96H216v16H167.2A16.1,16.1,0,0,0,151.5,124.8ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="88"
      x2="224"
      y2="88"
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
    <rect
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="88"
      x2="224"
      y2="88"
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
    <rect
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="88"
      x2="224"
      y2="88"
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

const Cardholder = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cardholder.displayName = "Cardholder";

export default Cardholder;
