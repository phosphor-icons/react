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
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
    <rect
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      opacity="0.2"
    />
    <rect
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
    <path d="M236.7,88.4a16.6,16.6,0,0,1-5,11.3L99.3,232a15.9,15.9,0,0,1-22.6,0L24,179.3a15.9,15.9,0,0,1,0-22.6l21.9-21.9a4,4,0,0,1,5.6,0l34.8,34.9A8.5,8.5,0,0,0,92,172a8,8,0,0,0,6.1-2.8,8.3,8.3,0,0,0-.6-11.1L62.8,123.5a4,4,0,0,1,0-5.6L81.9,98.8a4,4,0,0,1,5.6,0l34.8,34.9A8.5,8.5,0,0,0,128,136a8,8,0,0,0,6.1-2.8,8.3,8.3,0,0,0-.6-11.1L98.8,87.5a4,4,0,0,1,0-5.6l19.1-19.1a4,4,0,0,1,5.6,0l34.8,34.9A8.5,8.5,0,0,0,164,100a8,8,0,0,0,6.1-2.8,8.3,8.3,0,0,0-.6-11.1L134.8,51.5a4,4,0,0,1,0-5.6L156.7,24a16.1,16.1,0,0,1,22.6,0L232,76.7A16,16,0,0,1,236.7,88.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
    <rect
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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
    <rect
      x="26.2"
      y="82.7"
      width="203.6"
      height="90.51"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="132"
      y1="60"
      x2="164"
      y2="92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60"
      y1="132"
      x2="92"
      y2="164"
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

const Ruler = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Ruler.displayName = "Ruler";

export default Ruler;
