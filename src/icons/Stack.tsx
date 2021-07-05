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
      points="32 176 128 232 224 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="32 128 128 184 224 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="32 80 128 136 224 80 128 24 32 80"
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
    <polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2" />
    <polyline
      points="32 176 128 232 224 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="32 128 128 184 224 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="32 80 128 136 224 80 128 24 32 80"
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
      <path d="M219.96875,169.08984,128,222.73828,36.03125,169.08984a8.00008,8.00008,0,0,0-8.0625,13.82032l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00008,8.00008,0,0,0-8.0625-13.82032Z" />
      <path d="M219.96875,121.08984,128,174.73828,36.03125,121.08984a8.00008,8.00008,0,0,0-8.0625,13.82032l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00008,8.00008,0,0,0-8.0625-13.82032Z" />
      <path d="M27.96875,86.91016l96,56a8.00059,8.00059,0,0,0,8.0625,0l96-56a8.00016,8.00016,0,0,0,0-13.82032l-96-56a8.00059,8.00059,0,0,0-8.0625,0l-96,56a8.00016,8.00016,0,0,0,0,13.82032Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="32 176 128 232 224 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="32 128 128 184 224 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="32 80 128 136 224 80 128 24 32 80"
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
      points="32 176 128 232 224 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="32 128 128 184 224 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="32 80 128 136 224 80 128 24 32 80"
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
      points="32 176 128 232 224 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="32 128 128 184 224 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="32 80 128 136 224 80 128 24 32 80"
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

const Stack = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Stack.displayName = "Stack";

export default Stack;
