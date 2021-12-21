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
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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
      d="M141.3,160l-38.7,38.6a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8A31.9,31.9,0,0,1,52.3,160Z"
      opacity="0.2"
    />
    <path
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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
    <path d="M224,67.5a35.5,35.5,0,0,0-11.3-25.7c-14-13.2-36.7-12.7-50.6,1.2L140.2,64.9a24.1,24.1,0,0,0-33.2.8l-7,7a16.1,16.1,0,0,0,0,22.6l2.1,2.1L51.7,147.7a40.3,40.3,0,0,0-11,35.8l-9.8,22.4a13.6,13.6,0,0,0,2.9,15.2,15.8,15.8,0,0,0,11.3,4.7,16.3,16.3,0,0,0,6.4-1.3l21-9.2a40.3,40.3,0,0,0,35.8-11l50.3-50.4,2.1,2.1a15.9,15.9,0,0,0,22.6,0l7-7a24.1,24.1,0,0,0,.8-33.2l22.4-22.3A36.2,36.2,0,0,0,224,67.5ZM137.9,152H70.1l43.3-43.3,33.9,33.9Zm64.2-69.9-28,28a8.1,8.1,0,0,0,0,11.4l4.9,4.8a8.1,8.1,0,0,1,0,11.4l-7,7L111.3,84l7-7a8,8,0,0,1,11.4,0l4.8,4.9a8.1,8.1,0,0,0,11.4,0l27.5-27.6c7.9-7.8,20.6-8.2,28.3-.8A19.7,19.7,0,0,1,208,67.7,19.4,19.4,0,0,1,202.1,82.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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

const EyedropperSample = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EyedropperSample.displayName = "EyedropperSample";

export default EyedropperSample;
