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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="56.5"
      y1="180"
      x2="199.5"
      y2="180"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48.1"
      y1="140"
      x2="207.9"
      y2="140"
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
      d="M49.3,128A105.7,105.7,0,0,0,48,144a80,80,0,0,0,160,0,105.7,105.7,0,0,0-1.3-16H49.3Z"
      opacity="0.2"
    />
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="49.3"
      y1="128"
      x2="206.7"
      y2="128"
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
    <path d="M174,47.8A259.4,259.4,0,0,0,132.6,9.4a8.1,8.1,0,0,0-9.2,0A259.4,259.4,0,0,0,82,47.8C54.5,79.3,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.5,79.3,174,47.8ZM128,26c14.2,11.1,56.9,47.8,68.8,94H59.2C71.1,73.8,113.8,37.1,128,26Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="49.3"
      y1="128"
      x2="206.7"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="49.6"
      y1="160"
      x2="206.4"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="192"
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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="49.3"
      y1="128"
      x2="206.7"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="49.6"
      y1="160"
      x2="206.4"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="192"
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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="49.3"
      y1="128"
      x2="206.7"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="49.6"
      y1="160"
      x2="206.4"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="192"
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

const DropHalfBottom = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DropHalfBottom.displayName = "DropHalfBottom";

export default DropHalfBottom;
