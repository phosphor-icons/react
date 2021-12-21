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
      x1="96"
      y1="228"
      x2="160"
      y2="228"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M182.5,188H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9v-4A72.4,72.4,0,0,1,68.9,63"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M100,37.7A69.4,69.4,0,0,1,128.5,32c39.6.3,71.3,33.2,71.3,72.9V108c0,19,2.1,33.7,5.1,45.1"
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
      d="M56,104a72,72,0,0,1,72.5-72c39.8.3,71.5,33.2,71.5,72.9V112c0,35.8,7.5,56.6,14.1,68a7.9,7.9,0,0,1-6.9,12H48.8a7.9,7.9,0,0,1-6.9-12C48.5,168.6,56,147.8,56,112Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.2,192H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68v-8A71.8,71.8,0,0,1,68.9,63.1"
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
    <path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6L182.6,200H49a16,16,0,0,1-13.8-24.1c5.9-10.2,13-29.6,13-63.9v-8A80.2,80.2,0,0,1,58.9,63.9L42.1,45.4A8,8,0,0,1,53.9,34.6ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm42.9-41.3a8,8,0,0,0,5.9,2.6,7.9,7.9,0,0,0,4.2-1.2,8,8,0,0,0,3.3-9.7c-5.6-14.2-8.5-32.6-8.5-54.4v-7.1c0-44.3-35.5-80.6-79.2-80.9A80.2,80.2,0,0,0,88.5,34.4a8,8,0,0,0-3.9,5.7,8.2,8.2,0,0,0,2,6.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M186.2,192H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9v-8A72.4,72.4,0,0,1,68.9,63"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M186.2,192H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9v-8A72.4,72.4,0,0,1,68.9,63"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.5,41.4a70.8,70.8,0,0,1,36-9.4c39.6.3,71.3,33.2,71.3,72.9V112c0,26.7,4.2,45,9,57.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.2,192H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9v-8A72.4,72.4,0,0,1,68.9,63"
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

const BellSimpleSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BellSimpleSlash.displayName = "BellSimpleSlash";

export default BellSimpleSlash;
