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
      d="M208,100,94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M68,136s20-16,52,0,52,0,52,0L94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52Z"
      opacity="0.2"
    />
    <path
      d="M208,100,94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
    <path d="M237.7,86.3l-60-60a8.1,8.1,0,0,0-11.4,0L62.4,130.3h0l-26.1,26a44.8,44.8,0,0,0,63.4,63.4l77.9-78h0L212.3,107l22.2-7.4a8.2,8.2,0,0,0,5.3-5.8A8.3,8.3,0,0,0,237.7,86.3Zm-32.2,6.1a9.4,9.4,0,0,0-3.2,1.9l-35.6,35.6c-2.1,1.6-17.9,11.6-43.1-1.1-11-5.5-20.8-7.6-29.2-7.9L172,43.3l45.2,45.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,100,94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M208,100,94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M208,100,94,214a36.7,36.7,0,0,1-52,0h0a36.7,36.7,0,0,1,0-52L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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

const TestTube = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TestTube.displayName = "TestTube";

export default TestTube;
