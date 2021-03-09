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
    <circle
      cx="128.00098"
      cy="63.99707"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128.00098"
      y1="215.99707"
      x2="128.00098"
      y2="87.99707"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56.001,119.99707h-24a96,96,0,0,0,192,0h-24"
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
    <circle
      cx="128.00098"
      cy="63.99707"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.00098"
      y1="215.99707"
      x2="128.00098"
      y2="87.99707"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56.001,119.99707h-24a96,96,0,0,0,192,0h-24"
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
    <path d="M224.001,111.99707h-24a8,8,0,0,0,0,16h15.63964A88.14248,88.14248,0,0,1,136.001,207.626V94.98437a32,32,0,1,0-16,0V207.626a88.1425,88.1425,0,0,1-79.63965-79.62891H56.001a8,8,0,0,0,0-16h-24a8.00039,8.00039,0,0,0-8,8,104,104,0,0,0,208,0A8.00039,8.00039,0,0,0,224.001,111.99707Zm-112-48a16,16,0,1,1,16,16A16.01833,16.01833,0,0,1,112.001,63.99707Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128.00098"
      cy="63.99707"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128.00098"
      y1="215.99707"
      x2="128.00098"
      y2="87.99707"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56.001,119.99707h-24a96,96,0,0,0,192,0h-24"
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
    <circle
      cx="128.00098"
      cy="63.99707"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128.00098"
      y1="215.99707"
      x2="128.00098"
      y2="87.99707"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56.001,119.99707h-24a96,96,0,0,0,192,0h-24"
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
    <circle
      cx="128.00098"
      cy="63.99707"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.00098"
      y1="215.99707"
      x2="128.00098"
      y2="87.99707"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56.001,119.99707h-24a96,96,0,0,0,192,0h-24"
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

const AnchorSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AnchorSimple.displayName = "AnchorSimple";

export default AnchorSimple;
