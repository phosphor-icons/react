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
      d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="200" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M71.1,148.9a87.9,87.9,0,0,1,113.8,0l-50.9,60a7.9,7.9,0,0,1-12.1-.1Z"
      opacity="0.2"
    />
    <path
      d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71.1,148.9a87.9,87.9,0,0,1,113.8,0"
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
    <path d="M246.8,80.5a15.7,15.7,0,0,0-6.2-11c-66.3-50-158.9-50-225.2,0h0a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3L115.8,214a16.4,16.4,0,0,0,4,3.4,15.6,15.6,0,0,0,8.2,2.3h0a15.7,15.7,0,0,0,10.9-4.4,6.8,6.8,0,0,0,1.2-1.2l103-121.4A16,16,0,0,0,246.8,80.5Zm-15.9,1.9-47.1,55.5a95.9,95.9,0,0,0-111.6,0L25.1,82.4h0c60.6-45.7,145.3-45.7,205.8,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="200" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="200" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="200" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WifiLow.displayName = "WifiLow";

export default WifiLow;
