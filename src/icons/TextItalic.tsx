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
      x1="151.99414"
      y1="55.99512"
      x2="103.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="143.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="111.99414"
      y1="55.99512"
      x2="191.99414"
      y2="55.99512"
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
    <line
      x1="151.99414"
      y1="55.99512"
      x2="103.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="143.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="111.99414"
      y1="55.99512"
      x2="191.99414"
      y2="55.99512"
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
    <path d="M199.99414,55.99512a8.00008,8.00008,0,0,1-8,8H157.76l-42.6665,128h28.90063a8,8,0,0,1,0,16H104.02307l-.028.002-.02735-.002H63.99414a8,8,0,0,1,0-16H98.22827l42.66651-128H111.99414a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,199.99414,55.99512Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="151.99414"
      y1="55.99512"
      x2="103.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="143.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="111.99414"
      y1="55.99512"
      x2="191.99414"
      y2="55.99512"
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
      x1="151.99414"
      y1="55.99512"
      x2="103.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="143.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="111.99414"
      y1="55.99512"
      x2="191.99414"
      y2="55.99512"
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
      x1="151.99414"
      y1="55.99512"
      x2="103.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="143.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="111.99414"
      y1="55.99512"
      x2="191.99414"
      y2="55.99512"
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

const TextItalic = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextItalic.displayName = "TextItalic";

export default TextItalic;
