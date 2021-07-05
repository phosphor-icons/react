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
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="88.00002"
      x2="168"
      y2="136.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="120"
      y1="88.00002"
      x2="120"
      y2="136.00002"
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
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      opacity="0.2"
    />
    <path
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88.00002"
      x2="168"
      y2="136.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="88.00002"
      x2="120"
      y2="136.00002"
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
    <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V192a16.01833,16.01833,0,0,0,16,16H64v32a7.99949,7.99949,0,0,0,13.12109,6.14551L122.89648,208h42.207a16.03033,16.03033,0,0,0,10.24316-3.709l42.896-35.7461A15.958,15.958,0,0,0,224,156.253V48A16.01833,16.01833,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="88.00002"
      x2="168"
      y2="136.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="120"
      y1="88.00002"
      x2="120"
      y2="136.00002"
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
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="88.00002"
      x2="168"
      y2="136.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="120"
      y1="88.00002"
      x2="120"
      y2="136.00002"
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
      d="M165.1036,200H122.8964a8,8,0,0,0-5.12148,1.85423L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.253a8,8,0,0,1-2.87852,6.14577l-42.89641,35.747A8,8,0,0,1,165.1036,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88.00002"
      x2="168"
      y2="136.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="88.00002"
      x2="120"
      y2="136.00002"
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
