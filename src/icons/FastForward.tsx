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
      d="M237.5,121.3,148.3,63.9A8,8,0,0,0,136,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,237.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
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
      d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
      opacity="0.2"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
      opacity="0.2"
    />
    <path
      d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
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
    <path d="M253.2,128a16,16,0,0,1-7.3,13.5l-89.2,57.3A16,16,0,0,1,132,185.3V142.7L44.7,198.8A16,16,0,0,1,20,185.3V70.7A16,16,0,0,1,44.7,57.2L132,113.3V70.7a16,16,0,0,1,24.7-13.5l89.2,57.3A16,16,0,0,1,253.2,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
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
      d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
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
      d="M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z"
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

const FastForward = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FastForward.displayName = "FastForward";

export default FastForward;
