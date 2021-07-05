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
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
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
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
      opacity="0.2"
    />
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
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

pathsByWeight.set("fill", () => (
  <>
    <path d="M128,24a104,104,0,1,0,30.56543,203.43359,7.99683,7.99683,0,0,0,3.30859-1.99072l63.57032-63.57324a7.99548,7.99548,0,0,0,1.99072-3.30859A104.07559,104.07559,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.50488,60.00269a56.01585,56.01585,0,0,1-97.00976.00048,8.00016,8.00016,0,0,1,13.85058-8.01074,40.016,40.016,0,0,0,69.30957-.00049,7.99975,7.99975,0,1,1,13.84961,8.01075Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
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
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
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
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
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

const SmileySticker = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SmileySticker.displayName = "SmileySticker";

export default SmileySticker;
