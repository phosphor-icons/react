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
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="176.6 181.5 120 224 120 119.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="120 59.7 120 32 184 80 156.9 100.3"
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
    <polygon points="120 32 184 80 120 128 120 32" opacity="0.2" />
    <polygon points="120 128 184 176 120 224 120 128" opacity="0.2" />
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
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="120 71.6 120 32 184 80 150.5 105.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.7 181.5 120 224 120 128 145.2 146.9"
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
    <path d="M213.9,210.6l-31.4-34.5h0l-31.3-34.5h-.1L53.9,34.6A8,8,0,0,0,42.1,45.4l70.8,77.9L51.2,169.6A8,8,0,0,0,56,184a7.7,7.7,0,0,0,4.8-1.6L112,144v80a8.2,8.2,0,0,0,4.4,7.2,9,9,0,0,0,3.6.8,7.7,7.7,0,0,0,4.8-1.6l50.8-38.1,26.5,29.1A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1A7.9,7.9,0,0,0,213.9,210.6ZM128,208V144l11.8,8.8,25,27.6Z" />
    <path d="M120,79.6a8,8,0,0,0,8-8V48l42.7,32-25,18.7a7.9,7.9,0,0,0-1.6,11.2,7.8,7.8,0,0,0,6.4,3.2,8.1,8.1,0,0,0,4.8-1.6l33.5-25.1a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32V71.6A8,8,0,0,0,120,79.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
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
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="120 71.6 120 32 184 80 150.5 105.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="176.6 181.5 120 224 120 128 145.2 146.9"
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
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="120 71.6 120 32 184 80 150.5 105.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="176.6 181.5 120 224 120 128 145.2 146.9"
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
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="120 71.6 120 32 184 80 150.5 105.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.6 181.5 120 224 120 128 145.2 146.9"
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

const BluetoothSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BluetoothSlash.displayName = "BluetoothSlash";

export default BluetoothSlash;
