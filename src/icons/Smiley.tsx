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
      d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
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
    <path
      d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
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
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm84.50488,60.00293a56.01609,56.01609,0,0,1-97.00976.00049,8.00016,8.00016,0,1,1,13.85058-8.01074,40.01628,40.01628,0,0,0,69.30957-.00049,7.99974,7.99974,0,1,1,13.84961,8.01074Z" />
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
      d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
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
      d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path
      d="M169.58,151.99735a48.016,48.016,0,0,1-83.15966.00055"
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

const Smiley = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Smiley.displayName = "Smiley";

export default Smiley;
