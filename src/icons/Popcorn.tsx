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
      d="M35.1,93.3,62.5,209.8a8.1,8.1,0,0,0,7.8,6.2H185.7a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,131,81.2a7.8,7.8,0,0,0-6,0L88,96,45.1,83.7A8.1,8.1,0,0,0,35.1,93.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="96"
      x2="104"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="96"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,84a36,36,0,0,0-52.9-31.8,35.9,35.9,0,0,0-70.2,0A36,36,0,0,0,40,84"
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
      d="M104,216,88,96,45.1,83.7a8.1,8.1,0,0,0-10,9.6L62.5,209.8a8.1,8.1,0,0,0,7.8,6.2Z"
      opacity="0.2"
    />
    <path
      d="M185.7,216a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,152,216Z"
      opacity="0.2"
    />
    <path
      d="M35.1,93.3,62.5,209.8a8.1,8.1,0,0,0,7.8,6.2H185.7a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,131,81.2a7.8,7.8,0,0,0-6,0L88,96,45.1,83.7A8.1,8.1,0,0,0,35.1,93.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="96"
      x2="104"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="96"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,84a36,36,0,0,0-52.9-31.8,35.9,35.9,0,0,0-70.2,0A36,36,0,0,0,40,84"
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
    <path d="M224.1,79.9l-.3-.4A43.9,43.9,0,0,0,168,41.7a44,44,0,0,0-80,0A43.9,43.9,0,0,0,32.2,79.5l-.3.4a15.7,15.7,0,0,0-4.6,15.2L54.8,211.7A15.9,15.9,0,0,0,70.3,224H185.7a15.9,15.9,0,0,0,15.5-12.3L228.7,95.1A15.7,15.7,0,0,0,224.1,79.9ZM76,56a27.4,27.4,0,0,1,13.1,3.3,8.4,8.4,0,0,0,7.1.2,8.2,8.2,0,0,0,4.5-5.6,28,28,0,0,1,54.6,0,8.2,8.2,0,0,0,4.5,5.6,8.4,8.4,0,0,0,7.1-.2A27.4,27.4,0,0,1,180,56a28,28,0,0,1,27,20.5L168.4,87.6,133.9,73.8a15.1,15.1,0,0,0-11.8,0L87.6,87.6,49,76.5A28,28,0,0,1,76,56ZM42.9,91.4h0l37.9,10.9L94.9,208H70.3ZM185.7,208H161.1l14.1-105.7,37.9-10.9h0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M35.1,93.3,62.5,209.8a8.1,8.1,0,0,0,7.8,6.2H185.7a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,131,81.2a7.8,7.8,0,0,0-6,0L88,96,45.1,83.7A8.1,8.1,0,0,0,35.1,93.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="96"
      x2="104"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="96"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,84a36,36,0,0,0-52.9-31.8,35.9,35.9,0,0,0-70.2,0A36,36,0,0,0,40,84"
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
      d="M35.1,93.3,62.5,209.8a8.1,8.1,0,0,0,7.8,6.2H185.7a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,131,81.2a7.8,7.8,0,0,0-6,0L88,96,45.1,83.7A8.1,8.1,0,0,0,35.1,93.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="96"
      x2="104"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="96"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,84a36,36,0,0,0-52.9-31.8,35.9,35.9,0,0,0-70.2,0A36,36,0,0,0,40,84"
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
      d="M35.1,93.3,62.5,209.8a8.1,8.1,0,0,0,7.8,6.2H185.7a8.1,8.1,0,0,0,7.8-6.2L220.9,93.3a8.1,8.1,0,0,0-10-9.6L168,96,131,81.2a7.8,7.8,0,0,0-6,0L88,96,45.1,83.7A8.1,8.1,0,0,0,35.1,93.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="96"
      x2="104"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="96"
      x2="152"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,84a36,36,0,0,0-52.9-31.8,35.9,35.9,0,0,0-70.2,0A36,36,0,0,0,40,84"
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

const Popcorn = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Popcorn.displayName = "Popcorn";

export default Popcorn;
