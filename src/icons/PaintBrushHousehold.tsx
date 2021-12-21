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
      x1="72"
      y1="104"
      x2="152"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="188"
      x2="70.6"
      y2="214.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="68"
      y1="160"
      x2="42.6"
      y2="186.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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
      d="M92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2a8,8,0,0,0,11.6-.3L191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L152,184,72,104Z"
      opacity="0.2"
    />
    <line
      x1="72"
      y1="104"
      x2="152"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.8"
      y1="183.4"
      x2="70.6"
      y2="214.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="73.8"
      y1="155.4"
      x2="42.6"
      y2="186.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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
    <path d="M230.6,25.4a31.9,31.9,0,0,0-45.2,0l-.3.3L130.2,86.9,121,77.7a23.9,23.9,0,0,0-34,0L10.3,154.3a8.1,8.1,0,0,0,0,11.4l80,80a8.2,8.2,0,0,0,11.4,0L178.3,169a23.9,23.9,0,0,0,0-34l-9.2-9.2,61.2-54.9.3-.3A31.9,31.9,0,0,0,230.6,25.4ZM96,228.7,81.9,214.6,107.4,189a8,8,0,0,0-11.3-11.3L70.6,203.3,53.9,186.6,79.4,161a8,8,0,0,0-11.3-11.3L42.6,175.3,27.3,160,72,115.3,140.7,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="72"
      y1="104"
      x2="152"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="101.8"
      y1="183.4"
      x2="70.6"
      y2="214.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="73.8"
      y1="155.4"
      x2="42.6"
      y2="186.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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
      x1="72"
      y1="104"
      x2="152"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="101.8"
      y1="183.4"
      x2="70.6"
      y2="214.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="73.8"
      y1="155.4"
      x2="42.6"
      y2="186.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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
      x1="72"
      y1="104"
      x2="152"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.8"
      y1="183.4"
      x2="70.6"
      y2="214.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="73.8"
      y1="155.4"
      x2="42.6"
      y2="186.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z"
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

const PaintBrushHousehold = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

PaintBrushHousehold.displayName = "PaintBrushHousehold";

export default PaintBrushHousehold;
