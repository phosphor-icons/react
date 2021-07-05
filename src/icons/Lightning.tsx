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
    <polygon
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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
    <polygon
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
      opacity="0.2"
    />
    <polygon
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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
    <path d="M215.78857,118.16406a8.00125,8.00125,0,0,0-4.97949-5.6626L153.17871,90.89014l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-112,120a7.99995,7.99995,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02734l112-120A8.00057,8.00057,0,0,0,215.78857,118.16406Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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
      points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992"
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

const Lightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Lightning.displayName = "Lightning";

export default Lightning;
