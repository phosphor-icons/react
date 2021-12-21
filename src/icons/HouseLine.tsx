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
      d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
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
      d="M152,216V152H104v64H40V115.5a7.9,7.9,0,0,1,2.6-5.9l80-72.7a7.9,7.9,0,0,1,10.7,0l80.1,72.7a8.3,8.3,0,0,1,2.6,5.9V216Z"
      opacity="0.2"
    />
    <path
      d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9L133.3,36.9a7.9,7.9,0,0,0-10.7,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
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
    <path d="M240,208H224V115.5a15.7,15.7,0,0,0-5.3-11.8L138.7,31a15.9,15.9,0,0,0-21.5,0l-80,72.7A16,16,0,0,0,32,115.5V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-88,0H104V160a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
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
      d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a7.9,7.9,0,0,0-2.6,5.9V216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
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
      d="M216,216V115.5a8.3,8.3,0,0,0-2.6-5.9l-80-72.7a8,8,0,0,0-10.8,0l-80,72.7a8.3,8.3,0,0,0-2.6,5.9V216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56"
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

const HouseLine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HouseLine.displayName = "HouseLine";

export default HouseLine;
