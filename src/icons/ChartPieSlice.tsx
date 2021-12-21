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
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="211.1"
      y1="80"
      x2="44.9"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,32A96,96,0,1,1,45.2,176.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,106.1,32.5,138.2c-.3-3.4-.5-6.8-.5-10.2A96,96,0,0,1,88,40.7Z"
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
      d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="80"
      x2="44.9"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32A96,96,0,1,1,45.2,176.6"
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
    <path d="M100,116.5a8.1,8.1,0,0,0,4-7v-72a8,8,0,0,0-10.7-7.6A104.3,104.3,0,0,0,24,128a109.1,109.1,0,0,0,1.7,19,8.1,8.1,0,0,0,4.5,5.8,8.4,8.4,0,0,0,3.4.8,8,8,0,0,0,4-1.1ZM88,49.6v55.3L40.1,132.6c-.1-1.6-.1-3.1-.1-4.6A88.3,88.3,0,0,1,88,49.6Z" />
    <path d="M218.3,76.4a.8.8,0,0,1-.2-.4l-.4-.5A103.9,103.9,0,0,0,128,24a8,8,0,0,0-8,8v91.4L40.9,169.1a7.9,7.9,0,0,0-3,10.9v.2l.3.5A104,104,0,0,0,232,128,103.5,103.5,0,0,0,218.3,76.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="211.1"
      y1="80"
      x2="44.9"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,32A96,96,0,1,1,45.2,176.6"
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
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="211.1"
      y1="80"
      x2="44.9"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,32A96,96,0,1,1,45.2,176.6"
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
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="80"
      x2="44.9"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32A96,96,0,1,1,45.2,176.6"
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

const ChartPieSlice = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChartPieSlice.displayName = "ChartPieSlice";

export default ChartPieSlice;
