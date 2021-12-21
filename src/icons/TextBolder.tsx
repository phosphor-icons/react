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
      d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
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
      d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
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
    <path d="M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
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
      d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
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
      d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
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

const TextBolder = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextBolder.displayName = "TextBolder";

export default TextBolder;
