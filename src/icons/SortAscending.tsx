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
    <polyline
      points="144 167.994 184 207.994 223.999 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="184"
      y1="111.99347"
      x2="184"
      y2="207.99347"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="127.99353"
      x2="119.99902"
      y2="127.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="63.99353"
      x2="183.99902"
      y2="63.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="191.99353"
      x2="104"
      y2="191.99353"
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
      points="144 167.994 184 207.994 223.999 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="111.99347"
      x2="184"
      y2="207.99347"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="127.99353"
      x2="119.99902"
      y2="127.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="63.99353"
      x2="183.99902"
      y2="63.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="191.99353"
      x2="104"
      y2="191.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M229.65527,173.65759l-39.999,39.99317a8,8,0,0,1-11.313,0l-40-40A8.00037,8.00037,0,0,1,144,159.99353h.001l31.999.00293V111.99353a8,8,0,0,1,16,0v48.00391l32,.00293a7.99976,7.99976,0,0,1,5.65527,13.65722ZM119.999,119.99353H48a8,8,0,0,0,0,16h71.999a8,8,0,1,0,0-16Zm-71.999-48H183.999a8,8,0,0,0,0-16H48a8,8,0,1,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="144 167.994 184 207.994 223.999 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="184"
      y1="111.99347"
      x2="184"
      y2="207.99347"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="127.99353"
      x2="119.99902"
      y2="127.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="63.99353"
      x2="183.99902"
      y2="63.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="191.99353"
      x2="104"
      y2="191.99353"
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
      points="144 167.994 184 207.994 223.999 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="184"
      y1="111.99347"
      x2="184"
      y2="207.99347"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="127.99353"
      x2="119.99902"
      y2="127.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="63.99353"
      x2="183.99902"
      y2="63.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="191.99353"
      x2="104"
      y2="191.99353"
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
      points="144 167.994 184 207.994 223.999 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="111.99347"
      x2="184"
      y2="207.99347"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="127.99353"
      x2="119.99902"
      y2="127.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="63.99353"
      x2="183.99902"
      y2="63.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="191.99353"
      x2="104"
      y2="191.99353"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SortAscending = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SortAscending.displayName = "SortAscending";

export default SortAscending;
