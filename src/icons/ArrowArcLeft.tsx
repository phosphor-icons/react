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
    <polyline
      points="92.118 148.118 28.118 148.118 28.118 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
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
      points="92.118 148.118 28.118 148.118 28.118 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
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
    <path d="M232,184a8,8,0,0,1-16,0A87.99083,87.99083,0,0,0,71.69507,116.38086l26.08032,26.08008a8.00064,8.00064,0,0,1-5.65723,13.65722h-64a8.0004,8.0004,0,0,1-8-8v-64a8.00065,8.00065,0,0,1,13.65723-5.65722L60.333,105.01855A104.00326,104.00326,0,0,1,232,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="92.118 148.118 28.118 148.118 28.118 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
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
      points="92.118 148.118 28.118 148.118 28.118 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
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
      points="92.118 148.118 28.118 148.118 28.118 84.118"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,184A96,96,0,0,0,60.11775,116.11775l-32,32"
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

const ArrowArcLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowArcLeft.displayName = "ArrowArcLeft";

export default ArrowArcLeft;
