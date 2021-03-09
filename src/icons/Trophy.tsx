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
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
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
      d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
      opacity="0.2"
    />
    <path
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
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
      d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
    <path d="M232,64H208V56a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,56v8H23.87305a16.01833,16.01833,0,0,0-16,16V96a40.04583,40.04583,0,0,0,40,40H51.917c9.64258,29.93658,36.14258,52.34668,68.083,55.58276V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.60626A80.12,80.12,0,0,0,204.34521,136H208a40.04584,40.04584,0,0,0,40-40V80A16.01833,16.01833,0,0,0,232,64ZM47.87305,120a24.0275,24.0275,0,0,1-24-24V80H48v31.0957A81.777,81.777,0,0,0,48.499,120ZM232,96a24.0275,24.0275,0,0,1-24,24h-.39209q.39037-3.96176.39209-8V80h24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
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
      d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
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
      d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
      d="M56,56v55.09613c0,39.70052,31.75464,72.60753,71.45407,72.90185A72.00008,72.00008,0,0,0,200,112V56a8,8,0,0,0-8-8H64A8,8,0,0,0,56,56Z"
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
      d="M198.21561,128H208a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.964,128H47.87289a32,32,0,0,1-32-32V80a8,8,0,0,1,8-8h32"
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
