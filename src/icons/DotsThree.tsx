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

pathsByWeight.set("bold", () => (
  <>
    <circle cx="128" cy="128" r="16" />
    <circle cx="64" cy="128" r="16" />
    <circle cx="192" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", () => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="192" cy="128" r="12" />
    <circle cx="64" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z" />
  </>
));

pathsByWeight.set("light", () => (
  <>
    <circle cx="128" cy="128" r="10" />
    <circle cx="64" cy="128" r="10" />
    <circle cx="192" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", () => (
  <>
    <circle cx="128" cy="128" r="8" />
    <circle cx="64" cy="128" r="8" />
    <circle cx="192" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="192" cy="128" r="12" />
    <circle cx="64" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsThree = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsThree.displayName = "DotsThree";

export default DotsThree;
