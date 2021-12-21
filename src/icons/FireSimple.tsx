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
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
      opacity="0.2"
    />
    <path
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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
    <path d="M219.9,140a92,92,0,0,1-184,0c0-23.1,9.9-49.7,29.4-79.1a8,8,0,0,1,5-3.4,8.2,8.2,0,0,1,6.1,1.2l32.2,21.5,30.9-64.8a7.9,7.9,0,0,1,5.8-4.4,8.1,8.1,0,0,1,7.1,2.2c14.7,14.7,31.5,32.6,44.6,53.4C212.4,91.1,219.9,115.1,219.9,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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
      d="M71.9,65.4c-15.4,23.2-28,49.8-28,74.6a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L111.9,92l-40-26.6Z"
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

const FireSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FireSimple.displayName = "FireSimple";

export default FireSimple;
