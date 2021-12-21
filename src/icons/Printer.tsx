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
    <rect
      x="64"
      y="40"
      width="128"
      height="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="64"
      y="156"
      width="128"
      height="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="188" cy="116" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M210.7,80H45.3C35.8,80,28,87.2,28,96v80H64V152H192v24h36V96C228,87.2,220.2,80,210.7,80Z"
      opacity="0.2"
    />
    <rect
      x="64"
      y="40"
      width="128"
      height="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="64"
      y="152"
      width="128"
      height="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="116" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,188,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="64 80 64 40 192 40 192 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="64"
      y="152"
      width="128"
      height="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="188" cy="116" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polyline
      points="64 80 64 40 192 40 192 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="64"
      y="152"
      width="128"
      height="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="188" cy="116" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline
      points="64 80 64 40 192 40 192 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="64"
      y="152"
      width="128"
      height="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="116" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Printer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Printer.displayName = "Printer";

export default Printer;
