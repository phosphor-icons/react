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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M163.1078,152.00061a36.05137,36.05137,0,0,1-27.10744,27.10724"
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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      opacity="0.2"
    />
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.11987,191.216a47.923,47.923,0,0,0,39.20472-39.1564"
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
    <path d="M174.03662,47.75049a254.574,254.574,0,0,0-41.44873-38.3042,7.99885,7.99885,0,0,0-9.17578,0,254.574,254.574,0,0,0-41.44873,38.3042C54.51074,79.3208,40,112.60352,40,144a88,88,0,0,0,176,0C216,112.60352,201.48926,79.3208,174.03662,47.75049Zm9.17578,105.646a55.85216,55.85216,0,0,1-45.76562,45.7085,8,8,0,1,1-2.6543-15.77832,39.8386,39.8386,0,0,0,32.64453-32.604,8.00019,8.00019,0,0,1,15.77539,2.67382Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M136.11987,191.216a47.923,47.923,0,0,0,39.20472-39.1564"
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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M136.11987,191.216a47.923,47.923,0,0,0,39.20472-39.1564"
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
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.11987,191.216a47.923,47.923,0,0,0,39.20472-39.1564"
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

const Drop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Drop.displayName = "Drop";

export default Drop;
