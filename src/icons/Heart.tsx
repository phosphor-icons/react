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
      d="M128.01758,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.01766,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.01758,92C228.01758,160,128.01758,216,128.01758,216Z"
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
      d="M128.0293,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.02938,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.0293,92C228.0293,160,128.0293,216,128.0293,216Z"
      opacity="0.2"
    />
    <path
      d="M128.0293,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.02938,71.965l-.0002.00008A52.00882,52.00882,0,0,1,228.0293,92C228.0293,160,128.0293,216,128.0293,216Z"
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
    <path d="M176.02344,32a59.85506,59.85506,0,0,0-48,23.95947A60.02029,60.02029,0,0,0,20.02344,92c0,71.86279,99.84082,128.6001,104.09082,130.98a8.00089,8.00089,0,0,0,7.81836,0A317.34027,317.34027,0,0,0,183.375,185.44629C218.30957,154.00488,236.02344,122.56494,236.02344,92A60.06812,60.06812,0,0,0,176.02344,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128.01172,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.0118,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228.01172,92C228.01172,160,128.01172,216,128.01172,216Z"
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
      d="M128.00586,216s-100-56-100-124A52.00881,52.00881,0,0,1,128.00594,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228.00586,92C228.00586,160,128.00586,216,128.00586,216Z"
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
      d="M128,216S28,160,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92C228,160,128,216,128,216Z"
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

const Heart = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Heart.displayName = "Heart";

export default Heart;
