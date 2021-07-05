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
      x1="24"
      y1="216"
      x2="168"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
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
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
      opacity="0.2"
    />
    <line
      x1="24"
      y1="216"
      x2="168"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
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
    <path d="M176,216a8.00008,8.00008,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8.00008,8.00008,0,0,1,176,216ZM247.0957,89.4668,228.45605,66.686a35.81374,35.81374,0,0,0-46.11523-8.2334L139.53906,83.62988,81.26465,64.20508a4.0083,4.0083,0,0,0-2.83985.11816l-16.5,7.0708A12.00078,12.00078,0,0,0,58.625,91.34375L85.21191,115.272l-21.46679,12.2666L37.5752,116.32324a4.00251,4.00251,0,0,0-3.1504,0l-16.75292,7.17969a12.00032,12.00032,0,0,0-3.48145,19.78418h.001l37.69531,35.33935a35.78229,35.78229,0,0,0,42.7168,4.85938L246.01074,95.458a4.001,4.001,0,0,0,1.085-5.99121Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="24"
      y1="216"
      x2="168"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
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
      x1="24"
      y1="216"
      x2="168"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
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
      x1="24"
      y1="216"
      x2="168"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M16.92713,140.36918,54.6225,175.70859a32,32,0,0,0,37.97,4.319L244,92,225.3607,69.21863a32,32,0,0,0-40.99128-7.31829L140,88,80,68,63.501,75.071a8,8,0,0,0-2.20037,13.29951L92,116,64,132,36,120l-16.7527,7.17973A8,8,0,0,0,16.92713,140.36918Z"
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

const AirplaneTakeoff = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AirplaneTakeoff.displayName = "AirplaneTakeoff";

export default AirplaneTakeoff;
