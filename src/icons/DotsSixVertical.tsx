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
    <circle cx="92" cy="60" r="16" />
    <circle cx="164" cy="60" r="16" />
    <circle cx="92" cy="128" r="16" />
    <circle cx="164" cy="128" r="16" />
    <circle cx="92" cy="196" r="16" />
    <circle cx="164" cy="196" r="16" />
  </>
));

pathsByWeight.set("duotone", () => (
  <>
    <circle cx="92" cy="60" r="12" />
    <circle cx="164" cy="60" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="196" r="12" />
    <circle cx="164" cy="196" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z" />
  </>
));

pathsByWeight.set("light", () => (
  <>
    <circle cx="92" cy="60" r="10" />
    <circle cx="164" cy="60" r="10" />
    <circle cx="92" cy="128" r="10" />
    <circle cx="164" cy="128" r="10" />
    <circle cx="92" cy="196" r="10" />
    <circle cx="164" cy="196" r="10" />
  </>
));

pathsByWeight.set("thin", () => (
  <>
    <circle cx="92" cy="60" r="8" />
    <circle cx="164" cy="60" r="8" />
    <circle cx="92" cy="128" r="8" />
    <circle cx="164" cy="128" r="8" />
    <circle cx="92" cy="196" r="8" />
    <circle cx="164" cy="196" r="8" />
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <circle cx="92" cy="60" r="12" />
    <circle cx="164" cy="60" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="196" r="12" />
    <circle cx="164" cy="196" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsSixVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsSixVertical.displayName = "DotsSixVertical";

export default DotsSixVertical;
