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
      cx="128.00049"
      cy="128.00452"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="99.71622"
      y1="99.72024"
      x2="156.28476"
      y2="156.28879"
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
    <circle cx="128.00049" cy="128.00452" r="96" opacity="0.2" />
    <circle
      cx="128.00049"
      cy="128.00452"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="99.71622"
      y1="99.72024"
      x2="156.28476"
      y2="156.28879"
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
    <path d="M128.00049,24.00452a104,104,0,1,0,104,104A104.12041,104.12041,0,0,0,128.00049,24.00452Zm22.62742,137.94112L94.05936,105.3771a8,8,0,0,1,11.31371-11.31371l56.56854,56.56854a8,8,0,1,1-11.3137,11.31371Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128.00049"
      cy="128.00452"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="99.71622"
      y1="99.72024"
      x2="156.28476"
      y2="156.28879"
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
    <circle
      cx="128.00049"
      cy="128.00452"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="99.71622"
      y1="99.72024"
      x2="156.28476"
      y2="156.28879"
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
    <circle
      cx="128.00049"
      cy="128.00452"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="99.71622"
      y1="99.72024"
      x2="156.28476"
      y2="156.28879"
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

const ProhibitInset = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ProhibitInset.displayName = "ProhibitInset";

export default ProhibitInset;
