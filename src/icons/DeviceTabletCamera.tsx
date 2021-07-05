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
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="76" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="68" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="68" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="68" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="68" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DeviceTabletCamera = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

DeviceTabletCamera.displayName = "DeviceTabletCamera";

export default DeviceTabletCamera;
