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
      x1="120"
      y1="88"
      x2="88"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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
      x1="120"
      y1="88"
      x2="88"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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
    <path d="M232,131.2c-1.7,54.5-45.8,98.9-100.3,100.7a103.7,103.7,0,0,1-28.6-2.9,4.1,4.1,0,0,1-2.9-4.9l8.9-35.4A50.5,50.5,0,0,0,136,196c37,0,66.7-33.5,63.8-73.4-2.6-35.9-32-64.6-68-66.5A72,72,0,0,0,56,128a73.3,73.3,0,0,0,5.2,27,8,8,0,0,0,14.9-6A55.5,55.5,0,0,1,72,128.9a56,56,0,1,1,112-.9c0,28.7-21.5,52-48,52-10.5,0-17.8-3.7-22.8-8l14.6-58.1a8,8,0,1,0-15.6-3.8L85.4,217.5a4,4,0,0,1-5.7,2.6A104,104,0,1,1,232,131.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="120"
      y1="88"
      x2="88"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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
      x1="120"
      y1="88"
      x2="88"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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
      x1="120"
      y1="88"
      x2="88"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M61.5,156.6A80,80,0,1,1,208,112c0,44.2-32,72-64,72s-41.6-21.1-41.6-21.1"
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

const PinterestLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PinterestLogo.displayName = "PinterestLogo";

export default PinterestLogo;
