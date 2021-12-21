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
      cx="128"
      cy="104"
      rx="104"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="192"
      y1="142.1"
      x2="192"
      y2="190.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="64"
      y1="142.1"
      x2="64"
      y2="190.1"
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
    <ellipse cx="128" cy="104" rx="104" ry="48" opacity="0.2" />
    <ellipse
      cx="128"
      cy="104"
      rx="104"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="142.1"
      x2="192"
      y2="190.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64"
      y1="142.1"
      x2="64"
      y2="190.1"
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
    <path d="M207.6,63.8C186.8,53.5,159.3,48,128,48S69.2,53.5,48.4,63.8,16,88.8,16,104v48c0,15.2,11.8,29.9,32.4,40.2S96.7,208,128,208s58.8-5.5,79.6-15.8S240,167.2,240,152V104C240,88.8,228.2,74.1,207.6,63.8ZM120,159.9v32c-19-.7-35-3.5-48-7.5V153C86.3,157,102.5,159.3,120,159.9Zm16,0c17.5-.6,33.7-2.9,48-6.9v31.4c-13,4-29,6.8-48,7.5ZM32,152V133.5a84.5,84.5,0,0,0,16.4,10.7l7.6,3.4V178C40.2,170.2,32,160.3,32,152Zm168,26V147.6l7.6-3.4A84.5,84.5,0,0,0,224,133.5V152C224,160.3,215.8,170.2,200,178Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="104"
      rx="104"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="192"
      y1="142.1"
      x2="192"
      y2="190.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="64"
      y1="142.1"
      x2="64"
      y2="190.1"
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
      cx="128"
      cy="104"
      rx="104"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="192"
      y1="142.1"
      x2="192"
      y2="190.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="64"
      y1="142.1"
      x2="64"
      y2="190.1"
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
      cx="128"
      cy="104"
      rx="104"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="142.1"
      x2="192"
      y2="190.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64"
      y1="142.1"
      x2="64"
      y2="190.1"
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

const Coin = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Coin.displayName = "Coin";

export default Coin;
