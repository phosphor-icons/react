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
      d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M50,136.5A63.9,63.9,0,0,1,17.6,94.4h0A68.3,68.3,0,0,0,32,96,64.1,64.1,0,0,0,96,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,144,80v1.1"
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
      d="M90.3,130.4a67.9,67.9,0,0,1,45.5-47.3h.1c.1-1,.1-2,.1-3A64,64,0,0,0,86.4,17.6h0A68.3,68.3,0,0,1,88,32,64.1,64.1,0,0,1,24,96,68.3,68.3,0,0,1,9.6,94.4h0A64.1,64.1,0,0,0,47,138.9h0A43.7,43.7,0,0,1,76,128a42.5,42.5,0,0,1,14.3,2.4Z"
      opacity="0.2"
    />
    <path
      d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M47,138.9A64.1,64.1,0,0,1,9.6,94.4h0A68.3,68.3,0,0,0,24,96,64.1,64.1,0,0,0,88,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,136,80c0,1,0,2-.1,3"
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
    <path d="M156,72a85.2,85.2,0,0,0-12.4,1A71.8,71.8,0,0,0,88.2,9.8a8,8,0,0,0-9.6,9.6A58.6,58.6,0,0,1,80,32,56,56,0,0,1,24,88a58.6,58.6,0,0,1-12.6-1.4,8,8,0,0,0-9.6,9.6,71.9,71.9,0,0,0,32.3,45A52,52,0,0,0,76,224h80a76,76,0,0,0,0-152ZM21.4,104H24A72.1,72.1,0,0,0,96,32V29.3a55.6,55.6,0,0,1,31.9,48.1A76.3,76.3,0,0,0,85,120.8a53.8,53.8,0,0,0-9-.8,51.8,51.8,0,0,0-30,9.6A55.9,55.9,0,0,1,21.4,104Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M47,138.9A64.1,64.1,0,0,1,9.6,94.4h0A68.3,68.3,0,0,0,24,96,64.1,64.1,0,0,0,88,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,136,80c0,1,0,2-.1,3"
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
      d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M47,138.9A64.1,64.1,0,0,1,9.6,94.4h0A68.3,68.3,0,0,0,24,96,64.1,64.1,0,0,0,88,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,136,80c0,1,0,2-.1,3"
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
      d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M47,138.9A64.1,64.1,0,0,1,9.6,94.4h0A68.3,68.3,0,0,0,24,96,64.1,64.1,0,0,0,88,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,136,80c0,1,0,2-.1,3"
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

const CloudMoon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CloudMoon.displayName = "CloudMoon";

export default CloudMoon;
