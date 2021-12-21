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
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="16"
      y1="128"
      x2="240"
      y2="128"
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
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      opacity="0.2"
    />
    <path
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="128"
      x2="240"
      y2="128"
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
    <path d="M32,120v16H16a8,8,0,0,1,0-16Zm0,57.3a16,16,0,0,0,13.1,15.8l160,29.1h0l2.9.2a16.5,16.5,0,0,0,10.3-3.7,16.1,16.1,0,0,0,5.7-12.3V136H32ZM240,120H224v16h16a8,8,0,0,0,0-16ZM224,49.6a16.1,16.1,0,0,0-5.7-12.3,16.6,16.6,0,0,0-13.2-3.5L45.1,62.9A16,16,0,0,0,32,78.7V120H224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="16"
      y1="128"
      x2="240"
      y2="128"
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
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="16"
      y1="128"
      x2="240"
      y2="128"
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
      d="M206.6,214.3l-160-29.1a8,8,0,0,1-6.6-7.9V78.7a8,8,0,0,1,6.6-7.9l160-29.1a8,8,0,0,1,9.4,7.9V206.4A8,8,0,0,1,206.6,214.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="128"
      x2="240"
      y2="128"
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

const Perspective = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Perspective.displayName = "Perspective";

export default Perspective;
