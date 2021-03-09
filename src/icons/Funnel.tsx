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
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
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
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
      opacity="0.2"
    />
    <path
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
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
    <path d="M228.54736,49.52637A15.80639,15.80639,0,0,0,213.91553,40H42.08447A16.00043,16.00043,0,0,0,30.24561,66.76367L96,139.09277v77.959a15.99388,15.99388,0,0,0,24.875,13.3125l31.99951-21.332A15.96822,15.96822,0,0,0,160,195.71875v-56.625l65.75488-72.331A15.80708,15.80708,0,0,0,228.54736,49.52637Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
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
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
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
      d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
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

const Funnel = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Funnel.displayName = "Funnel";

export default Funnel;
