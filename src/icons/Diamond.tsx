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
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      opacity="0.2"
    />
    <rect
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M236,139.31348,139.31348,236a16.01779,16.01779,0,0,1-22.627,0L20,139.31348a16.01779,16.01779,0,0,1,0-22.627L116.68652,20a16.01779,16.01779,0,0,1,22.627,0L236,116.68652A16.01779,16.01779,0,0,1,236,139.31348Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="51.63247"
      y="51.63247"
      width="152.73506"
      height="152.73506"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
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
