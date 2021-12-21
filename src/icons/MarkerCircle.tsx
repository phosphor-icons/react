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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,211.2V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,168V136a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M147.8,128,135.7,84.4a8,8,0,0,0-15.4,0L108.2,128Z"
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
      d="M176,211.2a96,96,0,1,0-96,0h0V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.2l12-57.6c1.7-8.5,13.9-8.5,15.6,0l12,57.6H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.2Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,211.2V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.8,136l-12-57.6c-1.7-8.5-13.9-8.5-15.6,0l-12,57.6"
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
    <path d="M201.5,54.5a103.8,103.8,0,0,0-147,0,103.8,103.8,0,0,0,0,147,103.8,103.8,0,0,0,147,0,103.8,103.8,0,0,0,0-147ZM88,206.4V176h80v30.4A88.8,88.8,0,0,1,88,206.4ZM104,136h48v24H104Zm86.2,54.2c-2,2-4.1,3.9-6.2,5.7V176a16,16,0,0,0-16-16V136a16,16,0,0,0-13.7-15.8L143.6,73.3a16,16,0,0,0-31.2,0l-10.7,46.9A16,16,0,0,0,88,136v24a16,16,0,0,0-16,16v19.9c-2.1-1.8-4.2-3.7-6.2-5.7a88,88,0,1,1,124.4,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,211.2V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M147.8,136l-12-57.6c-1.7-8.5-13.9-8.5-15.6,0l-12,57.6"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,211.2V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M147.8,136l-12-57.6c-1.7-8.5-13.9-8.5-15.6,0l-12,57.6"
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
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,211.2V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.8,136l-12-57.6c-1.7-8.5-13.9-8.5-15.6,0l-12,57.6"
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

const MarkerCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MarkerCircle.displayName = "MarkerCircle";

export default MarkerCircle;
