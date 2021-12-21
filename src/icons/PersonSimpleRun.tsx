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
      cx="152"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M48,109.6s32-29.6,80,8c50.5,39.4,80,24,80,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M110.6,161.2C128.5,165,176,180,176,232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M131.7,120.4C121.8,149.4,91.8,206,32,200"
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
    <circle cx="152" cy="56" r="24" opacity="0.2" />
    <circle
      cx="152"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,101.6s32-29.6,80,8c50.5,39.4,80,24,80,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M135.1,108.8C130.7,129.2,101.6,207,32,200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.6,161.2C128.5,165,176,180,176,232"
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
    <path d="M120,56a32,32,0,1,1,32,32A32.1,32.1,0,0,1,120,56Zm104,77.6a8,8,0,0,0-8-8,7.8,7.8,0,0,0-3.7.9h.1c-.1,0-6.5,3.1-18.2,1.9s-29.5-6.4-53.3-25.1c-15-11.7-38.3-24.6-64.4-19.6C60.7,86.7,51.6,94.8,50.6,95.7a7.9,7.9,0,0,0-.5,11.3,8,8,0,0,0,11.3.5c1.1-1,25.8-22.4,64.6,4.6a147.9,147.9,0,0,1-21.9,44.4h0l-2.4,3.1c-18.9,24.2-42.1,35-68.9,32.3a8,8,0,1,0-1.6,16c3.3.3,6.4.4,9.5.4,32.6,0,56.6-17.4,73.2-38.3,19.4,5.2,54.1,20.2,54.1,61.9a8,8,0,0,0,16,0c0-24.7-10.1-45.4-29.2-59.9-10.4-7.9-22-12.8-31.2-15.8a164.5,164.5,0,0,0,16-34.1c25.8,17.9,46.2,22.3,60,22.3s19.5-3.5,20.1-3.9h0A7.8,7.8,0,0,0,224,133.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="152"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,101.6s32-29.6,80,8c50.5,39.4,80,24,80,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M135.1,108.8C130.7,129.2,101.6,207,32,200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M110.6,161.2C128.5,165,176,180,176,232"
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
      cx="152"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,101.6s32-29.6,80,8c50.5,39.4,80,24,80,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M135.1,108.8C130.7,129.2,101.6,207,32,200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M110.6,161.2C128.5,165,176,180,176,232"
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
      cx="152"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,101.6s32-29.6,80,8c50.5,39.4,80,24,80,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M135.1,108.8C130.7,129.2,101.6,207,32,200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.6,161.2C128.5,165,176,180,176,232"
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

const PersonSimpleRun = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PersonSimpleRun.displayName = "PersonSimpleRun";

export default PersonSimpleRun;
