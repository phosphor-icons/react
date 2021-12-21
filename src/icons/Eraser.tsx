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
      x1="91.5"
      y1="99.5"
      x2="159.4"
      y2="167.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
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
      d="M111,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L91.5,99.5l67.9,67.9Z"
      opacity="0.2"
    />
    <line
      x1="91.5"
      y1="99.5"
      x2="159.4"
      y2="167.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
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
    <path d="M216,207.8H130.3l34.8-34.7h0l56.6-56.6a24.1,24.1,0,0,0,0-33.9L176.4,37.3a24,24,0,0,0-33.9,0L85.9,93.9h0L29.3,150.5a24,24,0,0,0,0,33.9l37.1,37.1a7.9,7.9,0,0,0,5.7,2.3H216a8,8,0,0,0,0-16ZM153.8,48.6a8.1,8.1,0,0,1,11.3,0l45.2,45.3a7.9,7.9,0,0,1,0,11.3l-50.9,50.9L102.9,99.5Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="91.5"
      y1="99.5"
      x2="159.4"
      y2="167.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
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
      x1="91.5"
      y1="99.5"
      x2="159.4"
      y2="167.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
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
      x1="91.5"
      y1="99.5"
      x2="159.4"
      y2="167.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
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

const Eraser = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Eraser.displayName = "Eraser";

export default Eraser;
