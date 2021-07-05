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
      d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="136"
      y1="64"
      x2="192"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44"
      y1="156"
      x2="100"
      y2="212"
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
      d="M136,64l56,56,26.34315-26.34315a8,8,0,0,0,0-11.3137l-44.6863-44.6863a8,8,0,0,0-11.3137,0Z"
      opacity="0.2"
    />
    <line
      x1="95.48882"
      y1="215.48882"
      x2="40.5088"
      y2="160.5088"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="64"
      x2="192"
      y2="120"
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
    <path d="M224,76.68652,179.314,32a15.99948,15.99948,0,0,0-22.62744,0L130.34473,58.3418l-.00147.00146-.00146.00147L36.687,151.99951A15.89429,15.89429,0,0,0,32,163.31348V208a16.01833,16.01833,0,0,0,16,16H92.68652A15.89438,15.89438,0,0,0,104,219.31348l120.00049-120A16.01823,16.01823,0,0,0,224,76.68652Zm-32,32L147.31372,64,168,43.31348,212.68652,88Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="136"
      y1="64"
      x2="192"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="95.48882"
      y1="215.48882"
      x2="40.5088"
      y2="160.5088"
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
      d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="136"
      y1="64"
      x2="192"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="95.48882"
      y1="215.48882"
      x2="40.5088"
      y2="160.5088"
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
      d="M92.68629,216H48a8,8,0,0,1-8-8V163.31371a8,8,0,0,1,2.34315-5.65686l120-120a8,8,0,0,1,11.3137,0l44.6863,44.6863a8,8,0,0,1,0,11.3137l-120,120A8,8,0,0,1,92.68629,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="64"
      x2="192"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="95.48882"
      y1="215.48882"
      x2="40.5088"
      y2="160.5088"
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

const Pencil = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Pencil.displayName = "Pencil";

export default Pencil;
