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
      d="M18.468,121.27057,107.67394,63.9239A8,8,0,0,1,120,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L18.468,134.72943A8,8,0,0,1,18.468,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
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
      d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z"
      opacity="0.2"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
      opacity="0.2"
    />
    <path
      d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
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
    <path d="M10.1416,114.541,99.34766,57.19434A16.00057,16.00057,0,0,1,124,70.65332v42.69287l87.34766-56.15185A16.00057,16.00057,0,0,1,236,70.65332V185.34668a15.99914,15.99914,0,0,1-24.65234,13.459L124,142.65381v42.69287a15.99914,15.99914,0,0,1-24.65234,13.459L10.1416,141.459a16.0005,16.0005,0,0,1,0-26.918Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
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
      d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
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
      d="M14.468,121.27057,103.67394,63.9239A8,8,0,0,1,116,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L14.468,134.72943A8,8,0,0,1,14.468,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.468,121.27057,215.67394,63.9239A8,8,0,0,1,228,70.65332V185.34668a8,8,0,0,1-12.32606,6.72942L126.468,134.72943A8,8,0,0,1,126.468,121.27057Z"
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

const Rewind = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Rewind.displayName = "Rewind";

export default Rewind;
