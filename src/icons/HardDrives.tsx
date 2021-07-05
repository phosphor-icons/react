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
      y="48"
      width="176"
      height="160"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="216"
      y1="128"
      x2="40"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="176" cy="88" r="16" />
    <circle cx="176" cy="168" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2" />
    <rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2" />
    <rect
      x="40"
      y="144"
      width="176"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="40"
      y="48"
      width="176"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="80" r="12" />
    <circle cx="180" cy="176" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <path d="M208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40ZM180.00049,92a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,92Z" />
      <path d="M208,136H48a16.01833,16.01833,0,0,0-16,16v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,208,136Zm-27.99951,52a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,188Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="144"
      width="176"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="40"
      y="48"
      width="176"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="80" r="10" />
    <circle cx="180" cy="176" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="144"
      width="176"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="40"
      y="48"
      width="176"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="176" r="8" />
    <circle cx="180" cy="80" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="144"
      width="176"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="40"
      y="48"
      width="176"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="80" r="12" />
    <circle cx="180" cy="176" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const HardDrives = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HardDrives.displayName = "HardDrives";

export default HardDrives;
