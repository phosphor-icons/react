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
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
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
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z" opacity="0.2" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M216,72H181a32,32,0,0,0-47.3-42.9,29.2,29.2,0,0,0-5.7,8.2,29.2,29.2,0,0,0-5.7-8.2A32,32,0,0,0,75,72H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM145,40.4A16,16,0,1,1,167.6,63c-4.9,5-19.2,7.7-31.3,8.7C137.3,59.6,140,45.3,145,40.4Zm-56.6,0a16.1,16.1,0,0,1,22.6,0c5,4.9,7.7,19.2,8.7,31.3-12.1-1-26.4-3.7-31.3-8.7A16.1,16.1,0,0,1,88.4,40.4ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80v32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
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
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
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
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
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

const Gift = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Gift.displayName = "Gift";

export default Gift;
