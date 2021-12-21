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
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M220,162.5V208a8,8,0,0,1-8,8H72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="180"
      x2="74.1"
      y2="168.2"
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
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      opacity="0.2"
    />
    <path
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,162.5V208a8,8,0,0,1-8,8H72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="180" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M228.2,153,209,100.3a16,16,0,0,0-20.5-9.5l-59.9,21.8,11-62.8a16,16,0,0,0-2.6-12,16.2,16.2,0,0,0-10.3-6.6L71.5,21.5A16.1,16.1,0,0,0,53,34.5L28.8,171.7a45,45,0,0,0,7.7,33.9,43.4,43.4,0,0,0,28.7,17.9,51.6,51.6,0,0,0,6.7.5H212a16,16,0,0,0,16-16V164.3A15.7,15.7,0,0,0,228.2,153ZM72,192a12,12,0,1,1,12-12A12,12,0,0,1,72,192Zm140,16H123.7L212,175.9Zm-98.5-13.3a41,41,0,0,0,1.8-7.1l10.1-56.8,68.6-25,19.1,52.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M220,162.5V208a8,8,0,0,1-8,8H72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="72" cy="180" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M220,162.5V208a8,8,0,0,1-8,8H72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="72" cy="180" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,162.5V208a8,8,0,0,1-8,8H72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="180" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Swatches = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Swatches.displayName = "Swatches";

export default Swatches;
