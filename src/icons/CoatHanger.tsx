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
    <path
      d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
    <path
      d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
    <path d="M241.6,171.2,141.3,96l23.5-17.6A8.1,8.1,0,0,0,168,72a40,40,0,0,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.7-3.8L123.3,89.5l-.2.2L14.4,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM24,184l104-78,104,78H24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
      d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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
      d="M96,72a32,32,0,0,1,64,0L19.2,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.8-14.4L128,96"
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

const CoatHanger = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CoatHanger.displayName = "CoatHanger";

export default CoatHanger;
