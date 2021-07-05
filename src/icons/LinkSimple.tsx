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
      x1="94.05365"
      y1="161.93204"
      x2="161.9359"
      y2="94.04979"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M144.96326,178.9102,116.679,207.19447a48,48,0,0,1-67.88225-67.88225L77.081,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M178.90922,144.96424,207.19349,116.68a48,48,0,0,0-67.88225-67.88225L111.027,77.082"
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
      x1="94.05267"
      y1="161.93204"
      x2="161.93492"
      y2="94.04979"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M144.96229,178.9102,116.678,207.19447a48,48,0,0,1-67.88226-67.88225L77.08,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.90825,144.96424,207.19252,116.68a48,48,0,0,0-67.88225-67.88225L111.026,77.082"
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
      <path d="M156.27783,88.39258,88.396,156.27441a8.00053,8.00053,0,0,0,11.31445,11.31446L167.59229,99.707a8.00053,8.00053,0,1,0-11.31446-11.31445Z" />
      <path d="M139.30518,173.25293,111.021,201.53711a39.99918,39.99918,0,1,1-56.56739-56.56738l28.28418-28.28418a8.00053,8.00053,0,1,0-11.31445-11.31446L43.13916,133.65527a56.00023,56.00023,0,0,0,79.19629,79.19629l28.28418-28.28418a8.00052,8.00052,0,0,0-11.31445-11.31445Z" />
      <path d="M212.8501,43.14062a56.002,56.002,0,0,0-79.19629,0L105.36963,71.4248a8.00053,8.00053,0,0,0,11.31445,11.31446l28.28418-28.28418a39.99918,39.99918,0,0,1,56.56738,56.56738l-28.28418,28.28418a8.00053,8.00053,0,0,0,11.31446,11.31445l28.28418-28.28418A56.06459,56.06459,0,0,0,212.8501,43.14062Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="94.05413"
      y1="161.93204"
      x2="161.93639"
      y2="94.04979"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M144.96375,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.0815,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M178.90971,144.96424,207.194,116.68a48,48,0,0,0-67.88225-67.88225L111.02746,77.082"
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
      x1="94.05462"
      y1="161.93204"
      x2="161.93687"
      y2="94.04979"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M144.96424,178.9102,116.68,207.19447a48,48,0,0,1-67.88225-67.88225L77.082,111.028"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M178.9102,144.96424,207.19447,116.68a48,48,0,0,0-67.88225-67.88225L111.028,77.082"
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
      x1="94.05511"
      y1="161.93204"
      x2="161.93736"
      y2="94.04979"
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

const LinkSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LinkSimple.displayName = "LinkSimple";

export default LinkSimple;
