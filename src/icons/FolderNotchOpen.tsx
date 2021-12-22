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
      d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,208l29.9-71.1a8.1,8.1,0,0,1,7.4-4.9h48.3a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3h82.3a8,8,0,0,1,7.6,10.6L208,208Z"
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
      d="M69.4,128h48.2a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3H208V88a8,8,0,0,0-8-8H130.7a8.1,8.1,0,0,1-4.8-1.6L98.1,57.6A8.1,8.1,0,0,0,93.3,56H40a8,8,0,0,0-8,8V208l30-75A7.9,7.9,0,0,1,69.4,128Z"
      opacity="0.2"
    />
    <path
      d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,208l30-75a7.9,7.9,0,0,1,7.4-5h48.2a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3h82.5a8,8,0,0,1,7.6,10.5L208,208Z"
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
    <path d="M241.9,110.6a16.2,16.2,0,0,0-13-6.6H216V88a16,16,0,0,0-16-16H130.7L102.9,51.2A15.6,15.6,0,0,0,93.3,48H40A16,16,0,0,0,24,64V208h0a8.2,8.2,0,0,0,1.4,4.5A7.9,7.9,0,0,0,32,216H208a8,8,0,0,0,7.6-5.5l28.5-85.4A16.3,16.3,0,0,0,241.9,110.6ZM93.3,64l27.8,20.8a15.6,15.6,0,0,0,9.6,3.2H200v16H146.4a16,16,0,0,0-8.9,2.7L117.6,120H69.4a15.7,15.7,0,0,0-14.8,10.1L40,166.5V64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,208l30-75a7.9,7.9,0,0,1,7.4-5h48.2a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3h82.5a8,8,0,0,1,7.6,10.5L208,208Z"
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
      d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,208l30-75a7.9,7.9,0,0,1,7.4-5h48.2a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3h82.5a8,8,0,0,1,7.6,10.5L208,208Z"
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
      d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,208l30-75a7.9,7.9,0,0,1,7.4-5h48.2a8.4,8.4,0,0,0,4.4-1.3l20-13.4a8.4,8.4,0,0,1,4.4-1.3h82.5a8,8,0,0,1,7.6,10.5L208,208Z"
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

const FolderNotchOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderNotchOpen.displayName = "FolderNotchOpen";

export default FolderNotchOpen;
