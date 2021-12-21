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
    <circle cx="100" cy="116" r="16" />
    <circle cx="156" cy="116" r="16" />
    <path
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
      opacity="0.2"
    />
    <circle cx="100" cy="116" r="12" />
    <circle cx="156" cy="116" r="12" />
    <path
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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
    <path d="M128,24a96.2,96.2,0,0,0-96,96v96a8.1,8.1,0,0,0,13.1,6.2l24.2-19.9,24.3,19.9a8,8,0,0,0,10.1,0L128,202.3l24.3,19.9a8,8,0,0,0,10.1,0l24.3-19.9,24.2,19.9a7.9,7.9,0,0,0,8.5,1A7.9,7.9,0,0,0,224,216V120A96.2,96.2,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="100" cy="116" r="10" />
    <circle cx="156" cy="116" r="10" />
    <path
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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
    <circle cx="100" cy="116" r="8" />
    <circle cx="156" cy="116" r="8" />
    <path
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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
    <circle cx="100" cy="116" r="12" />
    <circle cx="156" cy="116" r="12" />
    <path
      d="M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z"
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

const Ghost = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Ghost.displayName = "Ghost";

export default Ghost;
