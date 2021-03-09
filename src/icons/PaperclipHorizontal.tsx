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
      d="M183.99414,120H48a28,28,0,0,0,0,56H187.99414a48,48,0,1,0,0-96h-112"
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
      d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
    <path d="M191.99414,184H46c-21.62207,0-39.21289-17.94434-39.21289-40S24.37793,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.7998,0-23.21289,10.7666-23.21289,24S33.2002,168,46,168H191.99414a40,40,0,1,0,0-80h-112a8,8,0,0,1,0-16h112a56,56,0,1,1,0,112Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
      d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
      d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
