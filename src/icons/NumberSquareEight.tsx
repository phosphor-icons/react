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
      d="M150,102a22,22,0,1,1-6.44365-15.55635A21.93114,21.93114,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M154,150a26,26,0,1,1-7.61522-18.38478A25.91866,25.91866,0,0,1,154,150Z"
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
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
    <path
      d="M150,102a22,22,0,1,1-6.44365-15.55635A21.93114,21.93114,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,150a26,26,0,1,1-7.61522-18.38478A25.91866,25.91866,0,0,1,154,150Z"
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
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <path d="M137.89062,111.90625a14,14,0,1,0-19.79687-.01562A14.318,14.318,0,0,0,137.89062,111.90625Z" />
      <path d="M128,132a17.99808,17.99808,0,0,0-12.73438,30.71875,18.43511,18.43511,0,0,0,25.45313.01563A18,18,0,0,0,128,132Z" />
      <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32ZM152.03125,174.04688a33.99637,33.99637,0,1,1-48.0625-48.09375,30.89715,30.89715,0,0,1,3.10645-2.50782c-.0918-.08984-.20313-.15136-.29395-.24218a29.98908,29.98908,0,0,1,.01562-42.42188c11.29688-11.3125,31.09375-11.32812,42.42188.01563a29.98906,29.98906,0,0,1-.01563,42.42187c-.08593.08594-.1914.14355-.27832.22852a30.83637,30.83637,0,0,1,3.12207,2.52148,33.98761,33.98761,0,0,1-.01562,48.07813Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M150,102a22,22,0,1,1-6.44365-15.55635A21.93114,21.93114,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M154,150a26,26,0,1,1-7.61522-18.38478A25.91866,25.91866,0,0,1,154,150Z"
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
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M150,102a22,22,0,1,1-6.44365-15.55635A21.93114,21.93114,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M154,150a26,26,0,1,1-7.61522-18.38478A25.91866,25.91866,0,0,1,154,150Z"
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
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M150,102a22,22,0,1,1-6.44365-15.55635A21.93114,21.93114,0,0,1,150,102Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,150a26,26,0,1,1-7.61522-18.38478A25.91866,25.91866,0,0,1,154,150Z"
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
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
