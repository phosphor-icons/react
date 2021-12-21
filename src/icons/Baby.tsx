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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="92" cy="128" r="16" />
    <circle cx="164" cy="128" r="16" />
    <path
      d="M154.5,168a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,16,16,16.7,16.7,0,0,0,8-2.1"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <path
      d="M154.5,168a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <path d="M134.2,24.2a3.9,3.9,0,0,0-3.6,1.8C120.3,41.6,120,55.9,120,56a7.9,7.9,0,0,0,9.7,7.8c3.7-.7,6.2-4.2,6.3-8a8.1,8.1,0,0,1,8.8-7.8,8.2,8.2,0,0,1,7.2,8.3,24,24,0,0,1-48-.3c0-.6.1-10.8,5.4-24a4,4,0,0,0-4.6-5.4A104.1,104.1,0,0,0,24.1,131.7C26,186.8,71.2,231.1,126.3,232a104,104,0,0,0,7.9-207.8ZM80,128a12,12,0,1,1,12,12A12,12,0,0,1,80,128Zm79,46.7a56.3,56.3,0,0,1-62,0,8.1,8.1,0,0,1-2.2-11.1,8,8,0,0,1,11.1-2.3,39.8,39.8,0,0,0,44.2,0,8,8,0,0,1,11.1,2.3A8.1,8.1,0,0,1,159,174.7Zm5-34.7a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="128" r="10" />
    <circle cx="164" cy="128" r="10" />
    <path
      d="M154.5,168a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="128" r="8" />
    <circle cx="164" cy="128" r="8" />
    <path
      d="M154.5,168a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <path
      d="M154.5,168a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0"
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

const Baby = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Baby.displayName = "Baby";

export default Baby;
