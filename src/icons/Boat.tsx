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
      x1="128"
      y1="48"
      x2="128"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="168"
      x2="128"
      y2="88.43274"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
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
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="168"
      x2="128"
      y2="88.43274"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
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
    <path d="M221.06055,110.58691,208,106.2334V56a16.01833,16.01833,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16.01833,16.01833,0,0,0,48,56v50.2334l-13.06055,4.35351A15.98076,15.98076,0,0,0,24,125.76611V160a8.00533,8.00533,0,0,0,.30762,2.19775c15.71972,55.01856,86.11816,73.957,100.07031,77.19483a16.1234,16.1234,0,0,0,7.24414,0c13.95215-3.23779,84.35059-22.17627,100.07031-77.19483A8.00533,8.00533,0,0,0,232,160V125.76611A15.98076,15.98076,0,0,0,221.06055,110.58691ZM136,168a8,8,0,0,1-16,0V112.43262a8,8,0,1,1,16,0Zm56-67.09961L133.05957,81.25391a16.0984,16.0984,0,0,0-10.12012,0L64,100.90039V56H192Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="168"
      x2="128"
      y2="88.43274"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
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
      x1="128"
      y1="48"
      x2="128"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="168"
      x2="128"
      y2="88.43274"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
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
      x1="128"
      y1="48"
      x2="128"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,160c-14.57032,50.99614-82.21424,68.82128-94.18651,71.59963a8.00355,8.00355,0,0,1-3.627,0C114.21424,228.82128,46.57032,210.99614,32,160V125.76607a8,8,0,0,1,5.47018-7.58946l88-29.33334a8.0001,8.0001,0,0,1,5.05964,0l88,29.33334A8,8,0,0,1,224,125.76607Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="168"
      x2="128"
      y2="88.43274"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
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

const Boat = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Boat.displayName = "Boat";

export default Boat;
