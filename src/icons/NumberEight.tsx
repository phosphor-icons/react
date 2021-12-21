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
      d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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
      d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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
    <path d="M175.9,130a68.8,68.8,0,0,0-16.4-11.4,59.4,59.4,0,0,0,9.9-7.4,53.6,53.6,0,0,0,0-79.1,61.3,61.3,0,0,0-82.8,0,53.6,53.6,0,0,0,0,79.1,59.4,59.4,0,0,0,9.9,7.4A68.8,68.8,0,0,0,80.1,130a61.9,61.9,0,0,0,0,91.3,70.7,70.7,0,0,0,95.8,0,61.9,61.9,0,0,0,0-91.3ZM97.6,99.5a37.5,37.5,0,0,1,0-55.7,45.1,45.1,0,0,1,60.8,0,37.5,37.5,0,0,1,0,55.7,45.1,45.1,0,0,1-60.8,0ZM165,209.7a55,55,0,0,1-74,0,46,46,0,0,1,0-68,54.7,54.7,0,0,1,74,0,46,46,0,0,1,0,68Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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
      d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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
      d="M178.8,71.7a46.3,46.3,0,0,1-14.9,33.7,53.3,53.3,0,0,1-71.8,0,45.6,45.6,0,0,1,0-67.4,53,53,0,0,1,71.8,0A46,46,0,0,1,178.8,71.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,175.7a54.4,54.4,0,0,1-17.6,39.8,62.7,62.7,0,0,1-84.8,0,53.9,53.9,0,0,1,0-79.7,62.7,62.7,0,0,1,84.8,0A54.4,54.4,0,0,1,188,175.7Z"
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

const NumberEight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberEight.displayName = "NumberEight";

export default NumberEight;
