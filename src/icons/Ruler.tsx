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
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      opacity="0.2"
    />
    <rect
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
    <path d="M232,76.68652,179.31348,23.999A16.02162,16.02162,0,0,0,156.68555,24L132,48.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L120.686,60,96,84.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L84.686,96,60,120.686l37.65723,37.65722a8.00018,8.00018,0,0,1-11.31446,11.31348L48.686,132,24.001,156.68555A15.99888,15.99888,0,0,0,24,179.31348L76.68652,232.001A16.02252,16.02252,0,0,0,99.31445,232L232,99.31348a15.9989,15.9989,0,0,0,0-22.627Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
      x="26.17662"
      y="82.74517"
      width="203.64675"
      height="90.50967"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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

const Ruler = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Ruler.displayName = "Ruler";

export default Ruler;
