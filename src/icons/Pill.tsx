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
      x="14.9"
      y="82.7"
      width="226.3"
      height="90.51"
      rx="45.3"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160.1"
      y1="104.1"
      x2="176.5"
      y2="88.5"
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
      d="M112,208a45.2,45.2,0,0,1-64,0h0a45.2,45.2,0,0,1,0-64L96,96l64,64Z"
      opacity="0.2"
    />
    <rect
      x="14.9"
      y="82.7"
      width="226.3"
      height="90.51"
      rx="45.3"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160.1"
      y1="112.1"
      x2="184.5"
      y2="88.5"
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
    <path d="M213.7,42.3a53.4,53.4,0,0,0-75.4,0l-96,96a53.3,53.3,0,0,0,75.4,75.4l96-96A53.5,53.5,0,0,0,213.7,42.3Zm-11.4,64L160,148.7,107.3,96l42.4-42.3a36.9,36.9,0,0,1,52.6,0A37.1,37.1,0,0,1,202.3,106.3ZM190.2,82.9a7.9,7.9,0,0,1-.2,11.3l-24.4,23.6a7.9,7.9,0,0,1-11.3-.2,7.9,7.9,0,0,1,.2-11.3l24.4-23.6A8,8,0,0,1,190.2,82.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="14.9"
      y="82.7"
      width="226.3"
      height="90.51"
      rx="45.3"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160.1"
      y1="112.1"
      x2="184.5"
      y2="88.5"
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
      x="14.9"
      y="82.7"
      width="226.3"
      height="90.51"
      rx="45.3"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160.1"
      y1="112.1"
      x2="184.5"
      y2="88.5"
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
      x="14.9"
      y="82.7"
      width="226.3"
      height="90.51"
      rx="45.3"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160.1"
      y1="112.1"
      x2="184.5"
      y2="88.5"
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

const Pill = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Pill.displayName = "Pill";

export default Pill;
