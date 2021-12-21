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
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="224"
      y1="208"
      x2="32"
      y2="208"
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
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      opacity="0.2"
    />
    <path
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="208"
      x2="32"
      y2="208"
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
    <path d="M26.4,158.9a15.9,15.9,0,0,1,2-17L115.6,34.6a16,16,0,0,1,24.8,0l87.2,107.3A16,16,0,0,1,215.2,168H40.8A15.8,15.8,0,0,1,26.4,158.9ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="224"
      y1="208"
      x2="32"
      y2="208"
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
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="224"
      y1="208"
      x2="32"
      y2="208"
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
      d="M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="208"
      x2="32"
      y2="208"
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

const EjectSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EjectSimple.displayName = "EjectSimple";

export default EjectSimple;
