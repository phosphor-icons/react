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
      points="120 32 184 80 120 128 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="120 128 184 176 120 224 120 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="56"
      y1="80"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="56"
      y1="176"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="52" cy="128" r="16" />
    <circle cx="196" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <polygon points="120 32 184 80 120 128 120 32" opacity="0.2" />
    <polygon points="120 128 184 176 120 224 120 128" opacity="0.2" />
    <polygon
      points="120 32 184 80 120 128 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="120 128 184 176 120 224 120 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="80"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="176"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="52" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M188.8,169.6,133.3,128l55.5-41.6a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.7,128,51.2,169.6A8,8,0,0,0,56,184a7.7,7.7,0,0,0,4.8-1.6L112,144v80a8.2,8.2,0,0,0,4.4,7.2,9.4,9.4,0,0,0,3.6.8,7.7,7.7,0,0,0,4.8-1.6l64-48a8,8,0,0,0,0-12.8ZM128,48l42.7,32L128,112Zm0,160V144l42.7,32Zm80-80a12,12,0,1,1-12-12A12,12,0,0,1,208,128ZM52,140a12,12,0,1,1,12-12A12,12,0,0,1,52,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="120 32 184 80 120 128 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="120 128 184 176 120 224 120 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="56"
      y1="80"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="56"
      y1="176"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="52" cy="128" r="10" />
    <circle cx="196" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polygon
      points="120 32 184 80 120 128 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="120 128 184 176 120 224 120 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="56"
      y1="80"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="56"
      y1="176"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="52" cy="128" r="8" />
    <circle cx="196" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polygon
      points="120 32 184 80 120 128 120 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="120 128 184 176 120 224 120 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="80"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="176"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="52" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BluetoothConnected = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

BluetoothConnected.displayName = "BluetoothConnected";

export default BluetoothConnected;
