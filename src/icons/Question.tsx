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
    <circle
      cx="128.00146"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="176" r="16" />
    <path
      d="M128.001,136.0045a28,28,0,1,0-28-28"
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
    <circle cx="128.00244" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128.00244"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128.00244" cy="180" r="12" />
    <path
      d="M128.00194,144.0045v-8a28,28,0,1,0-28-28"
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
    <path d="M128.00146,23.99963a104,104,0,1,0,104,104A104.11791,104.11791,0,0,0,128.00146,23.99963ZM128.002,192a12,12,0,1,1,12-12A12,12,0,0,1,128.002,192Zm7.99951-48.891v.89551a8,8,0,1,1-16,0v-8a8.0004,8.0004,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,1,1,44,35.10449Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128.00098"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="180" r="10" />
    <path
      d="M128.00048,144.0045v-8a28,28,0,1,0-28-28"
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
    <circle
      cx="128.00049"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="180" r="8" />
    <path
      d="M128,144.0045v-8a28,28,0,1,0-28-28"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="180" r="12" />
    <path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
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

const Question = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Question.displayName = "Question";

export default Question;
