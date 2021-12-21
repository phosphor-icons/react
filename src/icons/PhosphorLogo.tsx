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
      x1="68"
      y1="32"
      x2="134"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="68"
      y="32"
      width="66"
      height="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M134,164v66a65.9,65.9,0,0,1-66-66"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M134,164h8a66,66,0,0,0,0-132h-8"
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
    <polygon points="68 32 68 164 134 164 68 32" opacity="0.2" />
    <line
      x1="68"
      y1="32"
      x2="134"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="68"
      y="32"
      width="66"
      height="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M134,164v66a65.9,65.9,0,0,1-66-66"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M134,164h8a66,66,0,0,0,0-132h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M134,164h8a66,66,0,0,0,0-132h-8Z" opacity="0.2" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M142,24H68a8,8,0,0,0-8,8V164a74.1,74.1,0,0,0,74,74,8,8,0,0,0,8-8V172a74,74,0,0,0,0-148ZM126,221.5A58.1,58.1,0,0,1,76.6,172H126Zm0-91.4L80.9,40H126ZM142,156V40a58,58,0,0,1,0,116Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="68"
      y1="32"
      x2="134"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="68"
      y="32"
      width="66"
      height="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M134,164v66a65.9,65.9,0,0,1-66-66"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M134,164h8a66,66,0,0,0,0-132h-8"
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
      x1="68"
      y1="32"
      x2="134"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="68"
      y="32"
      width="66"
      height="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M134,164v66a65.9,65.9,0,0,1-66-66"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M134,164h8a66,66,0,0,0,0-132h-8"
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
      x1="68"
      y1="32"
      x2="134"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="68"
      y="32"
      width="66"
      height="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M134,164v66a65.9,65.9,0,0,1-66-66"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M134,164h8a66,66,0,0,0,0-132h-8"
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

const PhosphorLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PhosphorLogo.displayName = "PhosphorLogo";

export default PhosphorLogo;
