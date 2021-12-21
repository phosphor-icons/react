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
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
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
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
      opacity="0.2"
    />
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
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
    <path d="M236,139.3,139.3,236a15.9,15.9,0,0,1-22.6,0L20,139.3a16.1,16.1,0,0,1,0-22.6L116.7,20a16.1,16.1,0,0,1,22.6,0L236,116.7A16.1,16.1,0,0,1,236,139.3Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
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
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
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
    <rect
      x="51.6"
      y="51.6"
      width="152.7"
      height="152.74"
      rx="8"
      transform="translate(-53 128) rotate(-45)"
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

const Diamond = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Diamond.displayName = "Diamond";

export default Diamond;
