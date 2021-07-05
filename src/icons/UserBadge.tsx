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
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="68"
      x2="160"
      y2="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="136"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M83.99963,187.20785a60.00083,60.00083,0,0,1,88.00067-.00007"
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
      d="M200,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32ZM128,168a32,32,0,1,1,32-32A32,32,0,0,1,128,168Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="136"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="64"
      x2="160"
      y2="64"
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
    <path d="M200,24H56A16.01833,16.01833,0,0,0,40,40V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,200,24ZM96,48h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm84.80713,150.39258a8.00059,8.00059,0,0,1-11.20117-1.5918,52.0088,52.0088,0,0,0-83.21143.00195,8,8,0,0,1-12.793-9.60937,67.80944,67.80944,0,0,1,27.428-21.68237,40,40,0,1,1,53.94141-.00037,67.81238,67.81238,0,0,1,27.427,21.68079A8.00016,8.00016,0,0,1,180.80713,198.39258ZM152,136a24,24,0,1,1-24-24A24.0275,24.0275,0,0,1,152,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="136"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="64"
      x2="160"
      y2="64"
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
      cy="136"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="64"
      x2="160"
      y2="64"
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
      cy="136"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="64"
      x2="160"
      y2="64"
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

const UserBadge = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserBadge.displayName = "UserBadge";

export default UserBadge;
