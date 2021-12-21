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
      x1="168"
      y1="76"
      x2="232"
      y2="76"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M28,124H90a34,34,0,0,1,0,68H28V64H78a30,30,0,0,1,0,60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160,152h80a40,40,0,1,0-40,40,39.5,39.5,0,0,0,17.5-4"
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
      x1="168"
      y1="80"
      x2="232"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
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
    <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm88,72a8,8,0,0,1-8,8H169a32.1,32.1,0,0,0,31,24,31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0,7.9,7.9,0,0,1,0,11.3A47.4,47.4,0,0,1,200,200a48,48,0,1,1,48-48Zm-17-8a32,32,0,0,0-62,0Zm-91,14a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H86a38,38,0,0,1,28.3,63.3A42,42,0,0,1,140,158ZM40,116H86a22,22,0,0,0,0-44H40Zm84,42a26.1,26.1,0,0,0-26-26H40v52H98A26.1,26.1,0,0,0,124,158Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="168"
      y1="80"
      x2="232"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
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
      x1="168"
      y1="80"
      x2="232"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
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
      x1="168"
      y1="80"
      x2="232"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60"
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

const BehanceLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BehanceLogo.displayName = "BehanceLogo";

export default BehanceLogo;
