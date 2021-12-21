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
      d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="42.2"
      y1="26.2"
      x2="175.9"
      y2="159.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="42.2"
      y1="229.8"
      x2="175.9"
      y2="96.1"
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
      d="M42.2,26.2a8.1,8.1,0,0,0-2.4,5.7V224.1a8.1,8.1,0,0,0,2.4,5.7h0L144,128,42.2,26.2Z"
      opacity="0.2"
    />
    <path
      d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.2"
      y1="26.2"
      x2="175.9"
      y2="159.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.2"
      y1="229.8"
      x2="175.9"
      y2="96.1"
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
    <path d="M223.6,114.2,55.9,18.1a16.2,16.2,0,0,0-16.2.1,15.8,15.8,0,0,0-7.9,13.7V224.1a16,16,0,0,0,16,15.9,16.9,16.9,0,0,0,8.1-2.1l167.7-96.1a15.7,15.7,0,0,0,0-27.6ZM144,139.3l18.9,18.9L74.7,208.6Zm-69.3-92,88.2,50.5L144,116.7ZM177.2,149.9,155.3,128l21.9-21.9L215.6,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="42.2"
      y1="26.2"
      x2="175.9"
      y2="159.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="42.2"
      y1="229.8"
      x2="175.9"
      y2="96.1"
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
      d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="42.2"
      y1="26.2"
      x2="175.9"
      y2="159.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="42.2"
      y1="229.8"
      x2="175.9"
      y2="96.1"
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
      d="M39.8,224.1a8,8,0,0,0,12.1,6.8l167.8-96.1a7.7,7.7,0,0,0,0-13.6L51.9,25.1a8,8,0,0,0-12.1,6.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.2"
      y1="26.2"
      x2="175.9"
      y2="159.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.2"
      y1="229.8"
      x2="175.9"
      y2="96.1"
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

const GooglePlayLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GooglePlayLogo.displayName = "GooglePlayLogo";

export default GooglePlayLogo;
