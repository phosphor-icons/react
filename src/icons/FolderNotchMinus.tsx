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
    <path
      d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="104"
      y1="148"
      x2="152"
      y2="148"
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
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      opacity="0.2"
    />
    <path
      d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="148"
      x2="152"
      y2="148"
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
    <path d="M216,72H130.7L102.9,51.2A15.6,15.6,0,0,0,93.3,48H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,96V64H93.3l21.4,16L93.3,96Zm112,60H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="148"
      x2="152"
      y2="148"
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
    <path
      d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="148"
      x2="152"
      y2="148"
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
    <path
      d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="148"
      x2="152"
      y2="148"
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

const FolderNotchMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderNotchMinus.displayName = "FolderNotchMinus";

export default FolderNotchMinus;
