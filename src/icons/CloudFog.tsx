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
      x1="120"
      y1="200"
      x2="72"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="184"
      y1="200"
      x2="160"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="240"
      x2="104"
      y2="240"
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
      x1="120"
      y1="192"
      x2="72"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="192"
      x2="160"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="224"
      x2="104"
      y2="224"
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
    <path d="M168,224a8.00008,8.00008,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8.00008,8.00008,0,0,1,168,224Zm-40-32a8.00008,8.00008,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,128,192Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM156,16A76.13113,76.13113,0,0,0,85.03711,64.7832l-.00537-.001A76.1764,76.1764,0,0,0,80,92a8,8,0,0,1-16,0,92.24056,92.24056,0,0,1,4.17639-27.41064A52.00137,52.00137,0,0,0,76,168h80a76,76,0,0,0,0-152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="120"
      y1="192"
      x2="72"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="184"
      y1="192"
      x2="160"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="224"
      x2="104"
      y2="224"
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
      x1="120"
      y1="192"
      x2="72"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="184"
      y1="192"
      x2="160"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="224"
      x2="104"
      y2="224"
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
      x1="120"
      y1="192"
      x2="72"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="192"
      x2="160"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="224"
      x2="104"
      y2="224"
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

const CloudFog = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CloudFog.displayName = "CloudFog";

export default CloudFog;
