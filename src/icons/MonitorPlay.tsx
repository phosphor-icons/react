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
    <polygon
      points="156 120 116 92 116 148 156 120"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="228"
      x2="96"
      y2="228"
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
      d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48ZM112,152V88l48,32Z"
      opacity="0.2"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="160 120 112 88 112 152 160 120"
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
    <path d="M168,224a8.00008,8.00008,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8.00008,8.00008,0,0,1,168,224ZM232,64V176a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24V64A24.02734,24.02734,0,0,1,48,40H208A24.02734,24.02734,0,0,1,232,64Zm-68,56a8.00014,8.00014,0,0,0-3.70508-6.74927l-44-28A7.99989,7.99989,0,0,0,104,92v56a7.99991,7.99991,0,0,0,12.29492,6.74927l44-28A8.00014,8.00014,0,0,0,164,120Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="160 120 112 88 112 152 160 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
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
    <polygon
      points="160 120 112 88 112 152 160 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
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
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="160 120 112 88 112 152 160 120"
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

const MonitorPlay = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MonitorPlay.displayName = "MonitorPlay";

export default MonitorPlay;
