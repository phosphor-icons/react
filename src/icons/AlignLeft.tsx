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
      x1="39.99414"
      y1="39.99512"
      x2="39.99414"
      y2="215.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="80"
      y="56"
      width="104"
      height="52"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="80"
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
    <rect x="72" y="56" width="112" height="56" rx="8" opacity="0.2" />
    <rect x="72" y="144" width="152" height="56" rx="8" opacity="0.2" />
    <rect
      x="72"
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
    <line
      x1="39.99414"
      y1="39.99512"
      x2="39.99414"
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
    <path d="M47.99414,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM80,120h96a16.01833,16.01833,0,0,0,16-16V64a16.01833,16.01833,0,0,0-16-16H80A16.01833,16.01833,0,0,0,64,64v40A16.01833,16.01833,0,0,0,80,120Zm136,16H80a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,216,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="39.99414"
      y1="39.99512"
      x2="39.99414"
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
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="72"
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
      x1="39.99414"
      y1="39.99512"
      x2="39.99414"
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
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="72"
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
      x1="39.99414"
      y1="39.99512"
      x2="39.99414"
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
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="72"
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

const AlignLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AlignLeft.displayName = "AlignLeft";

export default AlignLeft;
