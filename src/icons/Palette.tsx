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
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="76" r="16" />
    <circle cx="82.96668" cy="102" r="15.99733" />
    <circle cx="82.96668" cy="154" r="15.99733" />
    <circle cx="173.03332" cy="102" r="15.99733" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      opacity="0.2"
    />
    <path
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="76" r="12" />
    <circle cx="82.96668" cy="102" r="12" />
    <circle cx="82.96668" cy="154" r="12" />
    <circle cx="173.03332" cy="102" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M200.772,53.88965A103.28,103.28,0,0,0,127.99756,24q-.53247,0-1.06543.00488a104.01647,104.01647,0,0,0-33.57227,202.084A32.00105,32.00105,0,0,0,136,195.90234V192a16.01833,16.01833,0,0,1,16-16h46.20947a31.81973,31.81973,0,0,0,31.20508-24.87207,104.49414,104.49414,0,0,0,2.58154-24.01953A103.2063,103.2063,0,0,0,200.772,53.88965ZM88.96667,164.39209A12,12,0,1,1,93.359,148,11.99983,11.99983,0,0,1,88.96667,164.39209ZM93.359,108a12,12,0,1,1-4.39234-16.39258A12,12,0,0,1,93.359,108ZM128,88a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm51.03333,24.39209A12,12,0,1,1,183.42566,96,11.99981,11.99981,0,0,1,179.03333,112.39209Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="76" r="10" />
    <circle cx="82.96668" cy="102" r="9.99833" />
    <circle cx="82.96668" cy="154" r="9.99833" />
    <circle cx="173.03332" cy="102" r="9.99833" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="76" r="8" />
    <circle cx="82.9667" cy="102" r="7.99867" />
    <circle cx="82.9667" cy="154" r="7.99866" />
    <circle cx="173.0333" cy="102" r="7.99866" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M221.61367,149.35463a96.28545,96.28545,0,0,0,2.38287-22.17837c-.44383-52.82934-44.1551-95.70346-96.98364-95.17129a96.01642,96.01642,0,0,0-30.989,186.54089A24.002,24.002,0,0,0,128,195.90236V192a24,24,0,0,1,24-24h46.20931A23.99131,23.99131,0,0,0,221.61367,149.35463Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="76" r="12" />
    <circle cx="82.96668" cy="102" r="12" />
    <circle cx="82.96668" cy="154" r="12" />
    <circle cx="173.03332" cy="102" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Palette = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Palette.displayName = "Palette";

export default Palette;
