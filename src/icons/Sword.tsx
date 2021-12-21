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
    <polyline
      points="72.2 128.2 152.2 40.2 216 40 215.8 103.8 127.8 183.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="100"
      y1="156"
      x2="160"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M82.1,205.5,60.2,227.4a8,8,0,0,1-11.3,0L28.6,207.1a8,8,0,0,1,0-11.3l21.9-21.9a8,8,0,0,0,0-11.4L33.7,145.7a8,8,0,0,1,0-11.4l16.6-16.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-16.6,16.6a8,8,0,0,1-11.4,0L93.5,205.5A8,8,0,0,0,82.1,205.5Z"
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
      d="M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z"
      opacity="0.2"
    />
    <polyline
      points="76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="156"
      x2="160"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z"
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
    <path d="M221.7,34.3A8.1,8.1,0,0,0,216,32h0l-63.8.2a8.1,8.1,0,0,0-6.2,2.9L75.6,120.3,67.3,112a16.1,16.1,0,0,0-22.6,0L32,124.7a15.9,15.9,0,0,0,0,22.6l20.9,20.9-30,29.9a16.2,16.2,0,0,0,0,22.7l12.3,12.3a16.3,16.3,0,0,0,22.7,0l29.9-30L108.7,224a16.1,16.1,0,0,0,22.6,0L144,211.3a15.9,15.9,0,0,0,0-22.6l-8.3-8.3L220.9,110a8.1,8.1,0,0,0,2.9-6.2L224,40A8.1,8.1,0,0,0,221.7,34.3ZM207.8,100l-83.5,69-13-13,54.4-54.3a8.1,8.1,0,0,0-11.4-11.4L100,144.7l-13-13,69-83.5,52-.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="100"
      y1="156"
      x2="160"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z"
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
    <polyline
      points="76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="100"
      y1="156"
      x2="160"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z"
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
    <polyline
      points="76.2 132.2 152.2 40.2 216 40 215.8 103.8 123.8 179.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="156"
      x2="160"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82.1,197.5,52.2,227.4a8,8,0,0,1-11.3,0L28.6,215.1a8,8,0,0,1,0-11.3l29.9-29.9a8,8,0,0,0,0-11.4L37.7,141.7a8,8,0,0,1,0-11.4l12.6-12.6a8,8,0,0,1,11.4,0l76.6,76.6a8,8,0,0,1,0,11.4l-12.6,12.6a8,8,0,0,1-11.4,0L93.5,197.5A8,8,0,0,0,82.1,197.5Z"
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

const Sword = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Sword.displayName = "Sword";

export default Sword;
