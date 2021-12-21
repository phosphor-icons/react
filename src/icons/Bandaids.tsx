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
      d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
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
      d="M206.6,94.6a32,32,0,0,0-45.2-45.2L128,82.7,173.3,128Z"
      opacity="0.2"
    />
    <path
      d="M49.4,161.4a32,32,0,0,0,45.2,45.2L128,173.3,82.7,128Z"
      opacity="0.2"
    />
    <path
      d="M94.6,49.4A32,32,0,0,0,49.4,94.6L82.7,128,128,82.7Z"
      opacity="0.2"
    />
    <path
      d="M173.3,128,128,173.3l33.4,33.3a32,32,0,0,0,45.2-45.2Z"
      opacity="0.2"
    />
    <path
      d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      opacity="0.5"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <circle cx="128" cy="128" r="12" />
    <path d="M184.6,128l27.7-27.7a40,40,0,0,0-56.6-56.6L128,71.4,100.3,43.7a40,40,0,0,0-56.6,56.6L71.4,128,43.7,155.7a40,40,0,0,0,56.6,56.6L128,184.6l27.7,27.7a40,40,0,0,0,56.6-56.6ZM128,94.1,161.9,128,128,161.9,94.1,128ZM167,55a24,24,0,0,1,34,34l-27.7,27.7-34-34ZM89,201a24,24,0,0,1-34-34l27.7-27.7,34,34Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="128"
      cy="128"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
      opacity="0.5"
    />
    <circle cx="128" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="128"
      cy="128"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
      opacity="0.5"
    />
    <circle cx="128" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M49.4,94.6A32,32,0,0,1,94.6,49.4l112,112a32,32,0,0,1-45.2,45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.4,49.4a32,32,0,0,1,45.2,45.2l-112,112a32,32,0,0,1-45.2-45.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      opacity="0.5"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Bandaids = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Bandaids.displayName = "Bandaids";

export default Bandaids;
