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
      d="M72.00244,24h112a8,8,0,0,1,8,8V77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72.00244,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128.00244"
      y1="120"
      x2="128.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="64.00244"
      y1="64"
      x2="192.00244"
      y2="64"
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
      d="M192.00244,77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V64h128Z"
      opacity="0.2"
    />
    <path
      d="M72.00244,24h112a8,8,0,0,1,8,8V77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72.00244,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.00244"
      y1="120"
      x2="128.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64.00244"
      y1="64"
      x2="192.00244"
      y2="64"
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
    <path d="M184.00244,16h-112a16.01833,16.01833,0,0,0-16,16V77.333a16.10105,16.10105,0,0,0,3.2002,9.60058l20.7998,27.7334V224a16.01833,16.01833,0,0,0,16,16h64a16.01833,16.01833,0,0,0,16-16l-.001-109.334,20.80274-27.7334a16.10719,16.10719,0,0,0,3.19824-9.59961V32A16.01833,16.01833,0,0,0,184.00244,16Zm-48,136a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM71.99805,56l-.00537-24H184.00244l.00049,24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M72.00244,24h112a8,8,0,0,1,8,8V77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72.00244,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128.00244"
      y1="120"
      x2="128.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="64.00244"
      y1="64"
      x2="192.00244"
      y2="64"
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
      d="M72.00244,24h112a8,8,0,0,1,8,8V77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72.00244,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128.00244"
      y1="120"
      x2="128.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="64.00244"
      y1="64"
      x2="192.00244"
      y2="64"
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
      d="M72.00244,24h112a8,8,0,0,1,8,8V77.33333a8,8,0,0,1-1.6,4.8l-20.8,27.73334a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8h-64a8,8,0,0,1-8-8V114.66667a8,8,0,0,0-1.6-4.8l-20.8-27.73334a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72.00244,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.00244"
      y1="120"
      x2="128.00244"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64.00244"
      y1="64"
      x2="192.00244"
      y2="64"
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

const Flashlight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Flashlight.displayName = "Flashlight";

export default Flashlight;
