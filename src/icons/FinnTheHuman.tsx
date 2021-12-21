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
      x="56"
      y="100"
      width="144"
      height="80"
      rx="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M20,64a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v88a64.1,64.1,0,0,1-64,64H84a64.1,64.1,0,0,1-64-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="96" cy="140" r="16" />
    <circle cx="160" cy="140" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M208,40a23.9,23.9,0,0,0-24,24H72a24,24,0,0,0-48,0v80a64.1,64.1,0,0,0,64,64h80a64.1,64.1,0,0,0,64-64V64A23.9,23.9,0,0,0,208,40Zm-8,104a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32v-8a32,32,0,0,1,32-32h80a32,32,0,0,1,32,32Z"
      opacity="0.2"
    />
    <rect
      x="56"
      y="104"
      width="144"
      height="72"
      rx="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="140" r="12" />
    <circle cx="164" cy="140" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M176,140a12,12,0,1,1-12-12A12,12,0,0,1,176,140ZM92,128a12,12,0,1,0,12,12A12,12,0,0,0,92,128ZM240,64v80a72.1,72.1,0,0,1-72,72H88a72.1,72.1,0,0,1-72-72V64a32,32,0,0,1,63-8h98a32,32,0,0,1,63,8Zm-40,72a32,32,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32,32,0,0,0,32,32h80a32,32,0,0,0,32-32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="56"
      y="104"
      width="144"
      height="72"
      rx="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="140" r="10" />
    <circle cx="164" cy="140" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="56"
      y="104"
      width="144"
      height="72"
      rx="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="140" r="8" />
    <circle cx="164" cy="140" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="56"
      y="104"
      width="144"
      height="72"
      rx="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64.1,64.1,0,0,1-64,64H88a64.1,64.1,0,0,1-64-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="140" r="12" />
    <circle cx="164" cy="140" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FinnTheHuman = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FinnTheHuman.displayName = "FinnTheHuman";

export default FinnTheHuman;
