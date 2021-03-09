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
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="99.99365" cy="120.00195" r="16" />
    <circle cx="155.99365" cy="120.00195" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      opacity="0.2"
    />
    <path
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="120" r="12" />
    <circle cx="80" cy="120" r="12" />
    <circle cx="176" cy="120" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M216.001,40h-176a16.01833,16.01833,0,0,0-16,16V183.999a16.01833,16.01833,0,0,0,16,16L99.4707,200l14.81055,24.68262a16.00023,16.00023,0,0,0,27.43945,0L156.53027,200H216a16.01854,16.01854,0,0,0,16.001-16V56A16.01833,16.01833,0,0,0,216.001,40ZM80.00049,132.00049a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,132.00049Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="120" r="10" />
    <circle cx="176" cy="120" r="10" />
    <circle cx="80" cy="120" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="120" r="8" />
    <circle cx="80" cy="120" r="8" />
    <circle cx="176" cy="120" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="120" r="12" />
    <circle cx="80" cy="120" r="12" />
    <circle cx="176" cy="120" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChatCenteredDots = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChatCenteredDots.displayName = "ChatCenteredDots";

export default ChatCenteredDots;
