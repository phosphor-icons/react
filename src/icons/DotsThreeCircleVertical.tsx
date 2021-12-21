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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="100" r="16" />
    <circle cx="128" cy="156" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="80" r="12" />
    <circle cx="128" cy="176" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M232,128A104,104,0,1,0,128,232,104.2,104.2,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12,12,0,0,1,116,176Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="80" r="10" />
    <circle cx="128" cy="128" r="10" />
    <circle cx="128" cy="176" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="80" r="8" />
    <circle cx="128" cy="128" r="8" />
    <circle cx="128" cy="176" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="80" r="12" />
    <circle cx="128" cy="176" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsThreeCircleVertical = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

DotsThreeCircleVertical.displayName = "DotsThreeCircleVertical";

export default DotsThreeCircleVertical;
