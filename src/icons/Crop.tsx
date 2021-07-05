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
      x1="63.99414"
      y1="64"
      x2="24.00244"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="64.002 24 64.002 192.001 232.002 192.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="192.002 152.001 192.002 64 103.994 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="192.00244"
      y1="232.00098"
      x2="192.00244"
      y2="192.00098"
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
    <line
      x1="63.99414"
      y1="64"
      x2="24.00244"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64.002 24 64.002 192.001 232.002 192.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="192.002 160.001 192.002 64 95.994 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192.00244"
      y1="232.00098"
      x2="192.00244"
      y2="192.00098"
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
    <path d="M240.00244,192.001a8.00039,8.00039,0,0,1-8,8h-32v32a8,8,0,0,1-16,0v-32h-120a8.00039,8.00039,0,0,1-8-8V72h-32a8,8,0,0,1,0-16h32V24a8,8,0,1,1,16,0V184.001h160A8.00039,8.00039,0,0,1,240.00244,192.001ZM95.99365,72h88.00879v88.001a8,8,0,0,0,16,0V64a8.00008,8.00008,0,0,0-8-8H95.99365a8,8,0,0,0,0,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="63.99414"
      y1="64"
      x2="24.00244"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="64.002 24 64.002 192.001 232.002 192.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="192.002 160.001 192.002 64 95.994 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="192.00244"
      y1="232.00098"
      x2="192.00244"
      y2="192.00098"
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
      x1="63.99414"
      y1="64"
      x2="24.00244"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="64.002 24 64.002 192.001 232.002 192.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="192.002 160.001 192.002 64 95.994 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="192.00244"
      y1="232.00098"
      x2="192.00244"
      y2="192.00098"
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
      x1="63.99414"
      y1="64"
      x2="24.00244"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64.002 24 64.002 192.001 232.002 192.001"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="192.002 160.001 192.002 64 95.994 64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192.00244"
      y1="232.00098"
      x2="192.00244"
      y2="192.00098"
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

const Crop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Crop.displayName = "Crop";

export default Crop;
