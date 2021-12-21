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
      d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,140a24.1,24.1,0,0,1-24-24v-4a24.1,24.1,0,0,1,24,24Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,140v-4a24.1,24.1,0,0,1,24-24v4a24.1,24.1,0,0,1-24,24Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="116"
      y1="184"
      x2="140"
      y2="184"
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
      d="M128,24a88,88,0,0,0-88,88c0,48.6,56,120,88,120s88-71.4,88-120A88,88,0,0,0,128,24ZM112,140a8,8,0,0,1-8,8,32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8,32,32,0,0,1,32,32Zm72-24a32,32,0,0,1-32,32,8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32,8,8,0,0,1,8,8Z"
      opacity="0.2"
    />
    <path
      d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
      transform="translate(184 252) rotate(-180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4A32,32,0,0,1,176,104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="184"
      x2="144"
      y2="184"
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
    <path d="M128,16a96.2,96.2,0,0,0-96,96c0,24,12.6,55.1,33.6,83s44.5,45,62.4,45,41.2-16.8,62.4-45S224,136,224,112A96.2,96.2,0,0,0,128,16ZM64,116v-4a12,12,0,0,1,12-12,36,36,0,0,1,36,36v4a12,12,0,0,1-12,12A36,36,0,0,1,64,116Zm80,84H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm48-84a36,36,0,0,1-36,36,12,12,0,0,1-12-12v-4a36,36,0,0,1,36-36,12,12,0,0,1,12,12Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4A8,8,0,0,1,80,104Z"
      transform="translate(184 252) rotate(-180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="184"
      x2="144"
      y2="184"
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
      d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
      transform="translate(184 252) rotate(-180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="184"
      x2="144"
      y2="184"
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
      d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,104h0a32,32,0,0,1,32,32v4a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v-4a8,8,0,0,1,8-8Z"
      transform="translate(184 252) rotate(-180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,104h0a8,8,0,0,1,8,8v4a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v-4a32,32,0,0,1,32-32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="184"
      x2="144"
      y2="184"
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

const Alien = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Alien.displayName = "Alien";

export default Alien;
