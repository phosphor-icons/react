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
      x1="211.13844"
      y1="80"
      x2="44.86156"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,32A96,96,0,1,1,45.21664,176.64005"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M87.99413,106.14643,32.532,138.16712A97.09884,97.09884,0,0,1,32,128,96.0159,96.0159,0,0,1,87.99362,40.7076Z"
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
    <g opacity="0.2">
      <path d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z" />
    </g>
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
      x1="211.13844"
      y1="80"
      x2="44.86156"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32A96,96,0,1,1,45.21664,176.64005"
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
    <g>
      <path d="M99.99854,116.45312a7.99932,7.99932,0,0,0,4-6.92773V37.46289a8.00029,8.00029,0,0,0-10.666-7.54248,104.15035,104.15035,0,0,0-67.59863,117.0835,7.99907,7.99907,0,0,0,11.8667,5.47461Zm-12-66.86328v55.31641L40.11621,132.55078Q40.00048,130.27881,40,128A88.20107,88.20107,0,0,1,87.99854,49.58984Z" />
      <path d="M218.27124,76.39893c-.06738-.13331-.12878-.26807-.20435-.39893-.102-.17676-.21545-.34229-.32849-.50781A104.0515,104.0515,0,0,0,128,24a8.00008,8.00008,0,0,0-8,8v91.38135L40.86133,169.07178A8.00042,8.00042,0,0,0,37.93311,180c.03369.05811.07592.10791.11084.165.08837.17969.17614.35889.27929.53418A104.0111,104.0111,0,0,0,232,128,103.36465,103.36465,0,0,0,218.27124,76.39893Z" />
    </g>
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
      x1="211.13844"
      y1="80"
      x2="44.86156"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,32A96,96,0,1,1,45.21664,176.64005"
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
      x1="211.13844"
      y1="80"
      x2="44.86156"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,32A96,96,0,1,1,45.21664,176.64005"
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
      x1="211.13844"
      y1="80"
      x2="44.86156"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32A96,96,0,1,1,45.21664,176.64005"
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
