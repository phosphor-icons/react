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
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="76" r="16" />
    <circle cx="83" cy="102" r="16" />
    <circle cx="83" cy="154" r="16" />
    <circle cx="173" cy="102" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      opacity="0.2"
    />
    <path
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="76" r="12" />
    <circle cx="83" cy="102" r="12" />
    <circle cx="83" cy="154" r="12" />
    <circle cx="173" cy="102" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M200.8,53.9A103.4,103.4,0,0,0,128,24h-1.1A104,104,0,0,0,93.4,226.1,32,32,0,0,0,136,195.9V192a16,16,0,0,1,16-16h46.2a31.7,31.7,0,0,0,31.2-24.9,101.5,101.5,0,0,0,2.6-24A102.9,102.9,0,0,0,200.8,53.9ZM89,164.4A12,12,0,1,1,93.4,148,12,12,0,0,1,89,164.4ZM93.4,108A12,12,0,1,1,89,91.6,12.1,12.1,0,0,1,93.4,108ZM128,88a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm51,24.4A12,12,0,1,1,183.4,96,12.1,12.1,0,0,1,179,112.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="76" r="10" />
    <circle cx="83" cy="102" r="10" />
    <circle cx="83" cy="154" r="10" />
    <circle cx="173" cy="102" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="76" r="8" />
    <circle cx="83" cy="102" r="8" />
    <circle cx="83" cy="154" r="8" />
    <circle cx="173" cy="102" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M221.6,149.4a96.2,96.2,0,0,0,2.4-22.2c-.4-52.9-44.2-95.7-97-95.2A96,96,0,0,0,96,218.5a23.9,23.9,0,0,0,32-22.6V192a23.9,23.9,0,0,1,24-24h46.2A24,24,0,0,0,221.6,149.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="76" r="12" />
    <circle cx="83" cy="102" r="12" />
    <circle cx="83" cy="154" r="12" />
    <circle cx="173" cy="102" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Palette = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Palette.displayName = "Palette";

export default Palette;
