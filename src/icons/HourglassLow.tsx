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
      d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="192"
      y1="180.4"
      x2="64"
      y2="180"
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
    <path d="M64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4Z" opacity="0.2" />
    <path
      d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="180.4"
      x2="64"
      y2="180"
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
    <path d="M200,75.6V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.1,16.1,0,0,0,6.4,12.8L114.7,128,62.4,167.2a15.6,15.6,0,0,0-6.3,11.9,2.8,2.8,0,0,0-.1.9v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.4a2.8,2.8,0,0,0-.1-.9,15.6,15.6,0,0,0-6.3-11.9L141.3,128l52.3-39.6A16.1,16.1,0,0,0,200,75.6ZM82.6,172.1,128,138l45.3,34.3ZM184,75.6,128,118,72,76V40H184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="192"
      y1="180.4"
      x2="64"
      y2="180"
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
      d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="192"
      y1="180.4"
      x2="64"
      y2="180"
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
      d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="180.4"
      x2="64"
      y2="180"
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

const HourglassLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HourglassLow.displayName = "HourglassLow";

export default HourglassLow;
