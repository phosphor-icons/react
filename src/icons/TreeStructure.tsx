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
    <rect
      x="24"
      y="100"
      width="56"
      height="56"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="40"
      width="64"
      height="64"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="152"
      width="64"
      height="64"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="80"
      y1="128"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
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
    <rect x="24" y="100" width="56" height="56" rx="8" opacity="0.2" />
    <rect x="160" y="40" width="64" height="64" rx="8" opacity="0.2" />
    <rect x="160" y="152" width="64" height="64" rx="8" opacity="0.2" />
    <rect
      x="24"
      y="100"
      width="56"
      height="56"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="40"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="152"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="80"
      y1="128"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
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
    <path d="M156,92V80H144a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h12V164a16.01833,16.01833,0,0,1,16-16h40a16.01833,16.01833,0,0,1,16,16v40a16.01833,16.01833,0,0,1-16,16H172a16.01833,16.01833,0,0,1-16-16V192H144a32.03635,32.03635,0,0,1-32-32V136H84v8a16.01833,16.01833,0,0,1-16,16H36a16.01833,16.01833,0,0,1-16-16V112A16.01833,16.01833,0,0,1,36,96H68a16.01833,16.01833,0,0,1,16,16v8h28V96a32.03635,32.03635,0,0,1,32-32h12V52a16.01833,16.01833,0,0,1,16-16h40a16.01833,16.01833,0,0,1,16,16V92a16.01833,16.01833,0,0,1-16,16H172A16.01833,16.01833,0,0,1,156,92Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="24"
      y="100"
      width="56"
      height="56"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="40"
      width="64"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="152"
      width="64"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="80"
      y1="128"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
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
    <rect
      x="24"
      y="100"
      width="56"
      height="56"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="40"
      width="64"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="152"
      width="64"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="80"
      y1="128"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
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
    <rect
      x="24"
      y="100"
      width="56"
      height="56"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="40"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="152"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="80"
      y1="128"
      x2="120"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,184H144a24,24,0,0,1-24-24V96a24,24,0,0,1,24-24h16"
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

const TreeStructure = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TreeStructure.displayName = "TreeStructure";

export default TreeStructure;
