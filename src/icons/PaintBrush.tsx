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
      d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M112.4,116.2C131.6,90.3,180.4,31,225,31c0,44.6-59.3,93.4-85.2,112.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M138.4,84.6a90.8,90.8,0,0,1,33,33"
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
      d="M133,90.6A85.4,85.4,0,0,1,165.4,123C192.7,99.1,225,63.9,225,31,192.1,31,156.9,63.3,133,90.6Z"
      opacity="0.2"
    />
    <path
      d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112.4,116.2C131.6,90.3,180.4,31,225,31c0,44.6-59.3,93.4-85.2,112.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M133,90.6A85.4,85.4,0,0,1,165.4,123"
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
    <path d="M225,23c-21.3,0-45.3,11.8-71.1,34.9-18.1,16.2-33.6,34.7-44.3,48.7A60.1,60.1,0,0,0,32,164c0,31.2-16.2,45.1-17,45.8a7.7,7.7,0,0,0-2.5,8.8A7.8,7.8,0,0,0,20,224H92a60.1,60.1,0,0,0,57.4-77.6c14-10.7,32.5-26.2,48.7-44.3C221.2,76.3,233,52.3,233,31A8,8,0,0,0,225,23ZM124.4,113.6c2.9-3.7,6.3-7.9,10.2-12.5a75.4,75.4,0,0,1,20.3,20.3c-4.6,3.9-8.8,7.3-12.5,10.2A59.4,59.4,0,0,0,124.4,113.6Zm42.6-2.9A93.1,93.1,0,0,0,145.3,89c19.6-21.2,46-44.4,70.8-49.1C211.4,64.7,188.2,91.1,167,110.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M112.4,116.2C131.6,90.3,180.4,31,225,31c0,44.6-59.3,93.4-85.2,112.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M133,90.6A85.4,85.4,0,0,1,165.4,123"
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
      d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M112.4,116.2C131.6,90.3,180.4,31,225,31c0,44.6-59.3,93.4-85.2,112.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M133,90.6A85.4,85.4,0,0,1,165.4,123"
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
      d="M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112.4,116.2C131.6,90.3,180.4,31,225,31c0,44.6-59.3,93.4-85.2,112.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M133,90.6A85.4,85.4,0,0,1,165.4,123"
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

const PaintBrush = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaintBrush.displayName = "PaintBrush";

export default PaintBrush;
