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
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136A96.0001,96.0001,0,0,0,128.7279,40.0027,96.00009,96.00009,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z"
      opacity="0.2"
    />
    <path
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136A96.0001,96.0001,0,0,0,128.7279,40.0027,96.00009,96.00009,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
    <path d="M202.7207,62.1875A103.28167,103.28167,0,0,0,129.46289,32c-.24414,0-.49121.001-.73535.00244A104.00025,104.00025,0,0,0,24,136v56a24.0275,24.0275,0,0,0,24,24H64a24.0275,24.0275,0,0,0,24-24V152a24.0275,24.0275,0,0,0-24-24H40.35547A88.01928,88.01928,0,0,1,128.668,48.00244c.041.00049.07812.00049.11914,0A88.01738,88.01738,0,0,1,217.10059,128H193.45605a24.0275,24.0275,0,0,0-24,24v40a24.0275,24.0275,0,0,0,24,24h16a24.0275,24.0275,0,0,0,24-24V136A103.28343,103.28343,0,0,0,202.7207,62.1875Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136A96.0001,96.0001,0,0,0,128.7279,40.0027,96.00009,96.00009,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136A96.0001,96.0001,0,0,0,128.7279,40.0027,96.00009,96.00009,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
      d="M225.45581,136h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136A96.0001,96.0001,0,0,0,128.7279,40.0027,96.00009,96.00009,0,0,0,32,136v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32"
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
