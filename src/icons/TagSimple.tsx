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
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
      opacity="0.2"
    />
    <path
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
    <path d="M246.65625,123.56213l-45.624-68.43652a15.9687,15.9687,0,0,0-13.31348-7.126H40a16.01833,16.01833,0,0,0-16,16v128a16.01833,16.01833,0,0,0,16,16H187.71875a15.96649,15.96649,0,0,0,13.31348-7.125l-.001.001,45.625-68.43848A7.99771,7.99771,0,0,0,246.65625,123.56213Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
      d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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

const TagSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TagSimple.displayName = "TagSimple";

export default TagSimple;
