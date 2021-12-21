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
      d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128.7"
      y1="230.2"
      x2="173"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="83 112 83 112 127.3 230.2"
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
      d="M127.3,230.2,83,112h90L128.7,230.2h0a3.3,3.3,0,0,1-1.4,0Z"
      opacity="0.2"
    />
    <path d="M219.2,112l-16-59.9a4,4,0,0,0-7.6-.4L173,112Z" opacity="0.2" />
    <path d="M36.8,112l16-59.9a4,4,0,0,1,7.6-.4L83,112H36.8Z" opacity="0.2" />
    <path
      d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128.7 230.2 173 112 219.2 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="36.8 112 83 112 83 112 127.3 230.2"
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
    <path d="M238.3,152.5,211,50a12,12,0,0,0-22.9-1.1L167.5,104h-79L67.9,48.9A12,12,0,0,0,45,50L17.7,152.5a16.1,16.1,0,0,0,6.4,17.3l94.8,65.6a15.5,15.5,0,0,0,7.1,2.7h4a15.5,15.5,0,0,0,7.1-2.7l94.8-65.6A16.1,16.1,0,0,0,238.3,152.5ZM33.2,156.6,42.9,120H77.5l34,90.9Zm111.3,54.3,34-90.9h34.6l9.7,36.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="128.7 230.2 173 112 219.2 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="36.8 112 83 112 83 112 127.3 230.2"
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
      d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="128.7 230.2 173 112 219.2 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="36.8 112 83 112 83 112 127.3 230.2"
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
      d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128.7 230.2 173 112 219.2 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="36.8 112 83 112 83 112 127.3 230.2"
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

const GitlabLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GitlabLogo.displayName = "GitlabLogo";

export default GitlabLogo;
