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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M193.8943,200.486A79.69516,79.69516,0,0,1,160,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,128A79.62931,79.62931,0,0,1,91.06793,87.375"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M119.38894,59.05967A80.01177,80.01177,0,0,1,224.76359,174.97434"
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
      d="M80.00586,127.6178a80,80,0,1,1,80,80h-88A56,56,0,1,1,85.9251,97.36132"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M193.8943,200.486A79.69516,79.69516,0,0,1,160,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112.63246,63.52392a80.0033,80.0033,0,0,1,107.0479,117.75254"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,128A79.62931,79.62931,0,0,1,91.06793,87.375"
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
      <path d="M53.91943,34.61865a7.99991,7.99991,0,1,0-11.83886,10.7627L81.32349,88.54858c-.02.0398-.04187.07862-.06177.11841A64.00311,64.00311,0,1,0,72,216h88a87.30213,87.30213,0,0,0,31.79883-5.92847l10.28174,11.30982a7.99991,7.99991,0,0,0,11.83886-10.7627Z" />
      <path d="M160,40a87.31991,87.31991,0,0,0-52.10938,17.08057,8.00024,8.00024,0,0,0-1.17773,11.8247L213.76074,186.65771a8.00079,8.00079,0,0,0,5.91944,2.61866h.03466A7.99883,7.99883,0,0,0,225.646,186.606,88.00035,88.00035,0,0,0,160,40Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M193.8943,200.486A79.69516,79.69516,0,0,1,160,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M112.63246,63.52392a80.0033,80.0033,0,0,1,107.0479,117.75254"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,128A79.62931,79.62931,0,0,1,91.06793,87.375"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M193.8943,200.486A79.69516,79.69516,0,0,1,160,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M112.63246,63.52392a80.0033,80.0033,0,0,1,107.0479,117.75254"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,128A79.62931,79.62931,0,0,1,91.06793,87.375"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M193.8943,200.486A79.69516,79.69516,0,0,1,160,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112.63246,63.52392a80.0033,80.0033,0,0,1,107.0479,117.75254"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,128A79.62931,79.62931,0,0,1,91.06793,87.375"
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

const CloudSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CloudSlash.displayName = "CloudSlash";

export default CloudSlash;
