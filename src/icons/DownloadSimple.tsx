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
    <polyline
      points="86 110.011 128 152 170 110.011"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="151.97057"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
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
    <polyline
      points="86 110.011 128 152 170 110.011"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="151.97057"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
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
    <path d="M80.34375,115.668a7.99983,7.99983,0,1,1,11.3125-11.31445L120,132.6897V40a8,8,0,0,1,16,0v92.6897l28.34375-28.33618a7.99983,7.99983,0,1,1,11.3125,11.31445l-42,41.98926a7.99945,7.99945,0,0,1-11.3125,0ZM216,144a8.00039,8.00039,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A8.00039,8.00039,0,0,0,216,144Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="86 110.011 128 152 170 110.011"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="151.97057"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
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
    <polyline
      points="86 110.011 128 152 170 110.011"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="151.97057"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
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
    <polyline
      points="86 110.011 128 152 170 110.011"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="151.97057"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
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

const DownloadSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DownloadSimple.displayName = "DownloadSimple";

export default DownloadSimple;
