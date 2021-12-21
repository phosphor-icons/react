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
      d="M122.1,38.4,45,118.5A8,8,0,0,0,50.8,132H205.2a8,8,0,0,0,5.8-13.5L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
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
      d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      opacity="0.2"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
      opacity="0.2"
    />
    <path
      d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
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
    <path d="M35.6,134.4a15.8,15.8,0,0,1,2.9-17.3l77.7-84.2h0a16.2,16.2,0,0,1,23.6,0l77.7,84.2A16,16,0,0,1,205.7,144H50.3A15.9,15.9,0,0,1,35.6,134.4ZM208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
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
      d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
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
      d="M122.1,38.4,44.4,122.6A8,8,0,0,0,50.3,136H205.7a8,8,0,0,0,5.9-13.4L133.9,38.4A7.9,7.9,0,0,0,122.1,38.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="108"
      y="100"
      width="40"
      height="176"
      rx="8"
      transform="translate(-60 316) rotate(-90)"
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

const Eject = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Eject.displayName = "Eject";

export default Eject;
