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
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
      opacity="0.2"
    />
    <path
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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
    <path d="M218.8,103.7h0L138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.5A16,16,0,0,0,218.8,103.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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
      d="M213.4,109.6l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.5A8.3,8.3,0,0,0,213.4,109.6Z"
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

const HouseSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HouseSimple.displayName = "HouseSimple";

export default HouseSimple;
