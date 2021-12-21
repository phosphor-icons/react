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
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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
    <path d="M139.3,173.3,111,201.5a39.7,39.7,0,0,1-56.5,0,40,40,0,0,1,0-56.5l28.2-28.3a8,8,0,0,0-11.3-11.3L43.1,133.7a56,56,0,0,0,79.2,79.2l28.3-28.3a8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,139.3,173.3Z" />
    <path d="M212.9,43.1a56,56,0,0,0-79.2,0L105.4,71.4a8,8,0,0,0,11.3,11.3L145,54.5a39.7,39.7,0,0,1,56.5,0,40,40,0,0,1,0,56.5l-28.2,28.3a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l28.3-28.3A56.1,56.1,0,0,0,212.9,43.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1"
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

const LinkSimpleBreak = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LinkSimpleBreak.displayName = "LinkSimpleBreak";

export default LinkSimpleBreak;
