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

pathsByWeight.set("bold", () => (
  <>
    <circle cx="128" cy="200" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8.1,8.1,0,0,1,237,87.5c-19,22.5-83,97.8-103,121.4a7.9,7.9,0,0,1-12,0C102,185.3,38,110,19,87.5A8.1,8.1,0,0,1,20.2,75.9Z"
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
    <path d="M128,219.7a16,16,0,0,1-12.1-5.6L12.9,92.7A15.8,15.8,0,0,1,9.2,80.5a16.3,16.3,0,0,1,6.2-11c66.3-50,158.9-50,225.2,0a16.3,16.3,0,0,1,6.2,11,16,16,0,0,1-3.7,12.2l-103,121.4A16,16,0,0,1,128,219.7ZM25.1,82.3h0L128,203.6,230.9,82.4v-.2C170.4,36.6,85.7,36.6,25.1,82.3Zm-.1,0Zm-4.8-6.4Z" />
  </>
));

pathsByWeight.set("light", () => (
  <>
    <circle cx="128" cy="200" r="10" />
  </>
));

pathsByWeight.set("thin", () => (
  <>
    <circle cx="128" cy="200" r="8" />
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <circle cx="128" cy="200" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiNone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WifiNone.displayName = "WifiNone";

export default WifiNone;
