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
      d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="126.8"
      y1="162.4"
      x2="166.6"
      y2="202.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="54"
      y1="89.6"
      x2="93.7"
      y2="129.4"
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
      d="M126.8,162.4l39.8,39.8-32.9,32.3a8.1,8.1,0,0,1-11.3-.1L93.7,205.7a8.1,8.1,0,0,1,.1-11.4Z"
      opacity="0.2"
    />
    <path
      d="M93.7,129.4,54,89.6,21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      opacity="0.2"
    />
    <path
      d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="126.8"
      y1="162.4"
      x2="166.6"
      y2="202.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="54"
      y1="89.6"
      x2="93.7"
      y2="129.4"
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
    <path d="M207,50.2A87.7,87.7,0,0,0,144.6,24h-.3A87.3,87.3,0,0,0,82,49.8L48.3,83.9h0L15.9,116.7a16.1,16.1,0,0,0,.1,22.6l28.6,28.6a15.6,15.6,0,0,0,11.3,4.7H56a15.8,15.8,0,0,0,11.4-4.8l32-32.8h0L133,100.7a16.1,16.1,0,0,1,22.4-.2,15.7,15.7,0,0,1,4.7,11.2,17,17,0,0,1-4.9,12l-34.1,33h0L88.3,188.6a15.9,15.9,0,0,0-.2,22.8l28.6,28.7a16.3,16.3,0,0,0,22.6.1l32.9-32.4h0l33.6-32.9C240.2,140.5,240.8,84.6,207,50.2ZM55.9,156.6,27.3,128,54,100.9l28.5,28.5Zm72.2,72.1L99.4,200.1l27.3-26.5,28.5,28.5Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="126.8"
      y1="162.4"
      x2="166.6"
      y2="202.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="54"
      y1="89.6"
      x2="93.7"
      y2="129.4"
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
      d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="126.8"
      y1="162.4"
      x2="166.6"
      y2="202.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="54"
      y1="89.6"
      x2="93.7"
      y2="129.4"
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
      d="M127.3,95a24.1,24.1,0,0,1,33.6-.3c9.7,9.3,9.5,25.1-.1,34.7l-67,64.9a8.1,8.1,0,0,0-.1,11.4l28.7,28.7a8.1,8.1,0,0,0,11.3.1l66.4-65.2c31.2-31.2,32.1-82,1.2-113.4a80,80,0,0,0-113.6-.5L21.6,122.3a8,8,0,0,0,0,11.3l28.7,28.7a8.1,8.1,0,0,0,11.4-.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="126.8"
      y1="162.4"
      x2="166.6"
      y2="202.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="54"
      y1="89.6"
      x2="93.7"
      y2="129.4"
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

const Magnet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Magnet.displayName = "Magnet";

export default Magnet;
