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
      rx="7.99999"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
      d="M173.25483,68.68629C161.94113,80,128,80,128,80s0-33.94113,11.31371-45.25483a24,24,0,0,1,33.94112,33.94112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M82.74517,68.68629C94.05887,80,128,80,128,80s0-33.94113-11.31371-45.25483A24,24,0,0,0,82.74517,68.68629Z"
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
      rx="7.99999"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
      d="M173.25483,68.68629C161.94113,80,128,80,128,80s0-33.94113,11.31371-45.25483a24,24,0,0,1,33.94112,33.94112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.74517,68.68629C94.05887,80,128,80,128,80s0-33.94113-11.31371-45.25483A24,24,0,0,0,82.74517,68.68629Z"
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
    <path d="M216,72H181.03271a31.99968,31.99968,0,0,0-47.37646-42.91162A30.99155,30.99155,0,0,0,128,37.2998a31.01227,31.01227,0,0,0-5.65723-8.21191A31.99948,31.99948,0,0,0,74.96729,72H40A16.01817,16.01817,0,0,0,24,88v32a16.01817,16.01817,0,0,0,16,16v64a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V136a16.01817,16.01817,0,0,0,16-16V88A16.01817,16.01817,0,0,0,216,72ZM144.96973,40.4021a16.00019,16.00019,0,1,1,22.62793,22.62744c-4.94043,4.94116-19.22559,7.71582-31.25684,8.6294C137.25488,59.62671,140.0293,45.34277,144.96973,40.4021Zm-56.56836,0a16.0194,16.0194,0,0,1,22.62793-.00024c4.9414,4.94116,7.71582,19.22631,8.62988,31.25683-12.03223-.91382-26.31641-3.68848-31.25684-8.62915A16.01925,16.01925,0,0,1,88.40137,40.4021ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80l.00977,31.99951Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="32"
      y="80"
      width="192"
      height="48"
      rx="7.99999"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
      d="M173.25483,68.68629C161.94113,80,128,80,128,80s0-33.94113,11.31371-45.25483a24,24,0,0,1,33.94112,33.94112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M82.74517,68.68629C94.05887,80,128,80,128,80s0-33.94113-11.31371-45.25483A24,24,0,0,0,82.74517,68.68629Z"
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
      rx="7.99999"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
      d="M173.25483,68.68629C161.94113,80,128,80,128,80s0-33.94113,11.31371-45.25483a24,24,0,0,1,33.94112,33.94112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M82.74517,68.68629C94.05887,80,128,80,128,80s0-33.94113-11.31371-45.25483A24,24,0,0,0,82.74517,68.68629Z"
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
      rx="7.99999"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
      d="M173.25483,68.68629C161.94113,80,128,80,128,80s0-33.94113,11.31371-45.25483a24,24,0,0,1,33.94112,33.94112Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.74517,68.68629C94.05887,80,128,80,128,80s0-33.94113-11.31371-45.25483A24,24,0,0,0,82.74517,68.68629Z"
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
