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
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
      opacity="0.2"
    />
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
    <path d="M208,100V32a8,8,0,0,0-8-8H56a8,8,0,0,0-5.5,13.8L107.9,92H56a8,8,0,0,0-8,8v68a7.9,7.9,0,0,0,2.5,5.8l72,68A8.2,8.2,0,0,0,128,244a7.4,7.4,0,0,0,3.2-.7A7.9,7.9,0,0,0,136,236V176h64a8,8,0,0,0,5.5-13.8L148.1,108H200A8,8,0,0,0,208,100Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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
    <polygon
      points="56 100 56 168 128 236 128 168 200 168 56 32 200 32 200 100 56 100"
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

const FramerLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FramerLogo.displayName = "FramerLogo";

export default FramerLogo;
