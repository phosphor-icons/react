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
      d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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
      d="M146.5,90.5l51.4-52.6a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7Z"
      opacity="0.2"
    />
    <path
      d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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
    <path d="M231.8,32.2a28.1,28.1,0,0,0-39.7.1L18.3,210.4a8,8,0,0,0,3.9,13.4,154.1,154.1,0,0,0,35,4c33.4,0,66.8-10.9,98.3-32.2a232,232,0,0,0,50.9-46.8,8.1,8.1,0,0,0-.7-10.5l-18.8-18.7,45-47.9A28,28,0,0,0,231.8,32.2ZM189.2,144.5a227,227,0,0,1-43.1,38.2c-34.5,23.2-70,32.6-105.8,28.1L146.6,101.9l23.3,23.3c.1.1.2.3.4.4h.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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
      d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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
      d="M146.5,90.5,200,144s-72,96-176,72L197.9,37.9a19.9,19.9,0,0,1,28.2,28.2l-50.3,53.7"
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

const Knife = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Knife.displayName = "Knife";

export default Knife;
