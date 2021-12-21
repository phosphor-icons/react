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
      cx="116"
      cy="140"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="224"
      x2="99"
      y2="157"
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
      d="M120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2L32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136Zm-4,104a20,20,0,1,1,20-20A20.1,20.1,0,0,1,116,160Z"
      opacity="0.2"
    />
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="224"
      x2="101.9"
      y2="154.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
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
    <path d="M232,92.7,163.3,24a16.1,16.1,0,0,0-22.6,0L115.6,49.1,57.5,70.9A15.9,15.9,0,0,0,47.4,83.2L26.6,207.8a4,4,0,0,0,6.8,3.5l55-55.1A31.7,31.7,0,0,1,84,140a32,32,0,1,1,32,32,31.7,31.7,0,0,1-16.2-4.4l-55.1,55a4,4,0,0,0,3.5,6.8l124.6-20.7a16.2,16.2,0,0,0,12.3-10.2l21.8-58.1L232,115.3a15.9,15.9,0,0,0,0-22.6Zm-32,32L131.3,56,152,35.3,220.7,104Z" />
    <circle cx="116" cy="140" r="16" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="224"
      x2="101.9"
      y2="154.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
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
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="224"
      x2="101.9"
      y2="154.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
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
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="224"
      x2="101.9"
      y2="154.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,224l139.5-23.2a7.9,7.9,0,0,0,6.1-5.1L200,136,120,56,60.3,78.4a8.1,8.1,0,0,0-5.1,6.2Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,136l26.3-26.3a8,8,0,0,0,0-11.4L157.7,29.7a8,8,0,0,0-11.4,0L120,56"
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

const PenNib = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PenNib.displayName = "PenNib";

export default PenNib;
