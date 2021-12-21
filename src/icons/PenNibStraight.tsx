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
    <line
      x1="128"
      y1="156"
      x2="128"
      y2="244"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="132"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="72 72 42.5 131.8 128 244 213.5 131.8 184 72 72 72"
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
      d="M211.4,127.4,184,72H72L44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3A8.2,8.2,0,0,0,211.4,127.4ZM128,152a20,20,0,1,1,20-20A20.1,20.1,0,0,1,128,152Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="248"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z"
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
    <circle cx="128" cy="132" r="16" />
    <path d="M218.6,123.9,192,70.1V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V70.1L37.4,123.9a16.1,16.1,0,0,0,1.5,16.6l73.9,100.3a4,4,0,0,0,7.2-2.4V163a32,32,0,1,1,16,0v75.4a4,4,0,0,0,7.2,2.4l73.9-100.3A16.1,16.1,0,0,0,218.6,123.9ZM176,64H80V32h96Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="248"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="128"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z"
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
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="248"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="128"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z"
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
    <line
      x1="128"
      y1="152"
      x2="128"
      y2="248"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="132"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,72V32a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,72,44.6,127.4a8.2,8.2,0,0,0,.7,8.3L128,248l82.7-112.3a8.2,8.2,0,0,0,.7-8.3L184,72Z"
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

const PenNibStraight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PenNibStraight.displayName = "PenNibStraight";

export default PenNibStraight;
