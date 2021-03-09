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
    <polygon
      points="240 176 184 144 184 112 240 80 240 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="34.9091"
      y1="24"
      x2="224"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M121.69523,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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
      d="M24,60H152a32,32,0,0,1,32,32v96a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68A8,8,0,0,1,24,60Z"
      opacity="0.2"
    />
    <polygon
      points="240 176 184 144 184 112 240 80 240 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="34.9091"
      y1="24"
      x2="224"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.8827,60H152a32,32,0,0,1,32,32v52"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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
    <path d="M229.91992,226.61816a8.0006,8.0006,0,0,1-11.83984,10.76368l-42.34229-46.57618A16.01483,16.01483,0,0,1,160,204H48A40.04584,40.04584,0,0,1,8,164V68A16.01833,16.01833,0,0,1,24,52H49.55127l-20.562-22.61816A8.0006,8.0006,0,0,1,40.8291,18.61816Zm14.0957-153.53711a8.00341,8.00341,0,0,0-7.98437-.02734l-40,22.85742A8,8,0,0,0,192,102.85742v50.28516a8,8,0,0,0,4.03125,6.94629l40,22.85742A8.0003,8.0003,0,0,0,248,176V80A7.99807,7.99807,0,0,0,244.01562,73.08105Zm-81.93554,55.12989A8.0004,8.0004,0,0,0,176,122.8291V92a40.04584,40.04584,0,0,0-40-40H110.88281a8.00036,8.00036,0,0,0-5.91992,13.38184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="240 176 184 144 184 112 240 80 240 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="34.9091"
      y1="24"
      x2="224"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M110.8827,60H152a32,32,0,0,1,32,32v52"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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
    <polygon
      points="240 176 184 144 184 112 240 80 240 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="34.9091"
      y1="24"
      x2="224"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M110.8827,60H152a32,32,0,0,1,32,32v52"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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
    <polygon
      points="240 176 184 144 184 112 240 80 240 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="34.9091"
      y1="24"
      x2="224"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.8827,60H152a32,32,0,0,1,32,32v52"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,188a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V68a8,8,0,0,1,8-8H67.63637"
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

const VideoCameraSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

VideoCameraSlash.displayName = "VideoCameraSlash";

export default VideoCameraSlash;
