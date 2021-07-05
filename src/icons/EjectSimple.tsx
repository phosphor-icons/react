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
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
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
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
      opacity="0.2"
    />
    <path
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
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
    <path d="M26.36035,158.87646a15.86839,15.86839,0,0,1,2.0293-16.96582L115.582,34.59668a15.99968,15.99968,0,0,1,24.83594.00049l87.19238,107.313A16.00008,16.00008,0,0,1,215.19238,168H40.80762A15.87032,15.87032,0,0,1,26.36035,158.87646ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
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
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
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
      d="M121.79109,39.64174,34.59885,146.95526A8,8,0,0,0,40.80776,160H215.19224a8,8,0,0,0,6.20891-13.04474L134.20891,39.64174A8,8,0,0,0,121.79109,39.64174Z"
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
