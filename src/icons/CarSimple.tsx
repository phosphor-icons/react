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
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120v88A8,8,0,0,1,216,216Z"
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
      d="M32,120,61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120Z"
      opacity="0.2"
    />
    <line
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120v88A8,8,0,0,1,216,216Z"
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
    <path d="M240,112H229.2L201.4,49.5A15.9,15.9,0,0,0,186.8,40H69.2a15.9,15.9,0,0,0-14.6,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120v88A8,8,0,0,1,216,216Z"
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
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120v88A8,8,0,0,1,216,216Z"
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
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,216H192a8,8,0,0,1-8-8V184H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120L61.9,52.8A8,8,0,0,1,69.2,48H186.8a8,8,0,0,1,7.3,4.8L224,120v88A8,8,0,0,1,216,216Z"
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

const CarSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CarSimple.displayName = "CarSimple";

export default CarSimple;
