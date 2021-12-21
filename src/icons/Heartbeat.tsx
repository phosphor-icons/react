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
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M28.1,88.2A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-33.7-18.9-62-48"
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
      d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
      opacity="0.2"
    />
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
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
    <path d="M236,92c0,30.6-17.7,62-52.6,93.4A314.3,314.3,0,0,1,131.9,223a8.1,8.1,0,0,1-7.8,0c-3.2-1.8-60.4-34.3-88.6-80.9a4,4,0,0,1,3.4-6.1H72a7.9,7.9,0,0,0,6.7-3.6l9.3-14,25.3,38a8.1,8.1,0,0,0,9.2,3.2,8.8,8.8,0,0,0,4.3-3.3L140.3,136h19.4a8.2,8.2,0,0,0,8.3-7.5,8,8,0,0,0-8-8.5H136a7.9,7.9,0,0,0-6.7,3.6l-9.3,14-25.3-38a8.1,8.1,0,0,0-9.2-3.2,8.8,8.8,0,0,0-4.3,3.3L67.7,120H27.8a4,4,0,0,1-3.8-2.8A86.2,86.2,0,0,1,20,92,60,60,0,0,1,128,56,60,60,0,0,1,236,92Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
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
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
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
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
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

const Heartbeat = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Heartbeat.displayName = "Heartbeat";

export default Heartbeat;
