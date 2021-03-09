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
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M225.45581,184v24a32,32,0,0,1-32,32H136"
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
      d="M32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16Z"
      opacity="0.2"
    />
    <path
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z"
      opacity="0.2"
    />
    <path
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M225.45581,184v24a32,32,0,0,1-32,32H136"
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
    <path d="M233.45605,128v80a40.04551,40.04551,0,0,1-40,40H136a8,8,0,0,1,0-16h57.45605a24.0275,24.0275,0,0,0,24-24v-1.376a23.89418,23.89418,0,0,1-8,1.376h-16a24.0275,24.0275,0,0,1-24-24V144a24.0275,24.0275,0,0,1,24-24h23.64454a88.01738,88.01738,0,0,0-88.31348-79.99756c-.041.00049-.07813.00049-.11914,0A88.01928,88.01928,0,0,0,40.35547,120H64a24.0275,24.0275,0,0,1,24,24v40a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24V128A104.00025,104.00025,0,0,1,128.72754,24.00244c.24414-.00146.49121-.00244.73535-.00244A104.00007,104.00007,0,0,1,233.45605,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M225.45581,184v24a32,32,0,0,1-32,32H136"
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
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M225.45581,184v24a32,32,0,0,1-32,32H136"
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
      d="M225.45581,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128A96.0001,96.0001,0,0,0,128.7279,32.0027,96.00009,96.00009,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M225.45581,184v24a32,32,0,0,1-32,32H136"
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

const Headset = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Headset.displayName = "Headset";

export default Headset;
