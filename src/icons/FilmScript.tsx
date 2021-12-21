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
    <rect
      x="48"
      y="32"
      width="160"
      height="192"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="92" cy="80" r="16" />
    <circle cx="92" cy="176" r="16" />
    <circle cx="92" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2" />
    <rect
      x="48"
      y="32"
      width="160"
      height="192"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="80" r="12" />
    <circle cx="84" cy="176" r="12" />
    <circle cx="84" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="48"
      y="32"
      width="160"
      height="192"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="84" cy="80" r="10" />
    <circle cx="84" cy="176" r="10" />
    <circle cx="84" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="48"
      y="32"
      width="160"
      height="192"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="84" cy="80" r="8" />
    <circle cx="84" cy="176" r="8" />
    <circle cx="84" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="48"
      y="32"
      width="160"
      height="192"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="76" r="12" />
    <circle cx="84" cy="180" r="12" />
    <circle cx="84" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FilmScript = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FilmScript.displayName = "FilmScript";

export default FilmScript;
