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
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
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
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
      opacity="0.2"
    />
    <path
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
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
    <path d="M240.58984,128a15.84794,15.84794,0,0,1-10.53125,15.03711l-63.81543,23.206-23.206,63.81543a16.001,16.001,0,0,1-30.07422,0L89.75684,166.24316l-63.81543-23.206a16.001,16.001,0,0,1,0-30.07422L89.75684,89.75684l23.20605-63.81543a16.001,16.001,0,0,1,30.07422,0l23.206,63.81543,63.81543,23.20605A15.84794,15.84794,0,0,1,240.58984,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
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
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
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
      d="M158.72416,163.50856l-23.20581,63.816a8,8,0,0,1-15.0367,0l-23.20581-63.816a8,8,0,0,0-4.7844-4.7844l-63.816-23.20581a8,8,0,0,1,0-15.0367l63.816-23.20581a8,8,0,0,0,4.7844-4.7844l23.20581-63.816a8,8,0,0,1,15.0367,0l23.20581,63.816a8,8,0,0,0,4.7844,4.7844l63.816,23.20581a8,8,0,0,1,0,15.0367l-63.816,23.20581A8,8,0,0,0,158.72416,163.50856Z"
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
