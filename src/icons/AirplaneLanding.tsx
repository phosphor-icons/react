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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
    <path d="M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-24-28a4.1,4.1,0,0,0,2.4-.8A4,4,0,0,0,228,184V148.3a36.1,36.1,0,0,0-26.4-34.7l-46.9-13L123.5,46a4.3,4.3,0,0,0-2.2-1.8l-13.5-4.5A11.9,11.9,0,0,0,97,41.4a11.6,11.6,0,0,0-5,9.7V82.6L66.8,74.7,51.5,46.1a4.1,4.1,0,0,0-2.2-1.9L35.8,39.7A11.9,11.9,0,0,0,25,41.4a11.6,11.6,0,0,0-5,9.7v52.6a36.1,36.1,0,0,0,26.3,34.7l176.6,49.5Z" />
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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
      d="M24,103.7V51.1a8,8,0,0,1,10.5-7.6L48,48,64,78,96,88V51.1a8,8,0,0,1,10.5-7.6L120,48l32,56,48.6,13.5A31.9,31.9,0,0,1,224,148.3V184L47.4,134.5A31.9,31.9,0,0,1,24,103.7Z"
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
