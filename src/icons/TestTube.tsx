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
      d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M68,136s20-16,52,0,52,0,52,0L94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162Z"
      opacity="0.2"
    />
    <path
      d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
    <path d="M237.65674,86.34326l-60-60a8.00063,8.00063,0,0,0-11.314,0L62.39453,130.29193l-.01172.01129-26.04,26.04a44.76956,44.76956,0,0,0,63.314,63.31348L177.605,141.70868l.0127-.01288,34.70361-34.70361,22.2085-7.40283a7.9996,7.9996,0,0,0,3.127-13.2461Zm-32.18653,6.06738a8.00221,8.00221,0,0,0-3.12744,1.93262l-35.59814,35.59821c-2.148,1.51983-17.895,11.53961-43.167-1.09674-10.99854-5.49964-20.811-7.63062-29.18116-7.92743L172,43.314l45.19043,45.19Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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
      d="M208,100,94,214A36.7695,36.7695,0,0,1,42,214L42,214A36.7695,36.7695,0,0,1,42,162L172,32l60,60Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68,136s20-16,52,0,52,0,52,0"
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

const TestTube = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TestTube.displayName = "TestTube";

export default TestTube;
