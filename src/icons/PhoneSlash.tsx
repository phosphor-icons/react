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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M115,113.7a83.3,83.3,0,0,0-14.7,3.7,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,52-32.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M131.2,72a136,136,0,0,1,93,39.8,48,48,0,0,1,4,63.3,5.8,5.8,0,0,1-1.8,1.7"
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
      d="M155.4,117.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,117.3Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M115,113.7a83.3,83.3,0,0,0-14.7,3.7,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,52-32.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.5,72.2a136.1,136.1,0,0,1,103.7,39.6,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-4-1.6"
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
    <path d="M120.9,108.3h-.1L89.8,74h-.1L53.9,34.6A8,8,0,0,0,42.1,45.4L70,76.1a143.9,143.9,0,0,0-43.8,30.1,56.1,56.1,0,0,0-4.7,73.9,16.2,16.2,0,0,0,12.6,6.1,17.1,17.1,0,0,0,5.9-1.1l47.4-19a16,16,0,0,0,9.7-11.7l5.9-29.5a72.1,72.1,0,0,1,9.1-2.5l90,99A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3Z" />
    <path d="M229.8,106.2a144.4,144.4,0,0,0-109.7-42,8,8,0,0,0-5.5,13.4L209,181.4a7.2,7.2,0,0,0,2.9,2l4.1,1.7a17.1,17.1,0,0,0,5.9,1.1,16.2,16.2,0,0,0,12.6-6.1A56.1,56.1,0,0,0,229.8,106.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M115,113.7a83.3,83.3,0,0,0-14.7,3.7,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,52-32.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M120.5,72.2a136.1,136.1,0,0,1,103.7,39.6,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-4-1.6"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M115,113.7a83.3,83.3,0,0,0-14.7,3.7,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,52-32.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M120.5,72.2a136.1,136.1,0,0,1,103.7,39.6,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-4-1.6"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M115,113.7a83.3,83.3,0,0,0-14.7,3.7,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,177.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,52-32.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.5,72.2a136.1,136.1,0,0,1,103.7,39.6,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-4-1.6"
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

const PhoneSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PhoneSlash.displayName = "PhoneSlash";

export default PhoneSlash;
