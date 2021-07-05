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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="92" cy="108" r="16" />
    <circle cx="164" cy="108" r="16" />
    <path
      d="M165.27508,169.75305a48.0042,48.0042,0,0,0-74.5508.00079"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path
      d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
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
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm81.58545,86.9248a7.99636,7.99636,0,0,1-10.93018-2.91943,40.01579,40.01579,0,0,0-69.30957-.00049,8.00016,8.00016,0,0,1-13.85058-8.01074,56.0156,56.0156,0,0,1,97.00976.00049A7.99915,7.99915,0,0,1,173.58545,182.9248Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="108" r="10" />
    <circle cx="164" cy="108" r="10" />
    <path
      d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="108" r="8" />
    <circle cx="164" cy="108" r="8" />
    <path
      d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path
      d="M169.58,176a48.016,48.016,0,0,0-83.15966-.00055"
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

const SmileySad = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SmileySad.displayName = "SmileySad";

export default SmileySad;
