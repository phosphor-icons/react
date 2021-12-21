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
      d="M24,128c104-224,104,224,208,0"
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
    <path d="M24,128c104-224,104,224,208,0Z" opacity="0.2" />
    <path
      d="M24,128c104-224,104,224,208,0"
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
    <path d="M178,200.7c-25.1,0-40.7-33.7-57.3-69.3-13-28.2-27.8-60.1-42.7-60.1s-36.3,37.6-46.7,60.1a8.1,8.1,0,1,1-14.6-6.8C38.7,77.4,58.1,55.3,78,55.3c25.1,0,40.7,33.7,57.3,69.3,13,28.2,27.8,60.1,42.7,60.1,16.4,0,36.3-37.6,46.7-60.1a8.1,8.1,0,0,1,14.6,6.8C217.3,178.6,197.9,200.7,178,200.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M24,128c104-224,104,224,208,0"
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
      d="M24,128c104-224,104,224,208,0"
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
      d="M24,128c104-224,104,224,208,0"
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

const WaveSine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WaveSine.displayName = "WaveSine";

export default WaveSine;
