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
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
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
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
      opacity="0.2"
    />
    <path
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
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
    <path d="M210.9,146.9A72.6,72.6,0,0,1,131,162L79,222.2c-.1.2-.3.3-.4.4a31.9,31.9,0,0,1-45.2,0,31.9,31.9,0,0,1,0-45.2l.4-.4L94,125a72,72,0,0,1,94.1-95.2,7.9,7.9,0,0,1,4.7,5.8,8,8,0,0,1-2.2,7.2L151.7,81.7l3.7,18.9,18.9,3.7,38.9-38.9a8,8,0,0,1,7.2-2.2,7.9,7.9,0,0,1,5.8,4.7A71.7,71.7,0,0,1,210.9,146.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
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
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
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
      d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
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

const Wrench = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wrench.displayName = "Wrench";

export default Wrench;
