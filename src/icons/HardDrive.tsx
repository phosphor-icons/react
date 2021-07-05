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
      y="72"
      width="208"
      height="112"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="24" y="72" width="208" height="112" rx="8" opacity="0.2" />
    <rect
      x="24"
      y="72"
      width="208"
      height="112"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="188" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M224,64H32A16.01833,16.01833,0,0,0,16,80v96a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,224,64Zm-35.99951,76a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="24"
      y="72"
      width="208"
      height="112"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="188" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="24"
      y="72"
      width="208"
      height="112"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="188" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="24"
      y="72"
      width="208"
      height="112"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="188" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const HardDrive = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HardDrive.displayName = "HardDrive";

export default HardDrive;
