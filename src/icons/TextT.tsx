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
      x1="127.99414"
      y1="55.99512"
      x2="127.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="95.99414"
      y1="199.99512"
      x2="159.99414"
      y2="199.99512"
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
      x1="127.99414"
      y1="55.99512"
      x2="127.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="95.99414"
      y1="199.99512"
      x2="159.99414"
      y2="199.99512"
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
    <path d="M207.99414,47.99512h-160a8.00008,8.00008,0,0,0-8,8v32a8,8,0,0,0,16,0v-24h64v128h-24a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16h-24v-128h64v24a8,8,0,1,0,16,0v-32A8.00008,8.00008,0,0,0,207.99414,47.99512Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="127.99414"
      y1="55.99512"
      x2="127.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="95.99414"
      y1="199.99512"
      x2="159.99414"
      y2="199.99512"
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
      x1="127.99414"
      y1="55.99512"
      x2="127.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="95.99414"
      y1="199.99512"
      x2="159.99414"
      y2="199.99512"
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
      x1="127.99414"
      y1="55.99512"
      x2="127.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="95.99414"
      y1="199.99512"
      x2="159.99414"
      y2="199.99512"
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

const TextT = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextT.displayName = "TextT";

export default TextT;
