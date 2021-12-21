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
      d="M146.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M74.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M154.5,176a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
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
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
      opacity="0.2"
    />
    <path
      d="M146.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M74.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.5,176a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
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
    <path d="M217,35.1a15.9,15.9,0,0,0-14.8-1.7C188.2,38.9,159.8,48,128,48S67.8,38.9,53.8,33.4A16,16,0,0,0,32,48.3V104c0,35.8,9.7,69.5,27.2,95s42.6,41,68.8,41,50.7-14.5,68.8-41S224,139.8,224,104V48.3A15.9,15.9,0,0,0,217,35.1ZM80.1,133.3a8,8,0,0,1-11.3.7,8,8,0,0,1-.6-11.3,31.8,31.8,0,0,1,47.6,0,8,8,0,0,1-.6,11.3,8.1,8.1,0,0,1-5.3,2,8,8,0,0,1-6-2.7,16,16,0,0,0-23.8,0ZM159,182.7a56.3,56.3,0,0,1-62,0,8.1,8.1,0,0,1-2.2-11.1,8,8,0,0,1,11.1-2.3,39.8,39.8,0,0,0,44.2,0,8,8,0,0,1,11.1,2.3A8.1,8.1,0,0,1,159,182.7ZM187.2,134a8.1,8.1,0,0,1-5.3,2,8,8,0,0,1-6-2.7,16,16,0,0,0-23.8,0,8,8,0,0,1-11.3.7,8,8,0,0,1-.6-11.3,31.8,31.8,0,0,1,47.6,0A8,8,0,0,1,187.2,134Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M146.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M74.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M154.5,176a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
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
      d="M146.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M74.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M154.5,176a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
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
      d="M146.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M74.1,128a24,24,0,0,1,35.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.5,176a47.9,47.9,0,0,1-53,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z"
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

const MaskHappy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MaskHappy.displayName = "MaskHappy";

export default MaskHappy;
