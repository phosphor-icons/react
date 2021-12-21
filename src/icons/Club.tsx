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
      d="M104.5,186.6A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-28.5,86.6L160,232H96Z"
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
      d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
      opacity="0.2"
    />
    <path
      d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
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
    <path d="M232,148a52,52,0,0,1-80.5,43.5l10.7,34.1a7.8,7.8,0,0,1-1.2,7.1,7.9,7.9,0,0,1-6.4,3.3H101.4a7.9,7.9,0,0,1-6.4-3.3,7.8,7.8,0,0,1-1.2-7.1l10.7-34.1a51.7,51.7,0,0,1-30,8.5c-27.7-.8-50.4-24-50.5-51.8A52.1,52.1,0,0,1,76,96l4,.2a53.3,53.3,0,0,1-3.9-23.4,52,52,0,1,1,99.8,23.4A51.5,51.5,0,0,1,232,148Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
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
      d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
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
      d="M112.5,179.2A48,48,0,1,1,76,100a51.2,51.2,0,0,1,11.2,1.3h0A47.3,47.3,0,0,1,80,76a48,48,0,0,1,96,0,47.3,47.3,0,0,1-7.2,25.3h0A51.2,51.2,0,0,1,180,100a48,48,0,1,1-36.5,79.2L160,232H96Z"
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

const Club = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Club.displayName = "Club";

export default Club;
