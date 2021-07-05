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
      x1="127.99219"
      y1="48.00288"
      x2="127.99219"
      y2="124.00288"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
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
    <line
      x1="127.99219"
      y1="48.00288"
      x2="127.99219"
      y2="124.00288"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
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
    <path d="M128,23.99988a104,104,0,1,0,104,104A104.11786,104.11786,0,0,0,128,23.99988Zm-8.00781,32.00293a8,8,0,0,1,16,0v60a8,8,0,1,1-16,0ZM128,207.99988A79.98292,79.98292,0,0,1,83.53516,61.52136a8,8,0,1,1,8.91357,13.28711,63.99978,63.99978,0,1,0,71.08838-.00976,8,8,0,0,1,8.91016-13.28955A79.98322,79.98322,0,0,1,128,207.99988Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="127.99219"
      y1="48.00288"
      x2="127.99219"
      y2="124.00288"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
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
      x1="127.99219"
      y1="48.00288"
      x2="127.99219"
      y2="124.00288"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
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
      x1="127.99219"
      y1="48.00288"
      x2="127.99219"
      y2="124.00288"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
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

const Power = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Power.displayName = "Power";

export default Power;
