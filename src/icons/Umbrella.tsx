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
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,136c0-72,40-104,40-104s40,32,40,104"
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
      d="M128,32a104.00963,104.00963,0,0,1,103.64049,95.29055A8.021,8.021,0,0,1,223.66543,136H168c0-72-40-104-40-104"
      opacity="0.2"
    />
    <path
      d="M128,32A104.00963,104.00963,0,0,0,24.35951,127.29055,8.021,8.021,0,0,0,32.33457,136H88c0-72,40-104,40-104"
      opacity="0.2"
    />
    <path
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,136c0-72,40-104,40-104s40,32,40,104"
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
    <path d="M239.61328,126.62988A112.0108,112.0108,0,0,0,128.00684,24h-.01368A112.0108,112.0108,0,0,0,16.38672,126.62988,16.02123,16.02123,0,0,0,32.33447,144H120v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h87.66553a16.02123,16.02123,0,0,0,15.94775-17.37012ZM32.332,127.95215a95.97942,95.97942,0,0,1,75.85645-85.874C96.47266,58.05713,81.84521,86.12988,80.16553,128H32.33447ZM175.83447,128c-1.67968-41.87012-16.30713-69.94287-28.023-85.92188A95.96509,95.96509,0,0,1,223.66553,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,136c0-72,40-104,40-104s40,32,40,104"
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
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,136c0-72,40-104,40-104s40,32,40,104"
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
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,136c0-72,40-104,40-104s40,32,40,104"
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

const Umbrella = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Umbrella.displayName = "Umbrella";

export default Umbrella;
