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
      d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,112,210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L37.4,71.3a8,8,0,0,0-5.7,9.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="130.1"
      y1="46.4"
      x2="179.1"
      y2="74.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="60.6"
      y1="65.1"
      x2="109.5"
      y2="93.4"
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
      d="M210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L130.1,46.4l49,28.3Z"
      opacity="0.2"
    />
    <path
      d="M109.5,93.4,60.6,65.1,37.4,71.3a8,8,0,0,0-5.7,9.8L40,112Z"
      opacity="0.2"
    />
    <path
      d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,112,210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L37.4,71.3a8,8,0,0,0-5.7,9.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.1"
      y1="46.4"
      x2="179.1"
      y2="74.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60.6"
      y1="65.1"
      x2="109.5"
      y2="93.4"
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
    <path d="M216,104H100.8L212.1,74.2a7.9,7.9,0,0,0,4.8-3.8,7.5,7.5,0,0,0,.8-6l-8.3-30.9a15.8,15.8,0,0,0-19.5-11.3L35.3,63.6A15.9,15.9,0,0,0,24,83.2l8,29.9V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM169.3,69.1,99.7,87.7l-29.3-17,69.5-18.6ZM208,200H48V120H208v80Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,112,210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L37.4,71.3a8,8,0,0,0-5.7,9.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="130.1"
      y1="46.4"
      x2="179.1"
      y2="74.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="60.6"
      y1="65.1"
      x2="109.5"
      y2="93.4"
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
      d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,112,210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L37.4,71.3a8,8,0,0,0-5.7,9.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="130.1"
      y1="46.4"
      x2="179.1"
      y2="74.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="60.6"
      y1="65.1"
      x2="109.5"
      y2="93.4"
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
      d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,112,210,66.4l-8.3-30.9a7.9,7.9,0,0,0-9.8-5.6L37.4,71.3a8,8,0,0,0-5.7,9.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.1"
      y1="46.4"
      x2="179.1"
      y2="74.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60.6"
      y1="65.1"
      x2="109.5"
      y2="93.4"
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

const FilmSlate = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FilmSlate.displayName = "FilmSlate";

export default FilmSlate;
