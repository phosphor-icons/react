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
      d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="124"
      cy="116"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M204,216c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="107"
      y1="99"
      x2="37.9"
      y2="29.9"
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
    <circle cx="124" cy="116" r="20" opacity="0.2" />
    <path
      d="M208,204c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      opacity="0.2"
    />
    <path
      d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="124"
      cy="116"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,204c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="109.9"
      y1="101.9"
      x2="37.9"
      y2="29.9"
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
    <path d="M256,204a28,28,0,0,1-56,0c0-23,21.4-44.7,22.3-45.7a8.2,8.2,0,0,1,11.4,0C234.6,159.3,256,181,256,204ZM132.5,124.5a12,12,0,0,0,0-17,12.1,12.1,0,0,0-17,0,12,12,0,0,0,17,17Zm98.5-1a8.2,8.2,0,0,0-2.4-5.7L121.1,10.3a8,8,0,0,0-11.3,0L69.7,50.4l41,41a28,28,0,1,1-11.3,11.3l-41-41L13.7,106.5a24,24,0,0,0,0,34l84.8,84.8a24.1,24.1,0,0,0,34,0l96.1-96.2A8,8,0,0,0,231,123.5ZM43.5,24.2A8,8,0,0,0,32.2,35.5L58.4,61.7,69.7,50.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="124"
      cy="116"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M208,204c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="109.9"
      y1="101.9"
      x2="37.9"
      y2="29.9"
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
      d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="124"
      cy="116"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M208,204c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="109.9"
      y1="101.9"
      x2="37.9"
      y2="29.9"
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
      d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="124"
      cy="116"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,204c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="109.9"
      y1="101.9"
      x2="37.9"
      y2="29.9"
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

const PaintBucket = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaintBucket.displayName = "PaintBucket";

export default PaintBucket;
