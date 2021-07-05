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
      x="40"
      y="76"
      width="176"
      height="104"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="220.00244"
      y1="100"
      x2="220.00244"
      y2="156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="36"
      y1="100"
      x2="36"
      y2="156"
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
    <rect
      x="40"
      y="80"
      width="176"
      height="96"
      rx="16"
      transform="translate(256) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="40"
      y="80"
      width="176"
      height="96"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="208.00244"
      y1="88"
      x2="208.00244"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240.00244"
      y1="104"
      x2="240.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="88"
      x2="48"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="104"
      x2="16"
      y2="152"
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
    <g>
      <rect x="71.99951" y="32" width="112" height="192" rx="24" />
      <path d="M208.00244,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,208.00244,80Z" />
      <path d="M240.00244,96a8.00039,8.00039,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8.00039,8.00039,0,0,0,240.00244,96Z" />
      <path d="M47.99951,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,47.99951,80Z" />
      <path d="M15.99951,96a8.00039,8.00039,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8.00039,8.00039,0,0,0,15.99951,96Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="80"
      width="176"
      height="96"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="208.00244"
      y1="88"
      x2="208.00244"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="240.00244"
      y1="104"
      x2="240.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="88"
      x2="48"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="16"
      y1="104"
      x2="16"
      y2="152"
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
      x="40"
      y="80"
      width="176"
      height="96"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="208.00244"
      y1="88"
      x2="208.00244"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="240.00244"
      y1="104"
      x2="240.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="88"
      x2="48"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="16"
      y1="104"
      x2="16"
      y2="152"
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
      x="40"
      y="80"
      width="176"
      height="96"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="208.00244"
      y1="88"
      x2="208.00244"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240.00244"
      y1="104"
      x2="240.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="88"
      x2="48"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="104"
      x2="16"
      y2="152"
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

const Vibrate = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Vibrate.displayName = "Vibrate";

export default Vibrate;
