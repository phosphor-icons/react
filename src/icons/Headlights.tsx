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
      x1="176"
      y1="80"
      x2="240"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="176"
      x2="240"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="128"
      x2="240"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
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
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
      opacity="0.2"
    />
    <line
      x1="168"
      y1="80"
      x2="240"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="176"
      x2="240"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="112"
      x2="240"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="144"
      x2="240"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
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
    <path d="M160,80a8.00039,8.00039,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8.00039,8.00039,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM128,48H88.90381C44.61914,48,8.32715,83.61621,8.002,127.39453A79.99987,79.99987,0,0,0,88,208h40a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,128,48Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="168"
      y1="80"
      x2="240"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="176"
      x2="240"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="112"
      x2="240"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="144"
      x2="240"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
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
      x1="168"
      y1="80"
      x2="240"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="176"
      x2="240"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="112"
      x2="240"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="144"
      x2="240"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
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
      x1="168"
      y1="80"
      x2="240"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="176"
      x2="240"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="112"
      x2="240"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="144"
      x2="240"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,200a72.00008,72.00008,0,0,1-71.998-72.54593C16.29634,87.75464,49.20335,56,88.90387,56H128a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8Z"
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

const Headlights = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Headlights.displayName = "Headlights";

export default Headlights;
