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
    <circle cx="64" cy="120" r="16" />
    <ellipse
      cx="64"
      cy="120"
      rx="40"
      ry="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="104"
      y1="120"
      x2="124"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="164"
      y1="120"
      x2="172"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="212"
      y1="120"
      x2="232"
      y2="120"
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
    <ellipse cx="64" cy="120" rx="40" ry="80" opacity="0.2" />
    <circle cx="64" cy="120" r="12" />
    <ellipse
      cx="64"
      cy="120"
      rx="40"
      ry="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="120"
      x2="128"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="120"
      x2="176"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="120"
      x2="232"
      y2="120"
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
    <path d="M184,120a7.99993,7.99993,0,0,1-8,8H160a8,8,0,0,1,0-16h16A7.99993,7.99993,0,0,1,184,120Zm56,0v88a16.01833,16.01833,0,0,1-16,16H112a16.01833,16.01833,0,0,1-16-16V186.34595C87.37219,200.36914,76.1825,208,64,208c-13.87256,0-26.459-9.89209-35.43945-27.854C20.46045,163.94678,16,142.58643,16,120c0-22.58667,4.46045-43.947,12.56055-60.14624C37.541,41.89185,50.12744,32,64,32H192c13.87256,0,26.459,9.89185,35.43945,27.85376C235.53955,76.053,240,97.41333,240,120ZM76,120a12,12,0,1,0-12,12A12,12,0,0,0,76,120Zm148,8H208a8,8,0,0,1,0-16h15.79443C221.84131,73.89966,206.16479,48,192,48H92.12109a73.18268,73.18268,0,0,1,7.31836,11.85376C106.57593,74.126,110.88281,92.40625,111.80762,112H128a8,8,0,0,1,0,16H112v80H224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="64" cy="120" r="10" />
    <ellipse
      cx="64"
      cy="120"
      rx="40"
      ry="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="120"
      x2="128"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="120"
      x2="176"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="208"
      y1="120"
      x2="232"
      y2="120"
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
    <circle cx="64" cy="120" r="8" />
    <ellipse
      cx="64"
      cy="120"
      rx="40"
      ry="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="120"
      x2="128"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="120"
      x2="176"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="208"
      y1="120"
      x2="232"
      y2="120"
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
    <circle cx="64" cy="120" r="12" />
    <ellipse
      cx="64"
      cy="120"
      rx="40"
      ry="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.18278-17.90861-80-40-80H64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="120"
      x2="128"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="120"
      x2="176"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="120"
      x2="232"
      y2="120"
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

const ToiletPaper = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ToiletPaper.displayName = "ToiletPaper";

export default ToiletPaper;
