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
      points="100 108 100 61.091 40 72 40 108 100 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="216 108 216 40 140 53.818 140 108 216 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="100 148 100 194.909 40 184 40 148 100 148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="216 148 216 216 140 202.182 140 148 216 148"
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
      points="216 216 136 201.455 136 201.455 136 144 216 144 216 216"
      opacity="0.2"
    />
    <polygon
      points="104 195.636 40 184 40 144 104 144 104 195.636"
      opacity="0.2"
    />
    <polygon
      points="216 40 136 54.545 136 54.545 136 112 216 112 216 40"
      opacity="0.2"
    />
    <polygon
      points="104 60.364 40 72 40 112 104 112 104 60.364"
      opacity="0.2"
    />
    <polygon
      points="216 216 136 201.455 136 201.455 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 195.636 40 184 40 144 104 144 104 195.636"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="216 40 136 54.545 136 54.545 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 60.364 40 72 40 112 104 112 104 60.364"
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
    <path d="M112,144v51.63672a7.9983,7.9983,0,0,1-9.43115,7.87061l-64-11.63623A8.00019,8.00019,0,0,1,32,184V144a8.00008,8.00008,0,0,1,8-8h64A8.00008,8.00008,0,0,1,112,144ZM109.126,54.2217a7.995,7.995,0,0,0-6.55713-1.729l-64,11.63623A8.00017,8.00017,0,0,0,32,72v40a8.00008,8.00008,0,0,0,8,8h64a8.00008,8.00008,0,0,0,8-8V60.3633A7.99853,7.99853,0,0,0,109.126,54.2217ZM216,136H136a8.00008,8.00008,0,0,0-8,8v57.45459a7.99967,7.99967,0,0,0,6.56885,7.87061l80,14.5459A8.0001,8.0001,0,0,0,224,216V144A8.00008,8.00008,0,0,0,216,136Zm5.126-102.14209a7.99714,7.99714,0,0,0-6.55713-1.729l-80,14.5459A7.99965,7.99965,0,0,0,128,54.54543V112a8.00008,8.00008,0,0,0,8,8h80a8.00008,8.00008,0,0,0,8-8V40A8.00028,8.00028,0,0,0,221.126,33.85793Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="216 216 136 201.455 136 201.455 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="104 195.636 40 184 40 144 104 144 104 195.636"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="216 40 136 54.545 136 54.545 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="104 60.364 40 72 40 112 104 112 104 60.364"
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
      points="216 216 136 201.455 136 201.455 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="104 195.636 40 184 40 144 104 144 104 195.636"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="216 40 136 54.545 136 54.545 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="104 60.364 40 72 40 112 104 112 104 60.364"
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
      points="216 216 136 201.455 136 201.455 136 144 216 144 216 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 195.636 40 184 40 144 104 144 104 195.636"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="216 40 136 54.545 136 54.545 136 112 216 112 216 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="104 60.364 40 72 40 112 104 112 104 60.364"
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
