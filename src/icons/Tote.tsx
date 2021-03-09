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
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,104V72a40,40,0,0,1,80,0v32"
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
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      opacity="0.2"
    />
    <path
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,104V72a40,40,0,0,1,80,0v32"
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
    <path d="M234.9834,69.3291A16.01892,16.01892,0,0,0,223.06152,64H175.3208a47.99073,47.99073,0,0,0-94.6416,0H32.93848A16.00031,16.00031,0,0,0,17.03613,81.7666L31.25781,209.76709A15.98372,15.98372,0,0,0,47.16016,224H208.83984a15.98375,15.98375,0,0,0,15.90235-14.2334l14.22168-128A16.01871,16.01871,0,0,0,234.9834,69.3291ZM95.99219,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0ZM97.0127,64a32.00443,32.00443,0,0,1,61.9746,0Zm78.97949,40a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,104V72a40,40,0,0,1,80,0v32"
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
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,104V72a40,40,0,0,1,80,0v32"
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
      d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,104V72a40,40,0,0,1,80,0v32"
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

const Tote = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Tote.displayName = "Tote";

export default Tote;
