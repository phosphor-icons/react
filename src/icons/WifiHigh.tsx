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
    <path
      d="M59,132.1a98.8,98.8,0,0,1,138,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M25.1,98.2a146.6,146.6,0,0,1,205.8,0"
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
      d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z"
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
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9c-66.4-50.1-159-50.1-225.3-.1a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3l103,121.3a15.9,15.9,0,0,0,24.2,0l103-121.4A16.4,16.4,0,0,0,246.9,80.5Z" />
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
    <path
      d="M59,132.1a98.8,98.8,0,0,1,138,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M25.1,98.2a146.6,146.6,0,0,1,205.8,0"
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
    <path
      d="M59,132.1a98.8,98.8,0,0,1,138,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M25.1,98.2a146.6,146.6,0,0,1,205.8,0"
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
    <path
      d="M59,132.1a98.8,98.8,0,0,1,138,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M25.1,98.2a146.6,146.6,0,0,1,205.8,0"
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

const WifiHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WifiHigh.displayName = "WifiHigh";

export default WifiHigh;
