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
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
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
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
      opacity="0.2"
    />
    <path
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
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
    <path d="M240.6,128a15.8,15.8,0,0,1-10.5,15l-63.9,23.2L143,230.1a16,16,0,0,1-30,0L89.8,166.2,25.9,143a16,16,0,0,1,0-30L89.8,89.8,113,25.9a16,16,0,0,1,30,0l23.2,63.9L230.1,113A15.8,15.8,0,0,1,240.6,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
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
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
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
      d="M158.7,163.5l-23.2,63.8a8,8,0,0,1-15,0L97.3,163.5a8.1,8.1,0,0,0-4.8-4.8L28.7,135.5a8,8,0,0,1,0-15L92.5,97.3a8.1,8.1,0,0,0,4.8-4.8l23.2-63.8a8,8,0,0,1,15,0l23.2,63.8a8.1,8.1,0,0,0,4.8,4.8l63.8,23.2a8,8,0,0,1,0,15l-63.8,23.2A8.1,8.1,0,0,0,158.7,163.5Z"
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

const StarFour = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

StarFour.displayName = "StarFour";

export default StarFour;
