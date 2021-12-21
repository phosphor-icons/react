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
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="68" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="60" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="60" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="60" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="60" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DeviceMobileCamera = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

DeviceMobileCamera.displayName = "DeviceMobileCamera";

export default DeviceMobileCamera;
