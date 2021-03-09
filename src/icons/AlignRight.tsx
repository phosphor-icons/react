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
      x1="216.00586"
      y1="39.99512"
      x2="216.00586"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="72"
      y="56"
      width="104"
      height="52"
      rx="8"
      transform="translate(248 164) rotate(180)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="148"
      width="144"
      height="52"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="72"
      y="56"
      width="112"
      height="56"
      rx="8"
      transform="translate(256 168) rotate(180)"
      opacity="0.2"
    />
    <rect x="32" y="144" width="152" height="56" rx="8" opacity="0.2" />
    <line
      x1="216.00586"
      y1="39.99512"
      x2="216.00586"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="72"
      y="56"
      width="112"
      height="56"
      rx="8"
      transform="translate(256 168) rotate(180)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="144"
      width="152"
      height="56"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M224.00586,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM176,48H80A16.01833,16.01833,0,0,0,64,64v40a16.01833,16.01833,0,0,0,16,16h96a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,176,48Zm0,88H40a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H176a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,176,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="216.00586"
      y1="39.99512"
      x2="216.00586"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="72"
      y="56"
      width="112"
      height="56"
      rx="8"
      transform="translate(256 168) rotate(180)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="144"
      width="152"
      height="56"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="216.00586"
      y1="39.99512"
      x2="216.00586"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="72"
      y="56"
      width="112"
      height="56"
      rx="8"
      transform="translate(256 168) rotate(180)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="144"
      width="152"
      height="56"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="216.00586"
      y1="39.99512"
      x2="216.00586"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="72"
      y="56"
      width="112"
      height="56"
      rx="8"
      transform="translate(256 168) rotate(180)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="144"
      width="152"
      height="56"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const AlignRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AlignRight.displayName = "AlignRight";

export default AlignRight;
