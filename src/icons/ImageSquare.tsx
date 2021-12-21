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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
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
      d="M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160h0l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0Z"
      opacity="0.2"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
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
    <circle cx="100" cy="92" r="12" />
    <path d="M208,32H48A16,16,0,0,0,32,48V176h0v32a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-28.7,80a16.1,16.1,0,0,0-22.6,0L112,156.7,91.3,136a16.1,16.1,0,0,0-22.6,0L48,156.7V48H208v92.7Z" />
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
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
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
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
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
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
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
