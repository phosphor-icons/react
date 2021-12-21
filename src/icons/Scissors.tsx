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
      cx="60"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="60"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="136"
      y1="128"
      x2="83.1"
      y2="164.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="232"
      y1="193.7"
      x2="83.1"
      y2="91.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="232"
      y1="62.3"
      x2="171.4"
      y2="103.8"
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
    <circle cx="60" cy="76" r="28" opacity="0.2" />
    <circle cx="60" cy="180" r="28" opacity="0.2" />
    <circle
      cx="60"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="60"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="128"
      x2="83.1"
      y2="164.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="62.3"
      x2="164.3"
      y2="108.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="193.7"
      x2="83.1"
      y2="91.8"
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
    <path d="M157.7,113.1a8,8,0,0,1,2.1-11.1l67.7-46.3a8,8,0,0,1,11.1,2.1,7.9,7.9,0,0,1-2.1,11.1l-67.6,46.3a7.8,7.8,0,0,1-4.6,1.4A8,8,0,0,1,157.7,113.1Zm80.9,85.1a7.9,7.9,0,0,1-6.6,3.5,8.2,8.2,0,0,1-4.5-1.4L136,137.7,93.5,166.8A36.4,36.4,0,0,1,96,180a36.1,36.1,0,1,1-11.6-26.4L121.8,128,84.4,102.4A35.5,35.5,0,0,1,60,112,36,36,0,1,1,93.5,89.2l143,97.9A7.9,7.9,0,0,1,238.6,198.2ZM80,180a19.7,19.7,0,0,0-5.9-14.1,19.8,19.8,0,0,0-28.2,0,19.8,19.8,0,0,0,0,28.2,19.9,19.9,0,0,0,28.2,0A19.7,19.7,0,0,0,80,180ZM74.1,90.1a19.8,19.8,0,0,0,0-28.2,19.8,19.8,0,0,0-28.2,0,19.8,19.8,0,0,0,0,28.2A19.9,19.9,0,0,0,74.1,90.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="60"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="60"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="136"
      y1="128"
      x2="83.1"
      y2="164.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="232"
      y1="62.3"
      x2="164.3"
      y2="108.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="232"
      y1="193.7"
      x2="83.1"
      y2="91.8"
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
      cx="60"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="60"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="136"
      y1="128"
      x2="83.1"
      y2="164.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="232"
      y1="62.3"
      x2="164.3"
      y2="108.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="232"
      y1="193.7"
      x2="83.1"
      y2="91.8"
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
      cx="60"
      cy="76"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="60"
      cy="180"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="128"
      x2="83.1"
      y2="164.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="62.3"
      x2="164.3"
      y2="108.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="193.7"
      x2="83.1"
      y2="91.8"
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

const Scissors = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Scissors.displayName = "Scissors";

export default Scissors;
