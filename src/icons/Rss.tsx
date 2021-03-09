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
      d="M47.99414,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M47.99414,96a112,112,0,0,1,112,112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M47.99414,48a160,160,0,0,1,160,160"
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
      d="M47.99414,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M47.99414,96a112,112,0,0,1,112,112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M47.99414,48a160,160,0,0,1,160,160"
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
    <path d="M98.90576,157.08752a71.531,71.531,0,0,1,21.08838,50.91211,8,8,0,0,1-16,0,56.00027,56.00027,0,0,0-56-56,8,8,0,1,1,0-16A71.53147,71.53147,0,0,1,98.90576,157.08752ZM47.99414,87.99963a8,8,0,1,0,0,16,104.00183,104.00183,0,0,1,104,104,8,8,0,0,0,16,0,120.00093,120.00093,0,0,0-120-120Zm118.794,1.20606A166.90561,166.90561,0,0,0,47.99414,39.99963a8,8,0,0,0,0,16,151.00491,151.00491,0,0,1,107.48047,44.52051,151.00328,151.00328,0,0,1,44.51953,107.47949,8,8,0,0,0,16,0A166.90191,166.90191,0,0,0,166.78809,89.20569ZM51.99414,191.99963a12,12,0,1,0,12,12A12.01344,12.01344,0,0,0,51.99414,191.99963Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M47.99414,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M47.99414,96a112,112,0,0,1,112,112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M47.99414,48a160,160,0,0,1,160,160"
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
      d="M47.99414,144a64,64,0,0,1,64,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M47.99414,96a112,112,0,0,1,112,112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M47.99414,48a160,160,0,0,1,160,160"
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
      d="M48,48A160,160,0,0,1,208,208"
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
