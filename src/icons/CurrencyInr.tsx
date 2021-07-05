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
      x1="72"
      y1="80"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="40"
      x2="200"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M108,40a52,52,0,0,1,0,104H72l88,80"
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
      x1="72"
      y1="80"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="40"
      x2="200"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M108,40a52,52,0,0,1,0,104H72l88,80"
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
    <path d="M208,80a8.00039,8.00039,0,0,1-8,8H167.85156c.08789,1.32373.14844,2.65454.14844,4a60.06812,60.06812,0,0,1-60,60H92.69238l72.68946,66.08008a8.0006,8.0006,0,0,1-10.76368,11.83984l-88-80A8.0004,8.0004,0,0,1,72,136h36a44.04978,44.04978,0,0,0,44-44c0-1.34912-.0708-2.68164-.18994-4H72a8,8,0,0,1,0-16h75.17188A44.03678,44.03678,0,0,0,108,48H72a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16H148.73535a60.16006,60.16006,0,0,1,15.82422,24H200A8.00039,8.00039,0,0,1,208,80Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="72"
      y1="80"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72"
      y1="40"
      x2="200"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M108,40a52,52,0,0,1,0,104H72l88,80"
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
      x1="72"
      y1="80"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72"
      y1="40"
      x2="200"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M108,40a52,52,0,0,1,0,104H72l88,80"
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
      x1="72"
      y1="80"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="40"
      x2="200"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M108,40a52,52,0,0,1,0,104H72l88,80"
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

const CurrencyInr = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CurrencyInr.displayName = "CurrencyInr";

export default CurrencyInr;
