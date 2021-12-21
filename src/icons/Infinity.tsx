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
      d="M101.3,158.2l-3.4,3.7a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-3.4,3.7"
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
      d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
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
    <path d="M248,128a56,56,0,0,1-95.6,39.6l-.3-.4-60-67.6A39.5,39.5,0,0,0,64,88a40,40,0,1,0,0,80,39.5,39.5,0,0,0,28.1-11.6l8.5-9.6a8,8,0,0,1,12,10.6l-8.7,9.8-.3.4a56,56,0,0,1-79.2,0A56,56,0,0,1,64,72a55.5,55.5,0,0,1,39.6,16.4l.3.4,60,67.6A39.5,39.5,0,0,0,192,168a40,40,0,1,0,0-80,39.5,39.5,0,0,0-28.1,11.6l-8.5,9.6a8,8,0,0,1-12-10.6l8.7-9.8.3-.4A56,56,0,0,1,248,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
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
      d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
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
      d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
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

const Infinity = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Infinity.displayName = "Infinity";

export default Infinity;
