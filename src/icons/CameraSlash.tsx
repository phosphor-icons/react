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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200.7,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M154.1,156.8a36,36,0,1,1-48.3-53.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M102.1,40H160l16,24h32a16,16,0,0,1,16,16v94.1"
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
      d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z"
      opacity="0.2"
    />
    <line
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200.7,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.1,156.8a36,36,0,1,1-48.3-53.2"
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
    <path d="M39.4,18.6a7.9,7.9,0,0,0-11.3-.5,8,8,0,0,0-.6,11.3L51.7,56H48A24.1,24.1,0,0,0,24,80V192a24.1,24.1,0,0,0,24,24H197.2l19.4,21.4a8.2,8.2,0,0,0,5.9,2.6,7.8,7.8,0,0,0,5.4-2.1,8,8,0,0,0,.6-11.3ZM128,168a36,36,0,0,1-36-36,36.4,36.4,0,0,1,8.1-22.8L148,161.9A35.3,35.3,0,0,1,128,168Z" />
    <path d="M208,56H180.3L166.6,35.6A7.6,7.6,0,0,0,160,32H96a7.9,7.9,0,0,0-6.7,3.6l-2,3a8,8,0,0,0,.8,9.8l130,143A7.9,7.9,0,0,0,224,194a7.4,7.4,0,0,0,2.9-.5A8,8,0,0,0,232,186V80A24.1,24.1,0,0,0,208,56Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200.7,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M154.1,156.8a36,36,0,1,1-48.3-53.2"
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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200.7,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M154.1,156.8a36,36,0,1,1-48.3-53.2"
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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200.7,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.1,156.8a36,36,0,1,1-48.3-53.2"
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

const CameraSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CameraSlash.displayName = "CameraSlash";

export default CameraSlash;
