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
      cx="164"
      cy="52"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M12,200,85.1,75.7a8.1,8.1,0,0,1,13.8,0L172,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="54.4"
      y1="128"
      x2="129.6"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M172,200h67.3l-52.4-88.4a8.1,8.1,0,0,0-13.8,0l-26.6,45"
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
    <circle cx="164" cy="52" r="20" opacity="0.2" />
    <path
      d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168Z"
      opacity="0.2"
    />
    <path d="M50.4,128h75.2L94.9,75.7a8.1,8.1,0,0,0-13.8,0Z" opacity="0.2" />
    <circle
      cx="164"
      cy="52"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="50.4"
      y1="128"
      x2="125.6"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
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
    <path d="M140,52a24,24,0,1,1,24,24A24.1,24.1,0,0,1,140,52ZM255,204a8.1,8.1,0,0,1-7,4H8a7.8,7.8,0,0,1-6.9-4,7.9,7.9,0,0,1,0-8.1L74.2,71.7a16,16,0,0,1,27.6,0l42.3,71.9,26.1-44.1a16.1,16.1,0,0,1,27.6,0l57.1,96.4A8.3,8.3,0,0,1,255,204ZM64.3,120h47.4L88,79.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="164"
      cy="52"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="50.4"
      y1="128"
      x2="125.6"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
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
      cx="164"
      cy="52"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="50.4"
      y1="128"
      x2="125.6"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
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
      cx="164"
      cy="52"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="50.4"
      y1="128"
      x2="125.6"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
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

const Mountains = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Mountains.displayName = "Mountains";

export default Mountains;
