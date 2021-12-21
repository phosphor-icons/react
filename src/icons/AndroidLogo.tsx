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
    <circle cx="164" cy="156" r="16" />
    <circle cx="92" cy="156" r="16" />
    <path
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="56"
      x2="63.1"
      y2="87.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="224"
      y1="56"
      x2="193.1"
      y2="86.9"
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
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      opacity="0.2"
    />
    <circle cx="164" cy="156" r="12" />
    <circle cx="92" cy="156" r="12" />
    <path
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="56"
      x2="63.1"
      y2="87.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="56"
      x2="193.1"
      y2="86.9"
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
    <path d="M207.1,88.7l-2.3-2.2,24.9-24.8a8.1,8.1,0,0,0-11.4-11.4l-25.9,26a111.5,111.5,0,0,0-128.6.2L37.7,50.3A8.1,8.1,0,0,0,26.3,61.7l25.1,25A113.4,113.4,0,0,0,16,169.1V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A111.2,111.2,0,0,0,207.1,88.7ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="164" cy="156" r="10" />
    <circle cx="92" cy="156" r="10" />
    <path
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="56"
      x2="63.1"
      y2="87.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="224"
      y1="56"
      x2="193.1"
      y2="86.9"
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
    <circle cx="164" cy="156" r="8" />
    <circle cx="92" cy="156" r="8" />
    <path
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="56"
      x2="63.1"
      y2="87.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="224"
      y1="56"
      x2="193.1"
      y2="86.9"
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
    <circle cx="164" cy="156" r="12" />
    <circle cx="92" cy="156" r="12" />
    <path
      d="M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="56"
      x2="63.1"
      y2="87.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="56"
      x2="193.1"
      y2="86.9"
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

const AndroidLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AndroidLogo.displayName = "AndroidLogo";

export default AndroidLogo;
