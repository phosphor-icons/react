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
      x1="128"
      y1="240"
      x2="154.25007"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="98.74999"
      y1="208"
      x2="130.25007"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="240"
      x2="154.25007"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="98.74999"
      y1="208"
      x2="130.25007"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
    <path d="M160.93359,204.38916l-26.25,40a8,8,0,1,1-13.377-8.77832l26.25-40a8,8,0,1,1,13.377,8.77832ZM155.99512,16A76.1302,76.1302,0,0,0,85.03931,64.76562l-.007.01758A75.62312,75.62312,0,0,0,79.99512,92a8,8,0,0,1-16,0,91.68713,91.68713,0,0,1,4.16967-27.40967A52.0014,52.0014,0,0,0,75.99512,168h39.43115L92.05664,203.61084a8,8,0,1,0,13.37695,8.77832L134.564,168h21.43116a76,76,0,0,0,0-152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="240"
      x2="154.25007"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="98.74999"
      y1="208"
      x2="130.25007"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
      y1="240"
      x2="154.25007"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="98.74999"
      y1="208"
      x2="130.25007"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
      y1="240"
      x2="154.25007"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="98.74999"
      y1="208"
      x2="130.25007"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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

const CloudRain = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CloudRain.displayName = "CloudRain";

export default CloudRain;
