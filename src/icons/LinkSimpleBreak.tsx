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
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
    <g>
      <path d="M139.30713,173.25293,111.023,201.53711a39.99918,39.99918,0,0,1-56.56738-56.56738l28.28418-28.28418a8.00053,8.00053,0,0,0-11.31446-11.31446L43.14111,133.65527a56.00023,56.00023,0,0,0,79.19629,79.19629l28.28418-28.28418a8.00052,8.00052,0,1,0-11.31445-11.31445Z" />
      <path d="M212.85205,43.14062a56.002,56.002,0,0,0-79.19629,0L105.37158,71.4248A8.00053,8.00053,0,1,0,116.686,82.73926l28.28417-28.28418a39.99918,39.99918,0,0,1,56.56739,56.56738l-28.28418,28.28418a8.00052,8.00052,0,0,0,11.31445,11.31445l28.28418-28.28418A56.06457,56.06457,0,0,0,212.85205,43.14062Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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

const LinkSimpleBreak = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LinkSimpleBreak.displayName = "LinkSimpleBreak";

export default LinkSimpleBreak;
