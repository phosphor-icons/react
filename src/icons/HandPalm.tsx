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
      d="M128,104V52a20,20,0,0,1,40,0v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,112V36a20,20,0,0,1,40,0v68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44"
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
      d="M168,112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0V36a20,20,0,0,1,40,0V52a20,20,0,0,1,40,0Z"
      opacity="0.2"
    />
    <path
      d="M128,104V52a20,20,0,0,1,40,0v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,112V36a20,20,0,0,1,40,0v68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44"
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
    <path d="M188,84a27.83152,27.83152,0,0,0-12,2.707V52a27.992,27.992,0,0,0-41.35791-24.60278A27.99792,27.99792,0,0,0,80,36v6.707A27.991,27.991,0,0,0,40,68v84a88,88,0,0,0,176,0V112A28.03146,28.03146,0,0,0,188,84Zm12,68a72,72,0,0,1-144,0V68a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V52a12,12,0,0,1,24,0v72.6665A48.07871,48.07871,0,0,0,120,172a8,8,0,0,0,16,0,32.03635,32.03635,0,0,1,32-32,8.00008,8.00008,0,0,0,8-8V112a12,12,0,0,1,24,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,104V52a20,20,0,0,1,40,0v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,112V36a20,20,0,0,1,40,0v68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44"
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
      d="M128,104V52a20,20,0,0,1,40,0v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,112V36a20,20,0,0,1,40,0v68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44"
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
      d="M128,104V52a20,20,0,0,1,40,0v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,112V36a20,20,0,0,1,40,0v68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44"
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

const HandPalm = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HandPalm.displayName = "HandPalm";

export default HandPalm;
