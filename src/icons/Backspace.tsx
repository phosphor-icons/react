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
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="104"
      x2="112"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="152"
      x2="112"
      y2="104"
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
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      opacity="0.2"
    />
    <path
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="104"
      x2="112"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="152"
      x2="112"
      y2="104"
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
    <path d="M216,40H68.5a16.2,16.2,0,0,0-13.7,7.8L9.1,123.9a8,8,0,0,0,0,8.2l45.7,76.1h0A16.1,16.1,0,0,0,68.5,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.7,146.3a8.1,8.1,0,0,1,0,11.4A8.5,8.5,0,0,1,160,160a8.3,8.3,0,0,1-5.7-2.3L136,139.3l-18.3,18.4A8.5,8.5,0,0,1,112,160a8.3,8.3,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4L124.7,128l-18.4-18.3a8.1,8.1,0,0,1,11.4-11.4L136,116.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L147.3,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="104"
      x2="112"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="152"
      x2="112"
      y2="104"
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
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="104"
      x2="112"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="152"
      x2="112"
      y2="104"
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
      d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="104"
      x2="112"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="152"
      x2="112"
      y2="104"
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

const Backspace = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Backspace.displayName = "Backspace";

export default Backspace;
