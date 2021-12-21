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
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="156" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z" opacity="0.2" />
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-76a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="156" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="156" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Door = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Door.displayName = "Door";

export default Door;
