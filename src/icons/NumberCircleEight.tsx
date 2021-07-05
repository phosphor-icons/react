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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
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
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
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
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm24.03125,150.04688a33.99637,33.99637,0,1,1-48.0625-48.09375,30.89828,30.89828,0,0,1,3.10645-2.50782c-.0918-.08984-.20313-.15136-.29395-.24218a29.98907,29.98907,0,0,1,.01563-42.42188c11.29687-11.3125,31.09375-11.32812,42.42187.01563a29.98907,29.98907,0,0,1-.01562,42.42187c-.08594.08594-.19141.14355-.27833.22852a30.83759,30.83759,0,0,1,3.12208,2.52148,33.98762,33.98762,0,0,1-.01563,48.07813Z" />
      <path d="M137.89063,111.90625a14,14,0,1,0-19.79688-.01562A14.318,14.318,0,0,0,137.89063,111.90625Z" />
      <path d="M128,132a17.99808,17.99808,0,0,0-12.73437,30.71875,18.43509,18.43509,0,0,0,25.45312.01563A18,18,0,0,0,128,132Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
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
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
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
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
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
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const NumberCircleEight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberCircleEight.displayName = "NumberCircleEight";

export default NumberCircleEight;
