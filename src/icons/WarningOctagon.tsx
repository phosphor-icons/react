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
      x1="128"
      y1="80"
      x2="128"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="172" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="128" cy="172" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M227.3,80.2,175.8,28.7A16.1,16.1,0,0,0,164.5,24h-73a16.1,16.1,0,0,0-11.3,4.7L28.7,80.2A16.1,16.1,0,0,0,24,91.5v73a16.1,16.1,0,0,0,4.7,11.3l51.5,51.5A16.1,16.1,0,0,0,91.5,232h73a16.1,16.1,0,0,0,11.3-4.7l51.5-51.5a16.1,16.1,0,0,0,4.7-11.3v-73A16.1,16.1,0,0,0,227.3,80.2ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="172" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="172" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.5,32h-73a7.9,7.9,0,0,0-5.6,2.3L34.3,85.9A7.9,7.9,0,0,0,32,91.5v73a7.9,7.9,0,0,0,2.3,5.6l51.6,51.6a7.9,7.9,0,0,0,5.6,2.3h73a7.9,7.9,0,0,0,5.6-2.3l51.6-51.6a7.9,7.9,0,0,0,2.3-5.6v-73a7.9,7.9,0,0,0-2.3-5.6L170.1,34.3A7.9,7.9,0,0,0,164.5,32Z"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="128" cy="172" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WarningOctagon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WarningOctagon.displayName = "WarningOctagon";

export default WarningOctagon;
