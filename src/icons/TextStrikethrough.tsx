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
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M75.1,88c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
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
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
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
    <path d="M224,128a8,8,0,0,1-8,8H175.9c9.2,7.1,16.1,17.2,16.1,32s-7,25.7-19.8,34.8S144.6,216,128,216s-32.3-4.7-44.2-13.2S64,181.3,64,168a8,8,0,0,1,16,0c0,17.3,22,32,48,32s48-14.7,48-32c0-14.9-10.5-23.6-38.8-32H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM76.3,104a6.9,6.9,0,0,0,2.5-.4,8,8,0,0,0,5.1-10.1,19.2,19.2,0,0,1-.8-5.5c0-18.2,19.3-32,44.9-32,19.5,0,36.1,8.3,42.3,21A8.1,8.1,0,0,0,181,80.7,7.9,7.9,0,0,0,184.7,70c-9-18.5-30.7-30-56.7-30C93.3,40,67.1,60.6,67.1,88a36,36,0,0,0,1.6,10.5A8,8,0,0,0,76.3,104Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
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
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
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
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
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

const TextStrikethrough = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextStrikethrough.displayName = "TextStrikethrough";

export default TextStrikethrough;
