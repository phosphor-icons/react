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
      d="M96.00014,175.99219H30a6,6,0,0,1-6-6V103.992A71.99985,71.99985,0,0,1,95.99986,31.99219H96a72,72,0,0,1,72,72v.00014A71.99986,71.99986,0,0,1,96.00014,175.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M92.098,175.99521a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942"
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
      d="M163.93962,80.09586A71.887,71.887,0,0,1,168,103.99219v.00014a71.99986,71.99986,0,0,1-71.99986,71.99986H92.098v.003a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942Z"
      opacity="0.2"
    />
    <path
      d="M96.00014,175.99219H30a6,6,0,0,1-6-6V103.992A71.99985,71.99985,0,0,1,95.99986,31.99219H96a72,72,0,0,1,72,72v.00014A71.99986,71.99986,0,0,1,96.00014,175.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.098,175.99521a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942"
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
    <path d="M169.56592,72.5788A79.99487,79.99487,0,0,0,16,103.99219v66a14.01573,14.01573,0,0,0,14,14H86.667a80.1557,80.1557,0,0,0,73.333,48h66a14.01573,14.01573,0,0,0,14-14v-66A79.96635,79.96635,0,0,0,169.56592,72.5788ZM224,215.99219H160a64.14151,64.14151,0,0,1-55.67871-32.43335,79.90546,79.90546,0,0,0,70.37451-93.859A63.99067,63.99067,0,0,1,224,151.99219Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M96.00014,175.99219H30a6,6,0,0,1-6-6V103.992A71.99985,71.99985,0,0,1,95.99986,31.99219H96a72,72,0,0,1,72,72v.00014A71.99986,71.99986,0,0,1,96.00014,175.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.098,175.99521a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942"
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
      d="M96.00014,175.99219H30a6,6,0,0,1-6-6V103.992A71.99985,71.99985,0,0,1,95.99986,31.99219H96a72,72,0,0,1,72,72v.00014A71.99986,71.99986,0,0,1,96.00014,175.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.098,175.99521a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942"
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
      d="M96.00014,175.99219H30a6,6,0,0,1-6-6V103.992A71.99985,71.99985,0,0,1,95.99986,31.99219H96a72,72,0,0,1,72,72v.00014A71.99986,71.99986,0,0,1,96.00014,175.99219Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.098,175.99521a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942"
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

const ChatsTeardrop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChatsTeardrop.displayName = "ChatsTeardrop";

export default ChatsTeardrop;
