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
      d="M48,216,110.1,37.4a8.2,8.2,0,0,1,7.6-5.4h20.6a8.2,8.2,0,0,1,7.6,5.4L208,216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="232"
      y1="216"
      x2="24"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="166.3"
      y1="96"
      x2="89.7"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="188.5"
      y1="160"
      x2="67.5"
      y2="160"
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
    <polygon
      points="67.5 160 188.5 160 166.3 96 89.7 96 67.5 160"
      opacity="0.2"
    />
    <path
      d="M48,216,110.1,37.4a8.2,8.2,0,0,1,7.6-5.4h20.6a8.2,8.2,0,0,1,7.6,5.4L208,216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="216"
      x2="24"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="166.3"
      y1="96"
      x2="89.7"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="188.5"
      y1="160"
      x2="67.5"
      y2="160"
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
    <path d="M232,208H213.7L153.4,34.7A16,16,0,0,0,138.3,24H117.7a16,16,0,0,0-15.1,10.7L42.3,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.4,104h65.2l16.7,48H78.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M48,216,110.1,37.4a8.2,8.2,0,0,1,7.6-5.4h20.6a8.2,8.2,0,0,1,7.6,5.4L208,216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="232"
      y1="216"
      x2="24"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="166.3"
      y1="96"
      x2="89.7"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="188.5"
      y1="160"
      x2="67.5"
      y2="160"
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
      d="M48,216,110.1,37.4a8.2,8.2,0,0,1,7.6-5.4h20.6a8.2,8.2,0,0,1,7.6,5.4L208,216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="232"
      y1="216"
      x2="24"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="166.3"
      y1="96"
      x2="89.7"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="188.5"
      y1="160"
      x2="67.5"
      y2="160"
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
      d="M48,216,110.1,37.4a8.2,8.2,0,0,1,7.6-5.4h20.6a8.2,8.2,0,0,1,7.6,5.4L208,216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="216"
      x2="24"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="166.3"
      y1="96"
      x2="89.7"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="188.5"
      y1="160"
      x2="67.5"
      y2="160"
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

const TrafficCone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrafficCone.displayName = "TrafficCone";

export default TrafficCone;
