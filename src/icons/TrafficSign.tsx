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
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,148v-4a23.9,23.9,0,0,1,24-24h56"
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
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      opacity="0.2"
    />
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
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
    <path d="M244,116.7,139.3,12a15.9,15.9,0,0,0-22.6,0L12,116.7a16.1,16.1,0,0,0,0,22.6L116.7,244a15.9,15.9,0,0,0,22.6,0L244,139.3A16.1,16.1,0,0,0,244,116.7ZM176,120v.8a.4.4,0,0,0-.1.3.9.9,0,0,1-.1.5.8.8,0,0,1-.1.4v.3l-.2.4c0,.1-.1.2-.1.4l-.2.3v.4l-.2.3c-.1.1-.2.2-.2.3l-.3.4-.2.3-.5.5h0l-24,24a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L148.7,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32.1,32.1,0,0,1,32-32h36.7l-10.4-10.3a8.1,8.1,0,0,1,11.4-11.4l24,24h0l.5.5.2.3.3.4c0,.1.1.2.2.3l.2.3v.4l.2.3c0,.2.1.3.1.4l.2.4v.3a.8.8,0,0,1,.1.4.9.9,0,0,1,.1.5.4.4,0,0,0,.1.3v.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
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
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
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
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="46"
      y="46"
      width="164"
      height="164.05"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,152v-8a23.9,23.9,0,0,1,24-24h56"
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

const TrafficSign = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrafficSign.displayName = "TrafficSign";

export default TrafficSign;
