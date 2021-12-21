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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M127.8,32A95.9,95.9,0,0,1,32,127.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,128.2A95.9,95.9,0,0,0,128.2,224"
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
      d="M32,128a95.9,95.9,0,0,1,95.8-96h0A95.9,95.9,0,0,1,32,127.8Z"
      opacity="0.2"
    />
    <path
      d="M128.2,224.2a95.9,95.9,0,0,1,95.8-96h0A95.9,95.9,0,0,1,128.2,224Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M127.8,32A95.9,95.9,0,0,1,32,127.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,128.2A95.9,95.9,0,0,0,128.2,224"
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
    <path d="M224,136h3.3a4,4,0,0,1,3.9,4.5,104.2,104.2,0,0,1-94.8,91.1A88,88,0,0,1,224,136Zm-73.5,14.5A102.9,102.9,0,0,1,224,120h3.1a4,4,0,0,0,4.1-4.4,104.1,104.1,0,0,0-90.9-90.9,4,4,0,0,0-4.4,4.1,103.7,103.7,0,0,1-30.4,76.7A102.9,102.9,0,0,1,32,136H28.9a4,4,0,0,0-4.1,4.4,104.1,104.1,0,0,0,90.9,90.9,4,4,0,0,0,4.4-4.1A103.7,103.7,0,0,1,150.5,150.5ZM94.2,94.2a87.6,87.6,0,0,0,25.7-65.7,4,4,0,0,0-4.5-3.7,104,104,0,0,0-90.6,90.6,4,4,0,0,0,3.8,4.5A87.8,87.8,0,0,0,94.2,94.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M127.8,32A95.9,95.9,0,0,1,32,127.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M224,128.2A95.9,95.9,0,0,0,128.2,224"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M127.8,32A95.9,95.9,0,0,1,32,127.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M224,128.2A95.9,95.9,0,0,0,128.2,224"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M127.8,32A95.9,95.9,0,0,1,32,127.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,128.2A95.9,95.9,0,0,0,128.2,224"
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

const TennisBall = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TennisBall.displayName = "TennisBall";

export default TennisBall;
