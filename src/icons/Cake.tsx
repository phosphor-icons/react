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
      d="M128,88c56-24,0-76,0-76S72,64,128,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3"
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
      d="M162,126a34,34,0,0,1-68,0,34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126Z"
      opacity="0.2"
    />
    <path d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z" opacity="0.2" />
    <line
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3"
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
    <path d="M206,80H136V69.4c11.5-5.1,18.2-12.5,20.1-22C160.2,26,136,4.3,133.2,2a7.8,7.8,0,0,0-10.3-.1C120,4.2,95.1,25.7,99.1,47.2c1.8,9.7,8.9,17.2,20.9,22.3V80H50a32.1,32.1,0,0,0-32,32v13.3A43.3,43.3,0,0,0,30.9,156l1.1,1v51a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V157l1.1-1A43.3,43.3,0,0,0,238,125.3V112A32.1,32.1,0,0,0,206,80Zm2,128H48V166.2A39.3,39.3,0,0,0,60.8,168,42.2,42.2,0,0,0,94,150.6a41.9,41.9,0,0,0,68,0A42.2,42.2,0,0,0,195.2,168h.8a40.6,40.6,0,0,0,12-1.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3"
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
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3"
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
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3"
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

const Cake = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cake.displayName = "Cake";

export default Cake;
