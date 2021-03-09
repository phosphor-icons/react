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
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32,100H88.80976A7.98836,7.98836,0,0,1,96.64,106.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,100H224"
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
      d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72Z"
      opacity="0.2"
    />
    <rect
      x="32"
      y="56"
      width="192"
      height="144"
      rx="16"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224"
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
    <path d="M208,48H48A24.0275,24.0275,0,0,0,24,72V184a24.0275,24.0275,0,0,0,24,24H208a24.0275,24.0275,0,0,0,24-24V72A24.0275,24.0275,0,0,0,208,48Zm-56.47949,76.80762a24.00866,24.00866,0,0,1-47.041.001A16.03939,16.03939,0,0,0,88.80957,112H40V96H216v16H167.19043A16.0395,16.0395,0,0,0,151.52051,124.80762ZM48,64H208a8.00917,8.00917,0,0,1,8,8v8H40V72A8.00917,8.00917,0,0,1,48,64Z" />
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
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224"
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
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224"
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
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32,120H88.80976A7.98836,7.98836,0,0,1,96.64,126.39917a32.00785,32.00785,0,0,0,62.7201,0A7.98836,7.98836,0,0,1,167.19024,120H224"
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
