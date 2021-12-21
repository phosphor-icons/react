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
      d="M18.5,121.3l89.2-57.4A8,8,0,0,1,120,70.7V185.3a8,8,0,0,1-12.3,6.8L18.5,134.7A7.9,7.9,0,0,1,18.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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
      d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
      opacity="0.2"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
      opacity="0.2"
    />
    <path
      d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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
    <path d="M10.1,114.5,99.3,57.2A16,16,0,0,1,124,70.7v42.6l87.3-56.1A16,16,0,0,1,236,70.7V185.3a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L124,142.7v42.6a16.1,16.1,0,0,1-8.3,14.1,16.5,16.5,0,0,1-16.4-.6L10.1,141.5a16.1,16.1,0,0,1,0-27Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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
      d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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
      d="M14.5,121.3l89.2-57.4A8,8,0,0,1,116,70.7V185.3a8,8,0,0,1-12.3,6.8L14.5,134.7A7.9,7.9,0,0,1,14.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.5,121.3l89.2-57.4A8,8,0,0,1,228,70.7V185.3a8,8,0,0,1-12.3,6.8l-89.2-57.4A7.9,7.9,0,0,1,126.5,121.3Z"
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

const Rewind = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Rewind.displayName = "Rewind";

export default Rewind;
