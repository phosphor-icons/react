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
    <line
      x1="96"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
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
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
      opacity="0.2"
    />
    <line
      x1="96"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
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
    <path d="M248,216a8.00008,8.00008,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8.00008,8.00008,0,0,1,248,216Zm-24-28a4.00035,4.00035,0,0,0,4-4V148.32275a36.10691,36.10691,0,0,0-26.36523-34.68652l-46.97852-13.0498L123.47266,46.01562a4.00193,4.00193,0,0,0-2.208-1.81054l-13.46973-4.49024A12.00071,12.00071,0,0,0,92,51.09961V82.55908L66.75781,74.6709,51.5293,46.11768a4.00065,4.00065,0,0,0-2.26465-1.9126L35.79492,39.71484A12.00071,12.00071,0,0,0,20,51.09961v52.62988A36.11994,36.11994,0,0,0,46.294,138.396l176.62793,49.45605A4.00591,4.00591,0,0,0,224,188Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="96"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
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
    <line
      x1="96"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
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
    <line
      x1="96"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,103.72927V51.09941a8,8,0,0,1,10.52982-7.58947L48,48,64,78,96,88V51.09941a8,8,0,0,1,10.52982-7.58947L120,48l32,56,48.5646,13.49017A32,32,0,0,1,224,148.32274V184L47.37184,134.54412A32,32,0,0,1,24,103.72927Z"
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

const AirplaneLanding = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AirplaneLanding.displayName = "AirplaneLanding";

export default AirplaneLanding;
