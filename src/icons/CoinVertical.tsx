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
    <ellipse
      cx="104"
      cy="128"
      rx="56"
      ry="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,32h48c30.9,0,56,43,56,96s-25.1,96-56,96H104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="128"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="149.5"
      y1="184"
      x2="197.5"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="149.5"
      y1="72"
      x2="197.5"
      y2="72"
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
    <ellipse cx="104" cy="128" rx="56" ry="96" opacity="0.2" />
    <ellipse
      cx="104"
      cy="128"
      rx="56"
      ry="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,32h48c30.9,0,56,43,56,96s-25.1,96-56,96H104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="145.7"
      y1="64"
      x2="193.7"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="128"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="145.7"
      y1="192"
      x2="193.7"
      y2="192"
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
    <path d="M198.5,56.1C186.4,35.4,169.9,24,152,24H104C86.1,24,69.6,35.4,57.5,56.1S40,101,40,128s6.2,52.6,17.5,71.9S86.1,232,104,232h48c17.9,0,34.4-11.4,46.5-32.1S216,155,216,128,209.8,75.4,198.5,56.1Zm1.3,63.9h-32c-.8-17.2-4.1-33.7-9.7-48h30.6C194.8,85.4,198.9,102,199.8,120ZM179.2,56H150.5a89,89,0,0,0-12-16H152C162,40,171.4,46,179.2,56ZM152,216H138.5a89,89,0,0,0,12-16h28.7C171.4,210,162,216,152,216Zm36.7-32H158.1c5.6-14.3,8.9-30.8,9.7-48h32C198.9,154,194.8,170.6,188.7,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="104"
      cy="128"
      rx="56"
      ry="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,32h48c30.9,0,56,43,56,96s-25.1,96-56,96H104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="145.7"
      y1="64"
      x2="193.7"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="128"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="145.7"
      y1="192"
      x2="193.7"
      y2="192"
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
    <ellipse
      cx="104"
      cy="128"
      rx="56"
      ry="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,32h48c30.9,0,56,43,56,96s-25.1,96-56,96H104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="145.7"
      y1="64"
      x2="193.7"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="128"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="145.7"
      y1="192"
      x2="193.7"
      y2="192"
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
    <ellipse
      cx="104"
      cy="128"
      rx="56"
      ry="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,32h48c30.9,0,56,43,56,96s-25.1,96-56,96H104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="145.7"
      y1="64"
      x2="193.7"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="128"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="145.7"
      y1="192"
      x2="193.7"
      y2="192"
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

const CoinVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CoinVertical.displayName = "CoinVertical";

export default CoinVertical;
