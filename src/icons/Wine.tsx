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
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,24h96l26.1,88.3a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M57.5,100.3C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7"
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
      d="M200.4,106.7l1.7,5.6a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7l3.6-12h0C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,24h96l26.1,88.3a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.5,100.3C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7"
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
    <path d="M209.7,110l-26-88.3A8,8,0,0,0,176,16H80a8,8,0,0,0-7.7,5.7L46.3,110a31.5,31.5,0,0,0,1.5,22.2A88.1,88.1,0,0,0,120,183.6V224H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.6a88.1,88.1,0,0,0,72.2-51.4A31.5,31.5,0,0,0,209.7,110ZM131.6,96.8c-26.2-13-47.2-13-61.9-9.5L86,32h84l20.8,70.5C180.1,107,159.8,110.9,131.6,96.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,24h96l26.1,88.3a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M57.5,100.3C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7"
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
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,24h96l26.1,88.3a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M57.5,100.3C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7"
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
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,24h96l26.1,88.3a24.1,24.1,0,0,1-1.2,16.7,80,80,0,0,1-145.8,0,24.1,24.1,0,0,1-1.2-16.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.5,100.3C68.1,94.6,92.7,86.4,128,104c37.6,18.8,63.1,8.2,72.4,2.7"
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

const Wine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wine.displayName = "Wine";

export default Wine;
