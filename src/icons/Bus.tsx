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
    <line
      x1="42"
      y1="80"
      x2="214"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="42"
      y1="132"
      x2="214"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M214,184H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M214,184v32a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M82,184v32a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V184"
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
    <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z" opacity="0.3" />
    <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z" opacity="0.3" />
    <rect x="42" y="72" width="172" height="48" opacity="0.2" />
    <line
      x1="42"
      y1="72"
      x2="214"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42"
      y1="120"
      x2="214"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="156" r="12" />
    <circle cx="172" cy="156" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M190,32H66A32.1,32.1,0,0,0,34,64V216a16,16,0,0,0,16,16H74a16,16,0,0,0,16-16V200h76v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V64A32.1,32.1,0,0,0,190,32ZM82,168a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Zm32-48H50V72H206Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="42"
      y1="72"
      x2="214"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="42"
      y1="120"
      x2="214"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="172" cy="156" r="10" />
    <circle cx="84" cy="156" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="42"
      y1="72"
      x2="214"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="42"
      y1="120"
      x2="214"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="84" cy="156" r="8" />
    <circle cx="172" cy="156" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="42"
      y1="72"
      x2="214"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42"
      y1="120"
      x2="214"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M214,192H42V64A23.9,23.9,0,0,1,66,40H190a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="156" r="12" />
    <circle cx="172" cy="156" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Bus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Bus.displayName = "Bus";

export default Bus;
