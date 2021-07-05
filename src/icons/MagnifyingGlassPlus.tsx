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
      x1="83.99707"
      y1="116"
      x2="147.99707"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="115.99707"
      y1="84"
      x2="115.99707"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="115.99707"
      cy="115.99609"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="175.39063"
      y1="175.39649"
      x2="223.99121"
      y2="223.99707"
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
    <circle cx="115.99512" cy="115.99609" r="84" opacity="0.2" />
    <line
      x1="83.99512"
      y1="116"
      x2="147.99512"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="115.99512"
      y1="84"
      x2="115.99512"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="115.99512"
      cy="115.99609"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.38868"
      y1="175.39649"
      x2="223.98926"
      y2="223.99707"
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
    <path d="M229.64746,218.34033l-43.2229-43.22284a92.11133,92.11133,0,1,0-11.31445,11.31342l43.2229,43.2229a8.00018,8.00018,0,1,0,11.31445-11.31348ZM147.99609,124h-24v24a8,8,0,0,1-16,0V124h-24a8,8,0,1,1,0-16h24V84a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="83.99805"
      y1="116"
      x2="147.99805"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="115.99805"
      y1="84"
      x2="115.99805"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="115.99805"
      cy="115.99609"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="175.39161"
      y1="175.39649"
      x2="223.99219"
      y2="223.99707"
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
    <line
      x1="83.99902"
      y1="116"
      x2="147.99902"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="115.99902"
      y1="84"
      x2="115.99902"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="115.99902"
      cy="115.99609"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="175.39258"
      y1="175.39649"
      x2="223.99316"
      y2="223.99707"
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
    <line
      x1="84"
      y1="116"
      x2="148"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="116"
      y1="84"
      x2="116"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="116"
      cy="115.99609"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.39356"
      y1="175.39649"
      x2="223.99414"
      y2="223.99707"
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

const MagnifyingGlassPlus = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

MagnifyingGlassPlus.displayName = "MagnifyingGlassPlus";

export default MagnifyingGlassPlus;
