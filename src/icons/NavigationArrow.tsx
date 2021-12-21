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
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
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
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
      opacity="0.2"
    />
    <path
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
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
    <path d="M219.5,88.4,50.2,29.8A16,16,0,0,0,29.8,50.2L88.4,219.5a15.8,15.8,0,0,0,15.1,10.8h.3a15.6,15.6,0,0,0,15-11.2l23.6-76.6L219,118.8a15.8,15.8,0,0,0,11.3-15A15.9,15.9,0,0,0,219.5,88.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
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
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
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
      d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
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

const NavigationArrow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NavigationArrow.displayName = "NavigationArrow";

export default NavigationArrow;
