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
    <path
      d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="128 152 64 216 32 184"
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
    <polygon points="44 44 44 196 60 212 212 212 212 44 44 44" opacity="0.2" />
    <path
      d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128 152 64 216 32 184"
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
      <path d="M203.99951,36.00012h-152a16.01834,16.01834,0,0,0-16,16v91.27246a8,8,0,0,0,16,0V52.00012h152v152H135.63525a8,8,0,0,0,0,16h68.36426a16.01833,16.01833,0,0,0,16-16v-152A16.01833,16.01833,0,0,0,203.99951,36.00012Z" />
      <path d="M133.65674,146.34338a8.00121,8.00121,0,0,0-11.31445,0L63.99951,204.68664,37.65674,178.34338a8.00018,8.00018,0,1,0-11.31445,11.31348l32,32a8.00062,8.00062,0,0,0,11.31445,0l64-64A8,8,0,0,0,133.65674,146.34338Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="128 152 64 216 32 184"
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
    <path
      d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="128 152 64 216 32 184"
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
    <path
      d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128 152 64 216 32 184"
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

const CheckSquareOffset = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CheckSquareOffset.displayName = "CheckSquareOffset";

export default CheckSquareOffset;
