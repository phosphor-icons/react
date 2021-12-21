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
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="128"
      x2="136"
      y2="128"
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
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      opacity="0.2"
    />
    <path
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="128"
      x2="136"
      y2="128"
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
    <path d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72"
      y1="128"
      x2="136"
      y2="128"
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
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72"
      y1="128"
      x2="136"
      y2="128"
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
      d="M219.5,121,50.6,26.4a8,8,0,0,0-11.4,9.7L71,125.3a7.2,7.2,0,0,1,0,5.4L39.2,219.9a8,8,0,0,0,11.4,9.7L219.5,135A8,8,0,0,0,219.5,121Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="128"
      x2="136"
      y2="128"
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

const PaperPlaneRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaperPlaneRight.displayName = "PaperPlaneRight";

export default PaperPlaneRight;
