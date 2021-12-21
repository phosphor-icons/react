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
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="88"
      x2="168"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="120"
      y1="88"
      x2="120"
      y2="136"
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
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      opacity="0.2"
    />
    <path
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88"
      x2="168"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="88"
      x2="120"
      y2="136"
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
    <path d="M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a7.9,7.9,0,0,0,4.6,7.2,6.8,6.8,0,0,0,3.4.8,7.5,7.5,0,0,0,5.1-1.9L122.9,208h42.2a15.8,15.8,0,0,0,10.2-3.7l42.9-35.8a15.7,15.7,0,0,0,5.8-12.2V48A16,16,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="88"
      x2="168"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="120"
      y1="88"
      x2="120"
      y2="136"
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
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="88"
      x2="168"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="120"
      y1="88"
      x2="120"
      y2="136"
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
      d="M165.1,200H122.9a7.8,7.8,0,0,0-5.1,1.9L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.3a8.1,8.1,0,0,1-2.9,6.1l-42.9,35.7A7.8,7.8,0,0,1,165.1,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88"
      x2="168"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="88"
      x2="120"
      y2="136"
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

const TwitchLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TwitchLogo.displayName = "TwitchLogo";

export default TwitchLogo;
