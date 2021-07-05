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
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
      opacity="0.2"
    />
    <circle cx="100" cy="116" r="12" />
    <circle cx="156" cy="116" r="12" />
    <path
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
    <path d="M128,24.00006A96.10871,96.10871,0,0,0,32,120v95.99994a7.9995,7.9995,0,0,0,13.06543,6.19141l24.26758-19.855,24.26855,19.855a8,8,0,0,0,10.13184,0L128,202.33638l24.2666,19.855a7.99878,7.99878,0,0,0,10.13184,0l24.26855-19.855,24.26758,19.855A7.9995,7.9995,0,0,0,224,215.99994V120A96.10871,96.10871,0,0,0,128,24.00006ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="100" cy="116" r="10" />
    <circle cx="156" cy="116" r="10" />
    <path
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
      d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
