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
      d="M184,120H48a28,28,0,0,0,0,56H188a48,48,0,0,0,0-96H76"
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
      d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
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
    <path d="M192,184H46c-21.6,0-39.2-17.9-39.2-40S24.4,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.8,0-23.2,10.8-23.2,24S33.2,168,46,168H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192a56,56,0,0,1,0,112Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
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
      d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
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
      d="M78,144H190a16,16,0,0,0,0-32H46c-17.2,0-31.2,14.3-31.2,32s14,32,31.2,32H192a48,48,0,0,0,0-96H80"
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

const PaperclipHorizontal = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

PaperclipHorizontal.displayName = "PaperclipHorizontal";

export default PaperclipHorizontal;
