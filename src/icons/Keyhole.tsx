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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M146.6,129A28,28,0,1,0,100,108a28.5,28.5,0,0,0,9.4,21L98.9,165.8a8,8,0,0,0,7.7,10.2h42.8a8,8,0,0,0,7.7-10.2Z"
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
      d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
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
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm18.4-81.8,12.5,29.1a12,12,0,0,1-11,16.7H108.1a12,12,0,0,1-11-16.7l12.5-29.1a32,32,0,0,1-2.9-50.1,32.4,32.4,0,0,1,25-7.9,32,32,0,0,1,14.7,58Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M141.4,132.6a28,28,0,1,0-26.8,0l-13.8,32.2a8,8,0,0,0,7.3,11.2h39.8a8,8,0,0,0,7.3-11.2Z"
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

const Keyhole = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Keyhole.displayName = "Keyhole";

export default Keyhole;
