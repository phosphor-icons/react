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
    <polygon
      points="16 100 128 164 240 100 128 36 16 100"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="16 148 128 212 240 148"
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
    <polygon points="16 104 128 168 240 104 128 40 16 104" opacity="0.2" />
    <polygon
      points="16 104 128 168 240 104 128 40 16 104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="16 144 128 208 240 144"
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
    <g>
      <path d="M12.03125,110.94629l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00024,8.00024,0,0,0,0-13.89258l-112-64a8.00411,8.00411,0,0,0-7.9375,0l-112,64a8.00024,8.00024,0,0,0,0,13.89258Z" />
      <path d="M236.03125,137.05371,128,198.78613,19.96875,137.05371a8.00012,8.00012,0,0,0-7.9375,13.89258l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00012,8.00012,0,0,0-7.9375-13.89258Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="16 104 128 168 240 104 128 40 16 104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="16 144 128 208 240 144"
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
    <polygon
      points="16 104 128 168 240 104 128 40 16 104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="16 144 128 208 240 144"
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
    <polygon
      points="16 104 128 168 240 104 128 40 16 104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="16 144 128 208 240 144"
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

const StackSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

StackSimple.displayName = "StackSimple";

export default StackSimple;
