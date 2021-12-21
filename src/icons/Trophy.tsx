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
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M198.2,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M58,128H47.9a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      opacity="0.2"
    />
    <path
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M198.2,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M58,128H47.9a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
    <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H23.9a16,16,0,0,0-16,16V96a40,40,0,0,0,40,40h4c9.7,29.9,36.2,52.3,68.1,55.6V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.6A79.7,79.7,0,0,0,204.3,136H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM47.9,120a24,24,0,0,1-24-24V80H48v31.1a86.9,86.9,0,0,0,.5,8.9ZM232,96a24.1,24.1,0,0,1-24,24h-.4a70.3,70.3,0,0,0,.4-8V80h24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M198.2,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M58,128H47.9a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M198.2,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M58,128H47.9a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.1c0,39.7,31.8,72.6,71.5,72.9A72,72,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M198.2,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M58,128H47.9a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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

const Trophy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Trophy.displayName = "Trophy";

export default Trophy;
