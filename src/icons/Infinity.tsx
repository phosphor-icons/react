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
      d="M101.28431,158.16615l-3.34318,3.775a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-3.34318,3.775"
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
      d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
    <path d="M248,128a55.99955,55.99955,0,0,1-95.59766,39.59766q-.17137-.17139-.332-.35254L92.11963,99.55225a40,40,0,1,0,0,56.8955l8.519-9.61914a8,8,0,1,1,11.97754,10.6084l-8.68652,9.80811q-.16041.1809-.332.35254a56,56,0,1,1,0-79.19532q.17137.17139.332.35254l59.95068,67.69287a40,40,0,1,0,0-56.8955l-8.519,9.61914A8,8,0,0,1,143.38379,98.563l8.68652-9.80811q.16041-.1809.332-.35254A56,56,0,0,1,248,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
      d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
      d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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

const Infinity = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Infinity.displayName = "Infinity";

export default Infinity;
