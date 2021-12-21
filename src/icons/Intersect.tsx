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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="109.1"
      y1="109.1"
      x2="146.9"
      y2="146.9"
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
      d="M88,160c0,2.5.5,4.8.7,7.3,2.5.2,4.8.7,7.3.7a72,72,0,0,0,72-72c0-2.5-.5-4.8-.7-7.3-2.5-.2-4.8-.7-7.3-.7A72,72,0,0,0,88,160Z"
      opacity="0.2"
    />
    <circle
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
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
    <path d="M174.6,81.4a80,80,0,1,0-93.2,93.2,80,80,0,1,0,93.2-93.2ZM32,96A64,64,0,0,1,158,80.1,79.9,79.9,0,0,0,80.1,158,64.2,64.2,0,0,1,32,96ZM160,224a64.2,64.2,0,0,1-62-48.1A79.9,79.9,0,0,0,175.9,98,64,64,0,0,1,160,224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="122.5"
      y1="98.5"
      x2="157.5"
      y2="133.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="98.5"
      y1="122.5"
      x2="133.5"
      y2="157.5"
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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="122.5"
      y1="98.5"
      x2="157.5"
      y2="133.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="98.5"
      y1="122.5"
      x2="133.5"
      y2="157.5"
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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="122.5"
      y1="98.5"
      x2="157.5"
      y2="133.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="98.5"
      y1="122.5"
      x2="133.5"
      y2="157.5"
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

const Intersect = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Intersect.displayName = "Intersect";

export default Intersect;
