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
      d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
    <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
    <path
      d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184c-24.7,0-44.1-14.1-44.1-32a8,8,0,0,1,16,0c0,7.6,11.6,16,28.1,16,13.3,0,28.1-6.6,28.1-16s-12.2-13.4-30.8-18.2c-8.7-2.2-17.7-4.5-24.8-8.2-9.7-5.2-14.6-12.4-14.6-21.6,0-18.2,18.1-32,42.1-32,17.2,0,31.9,7.2,38.5,18.7a8,8,0,0,1-3,10.9,7.9,7.9,0,0,1-10.9-3C148.9,92.2,139.3,88,128,88c-14.6,0-26.1,7-26.1,16,0,6.8,10.8,10.1,27.3,14.3,19.1,4.9,42.9,11,42.9,33.7C172.1,169.9,152.7,184,128,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
      d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
      d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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

const StripeLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

StripeLogo.displayName = "StripeLogo";

export default StripeLogo;
