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
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="216"
      x2="160"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="192"
      y1="152"
      x2="192"
      y2="184"
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
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      opacity="0.2"
    />
    <path
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="216"
      x2="160"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="152"
      x2="192"
      y2="184"
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
    <path d="M233.2251,152.80762A15.95645,15.95645,0,0,1,219.86768,160H200v24a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H36.13232a15.99993,15.99993,0,0,1-14.706-22.30273l41.14258-96A15.98206,15.98206,0,0,1,77.27539,32H178.72461a15.98206,15.98206,0,0,1,14.70654,9.69727l41.14258,96A15.95711,15.95711,0,0,1,233.2251,152.80762Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="216"
      x2="160"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="192"
      y1="152"
      x2="192"
      y2="184"
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
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="216"
      x2="160"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="192"
      y1="152"
      x2="192"
      y2="184"
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
      d="M77.27517,40H178.72483a8,8,0,0,1,7.35316,4.84865l41.14286,96A8,8,0,0,1,219.86769,152H36.13231a8,8,0,0,1-7.35316-11.15135l41.14286-96A8,8,0,0,1,77.27517,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="216"
      x2="160"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="152"
      x2="192"
      y2="184"
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

const Lamp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Lamp.displayName = "Lamp";

export default Lamp;
