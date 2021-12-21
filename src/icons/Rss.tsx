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
      d="M48,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M48,96A112,112,0,0,1,160,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="52" cy="204" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M48,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,96A112,112,0,0,1,160,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="52" cy="204" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M98.9,157.1A71.6,71.6,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.6,71.6,0,0,1,98.9,157.1ZM48,88a8,8,0,0,0,0,16,102.9,102.9,0,0,1,73.5,30.5A102.9,102.9,0,0,1,152,208a8,8,0,0,0,16,0,119.2,119.2,0,0,0-35.2-84.9A119.3,119.3,0,0,0,48,88Zm118.8,1.2A166.9,166.9,0,0,0,48,40a8,8,0,0,0,0,16,151.1,151.1,0,0,1,107.5,44.5A151.1,151.1,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.8,89.2ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M48,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M48,96A112,112,0,0,1,160,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="52" cy="204" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M48,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M48,96A112,112,0,0,1,160,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="52" cy="204" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M48,144a63.8,63.8,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,96A112,112,0,0,1,160,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="52" cy="204" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Rss = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Rss.displayName = "Rss";

export default Rss;
