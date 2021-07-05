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
      d="M40,72s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,128s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,184s40-32,88,0,88,0,88,0"
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
      d="M40,72s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,184s40-32,88,0,88,0,88,0"
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
    <path d="M33.74609,76.96289a7.98611,7.98611,0,0,1,1.25635-11.21A81.79682,81.79682,0,0,1,64.05957,52.23926c16.16406-4.042,41.14941-5.04785,68.37793,13.10449,42.333,28.22363,77.12891,1.53906,78.58887.38965a8.00032,8.00032,0,0,1,9.97119,12.51367,81.79682,81.79682,0,0,1-29.05713,13.51367,81.324,81.324,0,0,1-19.71484,2.4375c-14.04053,0-30.87207-3.68164-48.66309-15.542-42.333-28.22266-77.12842-1.53906-78.58887-.38965A8.01729,8.01729,0,0,1,33.74609,76.96289ZM211.02637,121.7334c-1.46,1.14941-36.25586,27.833-78.58887-.38965-27.22852-18.15137-52.21387-17.14844-68.37793-13.10449a81.79682,81.79682,0,0,0-29.05713,13.51367,8.00032,8.00032,0,0,0,9.97119,12.51367c1.46045-1.14941,36.25586-27.834,78.58887.38965,17.791,11.86035,34.62256,15.542,48.66309,15.542a83.50512,83.50512,0,0,0,48.772-15.95117,8.00032,8.00032,0,0,0-9.97119-12.51367Zm0,56c-1.46,1.15039-36.25586,27.832-78.58887-.38965-27.22852-18.15332-52.21387-17.14746-68.37793-13.10449a81.79682,81.79682,0,0,0-29.05713,13.51367,8.00032,8.00032,0,0,0,9.97119,12.51367c1.46045-1.15039,36.25586-27.835,78.58887.38965,17.791,11.86035,34.62256,15.542,48.66309,15.542a83.50512,83.50512,0,0,0,48.772-15.95117,8.00032,8.00032,0,0,0-9.97119-12.51367Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M40,72s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,128s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,184s40-32,88,0,88,0,88,0"
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
      d="M40,72s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,128s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,184s40-32,88,0,88,0,88,0"
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
      d="M40,72s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128s40-32,88,0,88,0,88,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,184s40-32,88,0,88,0,88,0"
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

const Waves = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Waves.displayName = "Waves";

export default Waves;
