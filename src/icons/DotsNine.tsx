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
    <circle cx="60" cy="60" r="16" />
    <circle cx="128" cy="60" r="16" />
    <circle cx="196" cy="60" r="16" />
    <circle cx="60" cy="128" r="16" />
    <circle cx="128" cy="128" r="16" />
    <circle cx="196" cy="128" r="16" />
    <circle cx="60" cy="196" r="16" />
    <circle cx="128" cy="196" r="16" />
    <circle cx="196" cy="196" r="16" />
  </>
));

pathsByWeight.set("duotone", () => (
  <>
    <circle cx="60" cy="60" r="12" />
    <circle cx="128" cy="60" r="12" />
    <circle cx="196" cy="60" r="12" />
    <circle cx="60" cy="128" r="12" />
    <circle cx="128" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
    <circle cx="60" cy="196" r="12" />
    <circle cx="128" cy="196" r="12" />
    <circle cx="196" cy="196" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M60,48A12,12,0,1,0,72,60,12,12,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z" />
  </>
));

pathsByWeight.set("light", () => (
  <>
    <circle cx="60" cy="60" r="10" />
    <circle cx="128" cy="60" r="10" />
    <circle cx="196" cy="60" r="10" />
    <circle cx="60" cy="128" r="10" />
    <circle cx="128" cy="128" r="10" />
    <circle cx="196" cy="128" r="10" />
    <circle cx="60" cy="196" r="10" />
    <circle cx="128" cy="196" r="10" />
    <circle cx="196" cy="196" r="10" />
  </>
));

pathsByWeight.set("thin", () => (
  <>
    <circle cx="60" cy="60" r="8" />
    <circle cx="128" cy="60" r="8" />
    <circle cx="196" cy="60" r="8" />
    <circle cx="60" cy="128" r="8" />
    <circle cx="128" cy="128" r="8" />
    <circle cx="196" cy="128" r="8" />
    <circle cx="60" cy="196" r="8" />
    <circle cx="128" cy="196" r="8" />
    <circle cx="196" cy="196" r="8" />
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <circle cx="60" cy="60" r="12" />
    <circle cx="128" cy="60" r="12" />
    <circle cx="196" cy="60" r="12" />
    <circle cx="60" cy="128" r="12" />
    <circle cx="128" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
    <circle cx="60" cy="196" r="12" />
    <circle cx="128" cy="196" r="12" />
    <circle cx="196" cy="196" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsNine.displayName = "DotsNine";

export default DotsNine;
