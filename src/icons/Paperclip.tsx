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
      d="M95.99414,175.99512,191.799,83.799a28,28,0,0,0-39.598-39.598L54.05887,142.05887a48,48,0,0,0,67.88226,67.88226l82.053-81.946"
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
      d="M159.99414,79.99512,76.68629,164.68629a16,16,0,0,0,22.62742,22.62742L198.62156,86.62253A32,32,0,1,0,153.36672,41.3677L54.05887,142.05887a48,48,0,0,0,67.88226,67.88226l82.053-81.946"
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
    <path d="M209.65479,122.3418a8,8,0,0,1-.00733,11.31347l-82.05322,81.94629a56.00006,56.00006,0,0,1-79.1919-79.20019L147.6709,35.751A39.99954,39.99954,0,1,1,204.27832,92.2793l-99.269,100.65136A23.99954,23.99954,0,1,1,71.02979,159.0293L154.291,74.38477a8.0001,8.0001,0,0,1,11.40625,11.2207L82.38965,170.29688a8,8,0,1,0,11.2666,11.36035L192.92578,81.00488a23.99971,23.99971,0,1,0-33.90185-33.97949L59.75488,147.67578a40.00024,40.00024,0,1,0,56.5293,56.6084L198.34082,122.335A7.99885,7.99885,0,0,1,209.65479,122.3418Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M159.99414,79.99512,76.68629,164.68629a16,16,0,0,0,22.62742,22.62742L198.62156,86.62253A32,32,0,1,0,153.36672,41.3677L54.05887,142.05887a48,48,0,0,0,67.88226,67.88226l82.053-81.946"
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
      d="M159.99414,79.99512,76.68629,164.68629a16,16,0,0,0,22.62742,22.62742L198.62156,86.62253A32,32,0,1,0,153.36672,41.3677L54.05887,142.05887a48,48,0,0,0,67.88226,67.88226l82.053-81.946"
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
      d="M159.99414,79.99512,76.68629,164.68629a16,16,0,0,0,22.62742,22.62742L198.62156,86.62253A32,32,0,1,0,153.36672,41.3677L54.05887,142.05887a48,48,0,0,0,67.88226,67.88226l82.053-81.946"
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

const Paperclip = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Paperclip.displayName = "Paperclip";

export default Paperclip;
