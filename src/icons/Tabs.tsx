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
      d="M12,168,34.3,93.7A8,8,0,0,1,42,88h60a8,8,0,0,1,7.7,5.7L132,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M148,88h10a8,8,0,0,1,7.7,5.7L188,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M204,88h10a8,8,0,0,1,7.7,5.7L244,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="12"
      y1="168"
      x2="244"
      y2="168"
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
      d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168Z"
      opacity="0.2"
    />
    <path
      d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="8"
      y1="168"
      x2="248"
      y2="168"
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
    <path d="M256,168a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8,8.5,8.5,0,0,1,.3-2.3H.4L22.6,91.4A16,16,0,0,1,38,80h84a16,16,0,0,1,15.4,11.4L158,160h31.2L170,96H160a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4L206,160h31.2L218,96H208a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4l22.2,74.2h.1A8.5,8.5,0,0,1,256,168Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="8"
      y1="168"
      x2="248"
      y2="168"
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
      d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="8"
      y1="168"
      x2="248"
      y2="168"
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
      d="M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,88h10a8,8,0,0,1,7.7,5.7L200,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,88h10a8,8,0,0,1,7.7,5.7L248,168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="8"
      y1="168"
      x2="248"
      y2="168"
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

const Tabs = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Tabs.displayName = "Tabs";

export default Tabs;
