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
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
      opacity="0.2"
    />
    <path
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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
    <path d="M240.2,136v32a7.8,7.8,0,0,1-2.9,6.2,7.9,7.9,0,0,1-6.6,1.6l-70.5-14v26.9l13.5,13.7A7.9,7.9,0,0,1,176,208v24a7.9,7.9,0,0,1-3.5,6.6A8.2,8.2,0,0,1,168,240a8,8,0,0,1-3-.6l-37-14.8L91,239.4a8,8,0,0,1-7.5-.8A7.9,7.9,0,0,1,80,232V208a8.1,8.1,0,0,1,2.3-5.7L96,188.7V161.8l-70.4,14A7.9,7.9,0,0,1,16,168V136a8.2,8.2,0,0,1,4.4-7.2L96,91V48a32,32,0,0,1,64,0V91l75.6,37.8A8.2,8.2,0,0,1,240.2,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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
      d="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
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

const Airplane = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Airplane.displayName = "Airplane";

export default Airplane;
