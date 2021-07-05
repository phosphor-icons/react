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
      points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
    <polyline
      points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
    <path d="M160.00439,216c-.13378,0-.2666-.00342-.40039-.00977a7.99906,7.99906,0,0,1-7.07714-5.14209L95.35205,60.7644,63.28564,131.3103A8.00165,8.00165,0,0,1,56.00244,136h-32a8,8,0,0,1,0-16H50.85107L88.71924,36.6897a7.99988,7.99988,0,0,1,14.75879.4624l57.51562,150.97729,31.85352-63.707A7.99979,7.99979,0,0,1,200.00244,120h32a8,8,0,0,1,0,16H204.94678l-37.78907,75.57764A7.99952,7.99952,0,0,1,160.00439,216Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
      points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
      points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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

const Activity = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Activity.displayName = "Activity";

export default Activity;
