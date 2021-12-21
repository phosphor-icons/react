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
    <circle
      cx="92"
      cy="132"
      r="12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="164"
      cy="132"
      r="12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="108"
      y1="224"
      x2="108"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="148"
      y1="224"
      x2="148"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M180,224H76a8,8,0,0,1-8-8V185.7a92,92,0,0,1-32-69.5C35.9,66.1,76.6,24.7,126.7,24A92,92,0,0,1,188,185.7V216A8,8,0,0,1,180,224Z"
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
      d="M128,24A92,92,0,0,0,80,194.5V216a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V194.5A92,92,0,0,0,128,24ZM92,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20.1,20.1,0,0,1,164,152Z"
      opacity="0.2"
    />
    <circle
      cx="92"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="164"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="224"
      x2="112"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="224"
      x2="144"
      y2="192"
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
    <path d="M124.1,16.1c-51.6,1.9-93.7,43.6-96,95.3A99.4,99.4,0,0,0,72,198.9V216a16,16,0,0,0,16,16h8a4,4,0,0,0,4-4V204.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v24a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V204.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v24a4,4,0,0,0,4,4h8a16,16,0,0,0,16-16V198.9A100,100,0,0,0,124.1,16.1ZM92,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20.1,20.1,0,0,1,164,152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="92"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="164"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="224"
      x2="112"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="144"
      y1="224"
      x2="144"
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
    <circle
      cx="92"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="164"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="224"
      x2="112"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="144"
      y1="224"
      x2="144"
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
    <circle
      cx="92"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="164"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="224"
      x2="112"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="224"
      x2="144"
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

const Skull = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Skull.displayName = "Skull";

export default Skull;
