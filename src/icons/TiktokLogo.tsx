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
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
      opacity="0.2"
    />
    <path
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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
    <path d="M232,84v40a7.99977,7.99977,0,0,1-8,8,103.32406,103.32406,0,0,1-48.00049-11.70752L176,156A76,76,0,1,1,86.59766,81.17971,7.99952,7.99952,0,0,1,96,89.05569l-.00049,41.63916a7.99971,7.99971,0,0,1-4.56689,7.22607A20.00272,20.00272,0,1,0,120,156V28a7.99977,7.99977,0,0,1,8-8h40a7.99977,7.99977,0,0,1,8,8,48.05436,48.05436,0,0,0,48,48A7.99977,7.99977,0,0,1,232,84Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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
      d="M167.99955,105.98292A95.56434,95.56434,0,0,0,224,124V84a56,56,0,0,1-56-56l-40,0V156a28,28,0,1,1-40.00062-25.30518L88,89.05549A68.00535,68.00535,0,1,0,168,156Z"
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

const TiktokLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TiktokLogo.displayName = "TiktokLogo";

export default TiktokLogo;
