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
    <polygon
      points="100 108 100 61.1 40 72 40 108 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="216 108 216 40 140 53.8 140 108 216 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="100 148 100 194.9 40 184 40 148 100 148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="216 148 216 216 140 202.2 140 148 216 148"
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
    <polygon
      points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
      opacity="0.2"
    />
    <polygon points="104 195.6 40 184 40 144 104 144 104 195.6" opacity="0.2" />
    <polygon
      points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
      opacity="0.2"
    />
    <polygon points="104 60.4 40 72 40 112 104 112 104 60.4" opacity="0.2" />
    <polygon
      points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 195.6 40 184 40 144 104 144 104 195.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 60.4 40 72 40 112 104 112 104 60.4"
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
    <path d="M112,144v51.6a8.1,8.1,0,0,1-2.9,6.2,7.8,7.8,0,0,1-5.1,1.8h-1.4l-64-11.6A8,8,0,0,1,32,184V144a8,8,0,0,1,8-8h64A8,8,0,0,1,112,144Zm-2.9-89.8a8,8,0,0,0-6.5-1.7l-64,11.6A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.4A8.1,8.1,0,0,0,109.1,54.2ZM216,136H136a8,8,0,0,0-8,8v57.5a8,8,0,0,0,6.6,7.8l80,14.6H216a7.4,7.4,0,0,0,5.1-1.9A7.9,7.9,0,0,0,224,216V144A8,8,0,0,0,216,136Zm5.1-102.1a7.7,7.7,0,0,0-6.5-1.8l-80,14.6a8,8,0,0,0-6.6,7.8V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A7.9,7.9,0,0,0,221.1,33.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="104 195.6 40 184 40 144 104 144 104 195.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="104 60.4 40 72 40 112 104 112 104 60.4"
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
    <polygon
      points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="104 195.6 40 184 40 144 104 144 104 195.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="104 60.4 40 72 40 112 104 112 104 60.4"
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
    <polygon
      points="216 216 136 201.5 136 201.5 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 195.6 40 184 40 144 104 144 104 195.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="216 40 136 54.5 136 54.5 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 60.4 40 72 40 112 104 112 104 60.4"
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

const WindowsLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WindowsLogo.displayName = "WindowsLogo";

export default WindowsLogo;
