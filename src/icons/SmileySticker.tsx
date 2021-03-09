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
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
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
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
      opacity="0.2"
    />
    <path
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M128,24a104,104,0,1,0,30.56543,203.43359,7.99683,7.99683,0,0,0,3.30859-1.99072l63.57032-63.57324a7.99548,7.99548,0,0,0,1.99072-3.30859A104.07559,104.07559,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.50293,60.00244a56.19607,56.19607,0,0,1-26.70264,23.58936,56.05693,56.05693,0,0,1-70.30322-23.58863,8.00011,8.00011,0,0,1,13.84961-8.0122,40.19352,40.19352,0,0,0,19.08594,16.86548,39.95953,39.95953,0,0,0,43.85156-8.57618,40.18715,40.18715,0,0,0,6.36914-8.28979,8.00005,8.00005,0,1,1,13.84961,8.012Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
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
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
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
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SmileySticker = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SmileySticker.displayName = "SmileySticker";

export default SmileySticker;
