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
      d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,64a24,24,0,0,1,48,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0"
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
      d="M128,64a24,24,0,0,1,48,0V88h24a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0V64a24,24,0,0,1,48,0"
      opacity="0.2"
    />
    <path
      d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64a24,24,0,0,1,48,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0"
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
    <path d="M200,80H184V64a31.97943,31.97943,0,0,0-56-21.13208A31.97443,31.97443,0,0,0,72.20508,60.4231,31.978,31.978,0,0,0,24,88v40a104,104,0,0,0,208,0V112A32.03635,32.03635,0,0,0,200,80ZM152,48a16.01833,16.01833,0,0,1,16,16V80H136V64A16.01833,16.01833,0,0,1,152,48ZM88,64a16,16,0,0,1,32,0v40a16,16,0,0,1-32,0V64ZM40,88a16,16,0,0,1,32,0v16a16,16,0,0,1-32,0Zm88,128a88.10627,88.10627,0,0,1-87.9209-84.249A31.94065,31.94065,0,0,0,80,125.13208a31.92587,31.92587,0,0,0,44.58057,3.34595,32.23527,32.23527,0,0,0,11.79443,11.4414A47.906,47.906,0,0,0,120,176a8,8,0,0,0,16,0,32.03635,32.03635,0,0,1,32-32,8,8,0,0,0,0-16H152a16.01833,16.01833,0,0,1-16-16V96h64a16.01833,16.01833,0,0,1,16,16v16A88.09957,88.09957,0,0,1,128,216Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,64a24,24,0,0,1,48,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0"
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
      d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,64a24,24,0,0,1,48,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0"
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
      d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64a24,24,0,0,1,48,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0"
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

const HandFist = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HandFist.displayName = "HandFist";

export default HandFist;
