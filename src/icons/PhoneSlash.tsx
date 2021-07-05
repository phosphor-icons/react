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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M114.9947,113.69328a83.97034,83.97034,0,0,0-14.728,3.68282,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,135.45028,135.45028,0,0,1,51.9466-32.47622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M131.18495,72.03707a135.5393,135.5393,0,0,1,92.98157,39.79641,48.00881,48.00881,0,0,1,4.02766,63.31573,7.8198,7.8198,0,0,1-1.76283,1.66165"
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
      d="M155.371,117.25063a84.3478,84.3478,0,0,0-55.10429.12547,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,136,136,0,0,1,192.333,0,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-47.35377-18.94151a8,8,0,0,1-4.85991-5.79231L160.51024,123.151A7.9287,7.9287,0,0,0,155.371,117.25063Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M114.9947,113.69328a83.97034,83.97034,0,0,0-14.728,3.68282,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,135.45028,135.45028,0,0,1,51.9466-32.47622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.52563,72.20427a135.66,135.66,0,0,1,103.64089,39.62921,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-4.04895-1.61958"
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
      <path d="M120.8877,108.28271c-.01416-.01562-.02832-.03173-.043-.04736l-31.083-34.19092c-.01611-.01855-.03272-.03613-.04883-.0542l-35.793-39.37207A8.0006,8.0006,0,1,0,42.08008,45.38184L70.03857,76.13623a142.75371,142.75371,0,0,0-43.86279,30.04053,56.07211,56.07211,0,0,0-4.69043,73.87695,16.03254,16.03254,0,0,0,18.55078,4.99707L87.35059,166.125a15.94917,15.94917,0,0,0,9.74609-11.71875l5.90527-29.51172a76.1958,76.1958,0,0,1,9.07422-2.51709l90.00391,99.0044a8.0006,8.0006,0,1,0,11.83984-10.76368Z" />
      <path d="M229.82422,106.17578a144.20418,144.20418,0,0,0-109.73633-41.96A8.00053,8.00053,0,0,0,114.60547,77.585l94.36035,103.79883a8.0075,8.0075,0,0,0,2.94824,2.04687l4.04883,1.62012a16.03429,16.03429,0,0,0,18.55273-4.99805A56.07343,56.07343,0,0,0,229.82422,106.17578Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M114.9947,113.69328a83.97034,83.97034,0,0,0-14.728,3.68282,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,135.45028,135.45028,0,0,1,51.9466-32.47622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M120.52563,72.20427a135.66,135.66,0,0,1,103.64089,39.62921,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-4.04895-1.61958"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M114.9947,113.69328a83.97034,83.97034,0,0,0-14.728,3.68282,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,135.45028,135.45028,0,0,1,51.9466-32.47622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M120.52563,72.20427a135.66,135.66,0,0,1,103.64089,39.62921,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-4.04895-1.61958"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M114.9947,113.69328a83.97034,83.97034,0,0,0-14.728,3.68282,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,177.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,135.45028,135.45028,0,0,1,51.9466-32.47622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.52563,72.20427a135.66,135.66,0,0,1,103.64089,39.62921,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-4.04895-1.61958"
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

const PhoneSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PhoneSlash.displayName = "PhoneSlash";

export default PhoneSlash;
