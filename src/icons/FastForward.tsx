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
      d="M237.532,121.27057,148.32606,63.9239A8,8,0,0,0,136,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L237.532,134.72943A8,8,0,0,0,237.532,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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
      d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
      opacity="0.2"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
      opacity="0.2"
    />
    <path
      d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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
    <path d="M253.20605,128a15.9352,15.9352,0,0,1-7.34765,13.459l-89.20606,57.34668A16.00057,16.00057,0,0,1,132,185.34668V142.65381L44.65234,198.80566A16.00057,16.00057,0,0,1,20,185.34668V70.65332a16.00057,16.00057,0,0,1,24.65234-13.459L132,113.34619V70.65332a16.00057,16.00057,0,0,1,24.65234-13.459L245.8584,114.541A15.9352,15.9352,0,0,1,253.20605,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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
      d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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
      d="M241.532,121.27057,152.32606,63.9239A8,8,0,0,0,140,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L241.532,134.72943A8,8,0,0,0,241.532,121.27057Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M129.532,121.27057,40.32606,63.9239A8,8,0,0,0,28,70.65332V185.34668a8,8,0,0,0,12.32606,6.72942L129.532,134.72943A8,8,0,0,0,129.532,121.27057Z"
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

const FastForward = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FastForward.displayName = "FastForward";

export default FastForward;
