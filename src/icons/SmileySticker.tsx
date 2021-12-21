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
    <path
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="92" cy="108" r="16" />
    <circle cx="164" cy="108" r="16" />
    <path
      d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      opacity="0.2"
    />
    <path
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path
      d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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
    <path d="M128,24a104,104,0,0,0,0,208,102.2,102.2,0,0,0,30.6-4.6,6.7,6.7,0,0,0,3.3-2l63.5-63.5a7.2,7.2,0,0,0,2-3.3A102.2,102.2,0,0,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.5,60a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="108" r="10" />
    <circle cx="164" cy="108" r="10" />
    <path
      d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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
    <path
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="108" r="8" />
    <circle cx="164" cy="108" r="8" />
    <path
      d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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
    <path
      d="M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path
      d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
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

const SmileySticker = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SmileySticker.displayName = "SmileySticker";

export default SmileySticker;
