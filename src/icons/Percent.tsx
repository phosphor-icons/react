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
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="76"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="180"
      cy="180"
      r="28"
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
    <circle cx="76" cy="76" r="28" opacity="0.2" />
    <circle cx="180" cy="180" r="28" opacity="0.2" />
    <line
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="76"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M205.7,61.7l-144,144a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l144-144a8.1,8.1,0,0,1,11.4,11.4ZM50.5,101.5a36.2,36.2,0,0,1,0-51,36.2,36.2,0,0,1,51,0,36.1,36.1,0,0,1-51,51ZM56,76a19.7,19.7,0,0,0,5.9,14.1,19.9,19.9,0,0,0,28.2,0,19.8,19.8,0,0,0,0-28.2h0a19.8,19.8,0,0,0-28.2,0A19.7,19.7,0,0,0,56,76ZM216,180a36,36,0,1,1-61.5-25.5,36.2,36.2,0,0,1,51,0A35.9,35.9,0,0,1,216,180Zm-16,0a19.7,19.7,0,0,0-5.9-14.1,19.8,19.8,0,0,0-28.2,0A19.9,19.9,0,1,0,200,180Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="76"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="180"
      cy="180"
      r="28"
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
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="76"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="180"
      cy="180"
      r="28"
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
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="76"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Percent = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Percent.displayName = "Percent";

export default Percent;
