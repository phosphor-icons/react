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
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="32"
      x2="176"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M156.59181,152H200a16,16,0,0,0,16-16V32H72A32,32,0,0,0,40,64v72a16,16,0,0,0,16,16H99.40819a8,8,0,0,1,7.97967,8.57L104,208a24,24,0,0,0,48,0l-3.38786-47.43A8,8,0,0,1,156.59181,152Z"
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
      d="M40,112H216v24a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152H56a16,16,0,0,1-16-16Z"
      opacity="0.2"
    />
    <line
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M102.776,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
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
    <path d="M216,24H72A40.04552,40.04552,0,0,0,32,64v72a24.0275,24.0275,0,0,0,24,24h46.77588l-6.69531,46.86816A7.97979,7.97979,0,0,0,96,208a32,32,0,0,0,64,0,7.97979,7.97979,0,0,0-.08057-1.13184L153.22412,160H200a24.0275,24.0275,0,0,0,24-24V32A8.00008,8.00008,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24.0275,24.0275,0,0,1,72,40Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M102.776,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
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
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M102.776,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
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
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M102.776,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2241a8,8,0,0,0-7.9196,9.13137L152,208a24,24,0,0,1-48,0l6.69555-46.86862A8,8,0,0,0,102.776,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
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

const PaintBrushBroad = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaintBrushBroad.displayName = "PaintBrushBroad";

export default PaintBrushBroad;
