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
      d="M25,98.2A147.2,147.2,0,0,1,72.4,66.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59,132.1A98.3,98.3,0,0,1,108,106"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M117,56.4c3.6-.3,7.3-.4,11-.4A145.6,145.6,0,0,1,230.9,98.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M167.8,112.3A99.2,99.2,0,0,1,197,132.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="200" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z"
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
      d="M166.6,170.5,134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6a8.1,8.1,0,0,1,1.2-11.7A177.8,177.8,0,0,1,60.1,53.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94.2,43.2A179.3,179.3,0,0,1,235.8,75.9,8,8,0,0,1,237,87.5l-49.5,58.4"
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
    <path d="M53.9,34.6A8,8,0,0,0,42,45.4l4.7,5.1A182.8,182.8,0,0,0,15.3,69.6,15.6,15.6,0,0,0,9.1,80.5a16.3,16.3,0,0,0,3.8,12.3L115.8,214a15.9,15.9,0,0,0,24.3.1l26.7-31.5,35.3,38.8A8.2,8.2,0,0,0,208,224a7.8,7.8,0,0,0,5.4-2.1,8,8,0,0,0,.6-11.3Z" />
    <path d="M246.9,80.5a15.6,15.6,0,0,0-6.2-10.9A188,188,0,0,0,92.6,35.3a8.3,8.3,0,0,0-6.1,5.4,8.2,8.2,0,0,0,1.7,7.9l93.4,102.7a8.3,8.3,0,0,0,5.9,2.6h.2a8.3,8.3,0,0,0,5.9-2.8l49.6-58.4A16.4,16.4,0,0,0,246.9,80.5Z" />
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
      d="M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152.1,107A97.5,97.5,0,0,1,197,132.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M59,132.1A98.3,98.3,0,0,1,108,106"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="200" r="10" />
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
      d="M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152.1,107A97.5,97.5,0,0,1,197,132.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M59,132.1A98.3,98.3,0,0,1,108,106"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="200" r="8" />
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
      d="M107.1,57.5A143.8,143.8,0,0,1,128,56,145.6,145.6,0,0,1,230.9,98.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M25.1,98.2A145.7,145.7,0,0,1,72.4,66.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152.1,107A97.5,97.5,0,0,1,197,132.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59,132.1A98.7,98.7,0,0,1,108,106"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.9,166.1a50.9,50.9,0,0,1,67.6-2.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="200" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

WifiSlash.displayName = "WifiSlash";

export default WifiSlash;
