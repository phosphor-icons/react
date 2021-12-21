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
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      opacity="0.2"
    />
    <path
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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
    <path d="M186.7,59.6l-.7-1.1a4.1,4.1,0,0,0-6.3-.4L143.5,98.4l18,7a8.1,8.1,0,0,1,5,9l-7.2,37.1a8.1,8.1,0,0,1-7.9,6.5h-1.5a8.4,8.4,0,0,1-6.3-9.7l5.9-30.3-22.6-8.7a8.3,8.3,0,0,1-4.9-5.6,8.1,8.1,0,0,1,1.8-7.2l46.6-51.9a4,4,0,0,0-.1-5.5c-14.1-14.7-29-23-42.3-23-18.5,0-40.5,16.3-58.7,43.6s-28,57.6-29.2,86.8C38,197,77.6,240.1,128.2,240A88.1,88.1,0,0,0,216,152C216,121.2,205.3,87.5,186.7,59.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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
      d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="151.4 150 158.6 112.9 129.8 101.7 172.7 53.9"
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

const EggCrack = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EggCrack.displayName = "EggCrack";

export default EggCrack;
