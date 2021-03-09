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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="100" cy="92" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160l-.00018-.00018-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0Z"
      opacity="0.2"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="100" cy="92" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <circle cx="99.99951" cy="92" r="12" />
      <path d="M208.00049,31.99963h-160a16.01833,16.01833,0,0,0-16,16V175.97369l-.001.0307.001,31.99524a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16v-160A16.01834,16.01834,0,0,0,208.00049,31.99963Zm-28.68653,80a16.019,16.019,0,0,0-22.62792,0l-44.68555,44.68653L91.314,135.99963a16.02161,16.02161,0,0,0-22.62792,0L48.00049,156.68457V47.99963h160l.00586,92.6922Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="100" cy="92" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="100" cy="92" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M215.99982,159.99982l-42.343-42.343a8,8,0,0,0-11.3137,0l-44.6863,44.6863a8,8,0,0,1-11.3137,0l-20.6863-20.6863a8,8,0,0,0-11.3137,0L40,176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="100" cy="92" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ImageSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ImageSquare.displayName = "ImageSquare";

export default ImageSquare;
