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
    <polyline
      points="144 84 56 172 12 128.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="244 84 156 172 139.941 155.941"
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
    <polyline
      points="148 84 60 172 16 128.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="240 84 152 172 128.627 148.628"
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
    <path d="M153.65674,89.65686l-87.999,88a8.00062,8.00062,0,0,1-11.31347,0l-44.001-43.99805a7.99983,7.99983,0,0,1,11.3125-11.31445l38.34473,38.3418,82.3418-82.34375a8.00052,8.00052,0,0,1,11.31445,11.31445Zm92-11.31445a8.003,8.003,0,0,0-11.31445,0l-82.3418,82.34375-17.71778-17.71582a7.99983,7.99983,0,0,0-11.3125,11.31445l23.374,23.37207a8.00062,8.00062,0,0,0,11.31347,0l87.999-88A8.00121,8.00121,0,0,0,245.65674,78.34241Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="148 84 60 172 16 128.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="240 84 152 172 128.627 148.628"
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
    <polyline
      points="148 84 60 172 16 128.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="240 84 152 172 128.627 148.628"
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
    <polyline
      points="148 84 60 172 16 128.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="240 84 152 172 128.627 148.628"
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

const Checks = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Checks.displayName = "Checks";

export default Checks;
