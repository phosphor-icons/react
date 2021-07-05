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
      d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40v48a8,8,0,0,1-8,8Z"
      opacity="0.2"
    />
    <path
      d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
    <path d="M232,96.00049a16.01833,16.01833,0,0,0-16-16H184v-32a16.01833,16.01833,0,0,0-16-16H40a16.01833,16.01833,0,0,0-16,16v128a7.99978,7.99978,0,0,0,13.0293,6.22119L72,153.95032l.001,30.05017a16.01833,16.01833,0,0,0,16,16h93.58789l37.38281,30.22119a7.99979,7.99979,0,0,0,13.0293-6.22119ZM189.44727,185.7793a7.99922,7.99922,0,0,0-5.0293-1.77881H88.001l-.001-32h80a16.01833,16.01833,0,0,0,16-16v-40h32l.001,111.24512Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
      d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
      d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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

const Chats = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Chats.displayName = "Chats";

export default Chats;
