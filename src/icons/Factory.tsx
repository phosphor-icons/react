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
      x1="80"
      y1="176"
      x2="108"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="148"
      y1="176"
      x2="176"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,136,201,30.9a8,8,0,0,0-7.9-6.9H174.9a8,8,0,0,0-7.9,6.9l-13.5,94.3"
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
    <polygon
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216 216 216"
      opacity="0.2"
    />
    <line
      x1="80"
      y1="176"
      x2="108"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="148"
      y1="176"
      x2="176"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,136,201,30.9a8,8,0,0,0-7.9-6.9H174.9a8,8,0,0,0-7.9,6.9l-13.5,94.3"
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
    <path d="M240,208H224V136h0v-.5a.8.8,0,0,0-.1-.4h0l-15-105.2A16,16,0,0,0,193.1,16H174.9a16,16,0,0,0-15.8,13.7l-11.6,81L108.8,81.6A8,8,0,0,0,96,88v32L44.8,81.6A8,8,0,0,0,32,88V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM100,184H72a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm84,0H156a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-13.3-56-8.6-6.4L174.9,32h18.2l13.7,96Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="80"
      y1="176"
      x2="108"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="148"
      y1="176"
      x2="176"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,136,201,30.9a8,8,0,0,0-7.9-6.9H174.9a8,8,0,0,0-7.9,6.9l-13.5,94.3"
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
      x1="80"
      y1="176"
      x2="108"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="148"
      y1="176"
      x2="176"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,136,201,30.9a8,8,0,0,0-7.9-6.9H174.9a8,8,0,0,0-7.9,6.9l-13.5,94.3"
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
      x1="80"
      y1="176"
      x2="108"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="148"
      y1="176"
      x2="176"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="216"
      x2="240"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,136,201,30.9a8,8,0,0,0-7.9-6.9H174.9a8,8,0,0,0-7.9,6.9l-13.5,94.3"
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

const Factory = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Factory.displayName = "Factory";

export default Factory;
