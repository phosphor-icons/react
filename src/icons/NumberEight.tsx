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
      d="M178.76923,71.66667a46.108,46.108,0,0,1-14.87,33.70542,53.13546,53.13546,0,0,1-71.79854,0,45.63467,45.63467,0,0,1,0-67.41085,53.13546,53.13546,0,0,1,71.79854,0A46.108,46.108,0,0,1,178.76923,71.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M188,175.66667a54.49122,54.49122,0,0,1-17.57359,39.83368,62.79644,62.79644,0,0,1-84.85282,0,53.93188,53.93188,0,0,1,0-79.66737,62.79644,62.79644,0,0,1,84.85282,0A54.49124,54.49124,0,0,1,188,175.66667Z"
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
      d="M178.76923,71.66667a46.108,46.108,0,0,1-14.87,33.70542,53.13546,53.13546,0,0,1-71.79854,0,45.63467,45.63467,0,0,1,0-67.41085,53.13546,53.13546,0,0,1,71.79854,0A46.108,46.108,0,0,1,178.76923,71.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,175.66667a54.49122,54.49122,0,0,1-17.57359,39.83368,62.79644,62.79644,0,0,1-84.85282,0,53.93188,53.93188,0,0,1,0-79.66737,62.79644,62.79644,0,0,1,84.85282,0A54.49124,54.49124,0,0,1,188,175.66667Z"
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
    <path d="M175.90234,130.00049a68.12024,68.12024,0,0,0-16.36377-11.356,58.78324,58.78324,0,0,0,9.83643-7.43994,53.63156,53.63156,0,0,0,0-79.0752,61.13213,61.13213,0,0,0-82.75,0,53.63156,53.63156,0,0,0,0,79.0752,58.76231,58.76231,0,0,0,9.83667,7.43994,68.1188,68.1188,0,0,0-16.364,11.35645,61.93012,61.93012,0,0,0,0,91.332,70.79516,70.79516,0,0,0,95.80468-.00049,61.93012,61.93012,0,0,0,0-91.332ZM97.57617,99.53955a37.63752,37.63752,0,0,1,0-55.74609,45.13922,45.13922,0,0,1,60.84766,0,37.63752,37.63752,0,0,1,0,55.74609,45.13783,45.13783,0,0,1-60.84766,0Zm67.375,110.12842a54.80089,54.80089,0,0,1-73.90234.00049,45.936,45.936,0,0,1,0-68.00293,54.80089,54.80089,0,0,1,73.90234-.00049,45.936,45.936,0,0,1,0,68.00293Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M178.76923,71.66667a46.108,46.108,0,0,1-14.87,33.70542,53.13546,53.13546,0,0,1-71.79854,0,45.63467,45.63467,0,0,1,0-67.41085,53.13546,53.13546,0,0,1,71.79854,0A46.108,46.108,0,0,1,178.76923,71.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188,175.66667a54.49122,54.49122,0,0,1-17.57359,39.83368,62.79644,62.79644,0,0,1-84.85282,0,53.93188,53.93188,0,0,1,0-79.66737,62.79644,62.79644,0,0,1,84.85282,0A54.49124,54.49124,0,0,1,188,175.66667Z"
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
      d="M178.76923,71.66667a46.108,46.108,0,0,1-14.87,33.70542,53.13546,53.13546,0,0,1-71.79854,0,45.63467,45.63467,0,0,1,0-67.41085,53.13546,53.13546,0,0,1,71.79854,0A46.108,46.108,0,0,1,178.76923,71.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188,175.66667a54.49122,54.49122,0,0,1-17.57359,39.83368,62.79644,62.79644,0,0,1-84.85282,0,53.93188,53.93188,0,0,1,0-79.66737,62.79644,62.79644,0,0,1,84.85282,0A54.49124,54.49124,0,0,1,188,175.66667Z"
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
      d="M178.76923,71.66667a46.108,46.108,0,0,1-14.87,33.70542,53.13546,53.13546,0,0,1-71.79854,0,45.63467,45.63467,0,0,1,0-67.41085,53.13546,53.13546,0,0,1,71.79854,0A46.108,46.108,0,0,1,178.76923,71.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,175.66667a54.49122,54.49122,0,0,1-17.57359,39.83368,62.79644,62.79644,0,0,1-84.85282,0,53.93188,53.93188,0,0,1,0-79.66737,62.79644,62.79644,0,0,1,84.85282,0A54.49124,54.49124,0,0,1,188,175.66667Z"
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
