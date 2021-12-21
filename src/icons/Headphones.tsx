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
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16Z"
      opacity="0.2"
    />
    <path
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z"
      opacity="0.2"
    />
    <path
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
    <path d="M202.7,62.2A103.1,103.1,0,0,0,129.5,32h-.8A104,104,0,0,0,24,136v56a24.1,24.1,0,0,0,24,24H64a24.1,24.1,0,0,0,24-24V152a24.1,24.1,0,0,0-24-24H40.4a87.8,87.8,0,0,1,88.3-80h.1a88,88,0,0,1,88.3,80H193.5a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24.1,24.1,0,0,0,24-24V136A103.5,103.5,0,0,0,202.7,62.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M225.5,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,0,0-96.8-96A96,96,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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

const Headphones = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Headphones.displayName = "Headphones";

export default Headphones;
