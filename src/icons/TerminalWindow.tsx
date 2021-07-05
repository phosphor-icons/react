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
    <polyline
      points="80 96 120 128 80 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="143.99414"
      y1="160"
      x2="175.99414"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8.48528"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="32" y="48" width="192" height="160" rx="8.48528" opacity="0.2" />
    <polyline
      points="80 96 120 128 80 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="135.99414"
      y1="160"
      x2="175.99414"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8.48528"
      strokeWidth="16.97056"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M215.51465,39.51465H40.48535a16.99025,16.99025,0,0,0-16.9707,16.9707v143.0293a16.99025,16.99025,0,0,0,16.9707,16.9707h175.0293a16.99025,16.99025,0,0,0,16.9707-16.9707V56.48535A16.99025,16.99025,0,0,0,215.51465,39.51465Zm-94.51758,94.73242-40,32a7.99979,7.99979,0,1,1-9.99414-12.49414L103.19336,128,71.00293,102.24707a7.99979,7.99979,0,1,1,9.99414-12.49414l40,32a7.99943,7.99943,0,0,1,0,12.49414ZM179.99414,168h-40a8,8,0,0,1,0-16h40a8,8,0,1,1,0,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="80 96 120 128 80 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="135.99414"
      y1="160"
      x2="175.99414"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8.48528"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polyline
      points="80 96 120 128 80 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="135.99414"
      y1="160"
      x2="175.99414"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8.48528"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline
      points="80 96 120 128 80 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="135.99414"
      y1="160"
      x2="175.99414"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8.48528"
      strokeWidth="16.97056"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const TerminalWindow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TerminalWindow.displayName = "TerminalWindow";

export default TerminalWindow;
