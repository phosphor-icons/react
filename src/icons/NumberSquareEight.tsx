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
      d="M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
    <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
    <path
      d="M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
    <path d="M137.9,111.9a14,14,0,1,0-19.8,0A14.3,14.3,0,0,0,137.9,111.9Z" />
    <path d="M128,132a18,18,0,0,0-12.7,30.7,18.4,18.4,0,0,0,25.4,0A18,18,0,0,0,128,132Z" />
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,174a33.9,33.9,0,1,1-48-48,26.6,26.6,0,0,1,3.1-2.6l-.3-.2a29.9,29.9,0,0,1,0-42.4c11.3-11.3,31.1-11.3,42.4,0a29.9,29.9,0,0,1,0,42.4l-.3.2A26.6,26.6,0,0,1,152,126a33.8,33.8,0,0,1,0,48Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
      d="M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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
      d="M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
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

const NumberSquareEight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberSquareEight.displayName = "NumberSquareEight";

export default NumberSquareEight;
