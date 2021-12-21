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
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="132" cy="128" r="16" />
    <circle cx="180" cy="128" r="16" />
    <circle cx="84" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      opacity="0.2"
    />
    <path
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="132" cy="128" r="12" />
    <circle cx="84" cy="128" r="12" />
    <circle cx="180" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M132,24A100.2,100.2,0,0,0,32,124v84.3A15.7,15.7,0,0,0,47.7,224H132a100,100,0,0,0,0-200ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,180,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="132" cy="128" r="10" />
    <circle cx="180" cy="128" r="10" />
    <circle cx="84" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="132" cy="128" r="8" />
    <circle cx="84" cy="128" r="8" />
    <circle cx="180" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="132" cy="128" r="12" />
    <circle cx="84" cy="128" r="12" />
    <circle cx="180" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChatTeardropDots = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChatTeardropDots.displayName = "ChatTeardropDots";

export default ChatTeardropDots;
