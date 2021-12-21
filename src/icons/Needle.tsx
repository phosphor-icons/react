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
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
      opacity="0.3"
    />
    <line
      x1="184"
      y1="72"
      x2="168"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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
    <path d="M212.3,43.7a40.1,40.1,0,0,0-56.6,0l-24,24a8.1,8.1,0,0,0-2.2,4.3C120.7,123.3,36,208.7,34.4,210.3h-.1a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0h0c.8-.9,86.8-86.4,138.3-95.2a8.1,8.1,0,0,0,4.3-2.2l24-24a40.1,40.1,0,0,0,0-56.6Zm-22.6,34-16,16a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l16-16a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="184"
      y1="72"
      x2="168"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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
      x1="184"
      y1="72"
      x2="168"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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
      x1="184"
      y1="72"
      x2="168"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M182.6,118.6l24-24a32,32,0,0,0-45.2-45.2l-24,24C128,128,40,216,40,216S128,128,182.6,118.6Z"
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

const Needle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Needle.displayName = "Needle";

export default Needle;
