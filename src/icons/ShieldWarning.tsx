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
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="127.99951"
      y1="92"
      x2="127.99951"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="172" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      opacity="0.2"
    />
    <path
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.99951"
      y1="96"
      x2="127.99951"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="172" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M207.99951,40h-160a16.01833,16.01833,0,0,0-16,16v58.667c0,89.45313,75.82617,119.124,91.02637,124.16406a15.48781,15.48781,0,0,0,9.94726,0c15.2002-5.04,91.02637-34.71093,91.02637-124.16406V56A16.01833,16.01833,0,0,0,207.99951,40Zm-88,56a8,8,0,1,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,127.99951,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="127.99951"
      y1="96"
      x2="127.99951"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="172" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="127.99951"
      y1="96"
      x2="127.99951"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="172" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M40,114.66667V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="96"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="172" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ShieldWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShieldWarning.displayName = "ShieldWarning";

export default ShieldWarning;
