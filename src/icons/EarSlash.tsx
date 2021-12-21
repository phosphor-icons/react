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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M91.4,87.8A39.5,39.5,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84A79.9,79.9,0,0,1,63.3,56.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M166.9,170.8A20.1,20.1,0,0,1,140,152a25.5,25.5,0,0,1,1.6-9.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M94.3,31.4A80.1,80.1,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M167,111.4a27.6,27.6,0,0,0,1-7.4,40,40,0,0,0-40-40l-3.9.2"
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
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0C208,144,209,169,161.9,216Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.4,87.8A39.5,39.5,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M87,35.3A80,80,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84A79.9,79.9,0,0,1,63.3,56.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.1,119a24,24,0,0,0,4.9-15,39.9,39.9,0,0,0-53-37.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M166.9,170.8A20.1,20.1,0,0,1,140,152a25.5,25.5,0,0,1,1.6-9.1"
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
    <path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6l-37.9-41.7a29.7,29.7,0,0,1-4.2.3,28.1,28.1,0,0,1-28-28,31.1,31.1,0,0,1,.7-6.9L96,104.7a8,8,0,0,1-16-.7,50.4,50.4,0,0,1,2.2-14.5L64.5,70A71.4,71.4,0,0,0,56,104c0,26.7,8.5,34.9,17.6,43.6S92,165.4,92,188a36,36,0,0,0,63.8,22.9,7.9,7.9,0,0,1,11.2-1.1,8.1,8.1,0,0,1,1.1,11.3A52,52,0,0,1,76,188c0-15.8-5.7-21.3-13.5-28.8C52.5,149.5,40,137.5,40,104A87.8,87.8,0,0,1,53.2,57.6L42.1,45.4A8,8,0,0,1,53.9,34.6L69.2,51.5h.1l28,30.8h0l75.4,83h0ZM91.1,42.2A72,72,0,0,1,200,104a8,8,0,0,0,16,0A88,88,0,0,0,82.9,28.4a8,8,0,0,0-2.8,11A8.1,8.1,0,0,0,91.1,42.2Zm67.2,83.2a7.7,7.7,0,0,0,4.8,1.6,8,8,0,0,0,6.4-3.2A31.6,31.6,0,0,0,176,104a48,48,0,0,0-48-48,48.6,48.6,0,0,0-15.6,2.6,8,8,0,0,0,5.2,15.1A32.9,32.9,0,0,1,128,72a32.1,32.1,0,0,1,32,32,16,16,0,0,1-3.3,10.2A7.9,7.9,0,0,0,158.3,125.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M91.4,87.8A39.5,39.5,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M87,35.3A80,80,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84A79.9,79.9,0,0,1,63.3,56.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M163.1,119a24,24,0,0,0,4.9-15,39.9,39.9,0,0,0-53-37.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M166.9,170.8A20.1,20.1,0,0,1,140,152a25.5,25.5,0,0,1,1.6-9.1"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M91.4,87.8A39.5,39.5,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M87,35.3A80,80,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84A79.9,79.9,0,0,1,63.3,56.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M163.1,119a24,24,0,0,0,4.9-15,39.9,39.9,0,0,0-53-37.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M166.9,170.8A20.1,20.1,0,0,1,140,152a25.5,25.5,0,0,1,1.6-9.1"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.4,87.8A39.5,39.5,0,0,0,88,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M87,35.3A80,80,0,0,1,208,104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84A79.9,79.9,0,0,1,63.3,56.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.1,119a24,24,0,0,0,4.9-15,39.9,39.9,0,0,0-53-37.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M166.9,170.8A20.1,20.1,0,0,1,140,152a25.5,25.5,0,0,1,1.6-9.1"
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

const EarSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EarSlash.displayName = "EarSlash";

export default EarSlash;
