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
      x1="72"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
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
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
      opacity="0.2"
    />
    <line
      x1="72"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
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
    <path d="M224,216a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM208,100H153.8L110.9,53.3A3.9,3.9,0,0,0,108,52H91.1a11.6,11.6,0,0,0-9.7,5,11.9,11.9,0,0,0-1.7,10.8L90.5,100H65.9L47.1,77.4A4.1,4.1,0,0,0,44,76H26.8a12.1,12.1,0,0,0-9.7,4.8,11.9,11.9,0,0,0-1.8,10.6l14,46.9A35.8,35.8,0,0,0,63.8,164H240a4,4,0,0,0,4-4V136A36,36,0,0,0,208,100Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="72"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
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
      x1="72"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
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
      x1="72"
      y1="216"
      x2="216"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M26.8,80H44l20,24H96L83.5,66.5A8,8,0,0,1,91.1,56H108l44,48h56a32,32,0,0,1,32,32v24H63.8a32,32,0,0,1-30.6-22.8L19.1,90.3A8,8,0,0,1,26.8,80Z"
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

const AirplaneInFlight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AirplaneInFlight.displayName = "AirplaneInFlight";

export default AirplaneInFlight;
