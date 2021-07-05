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
      d="M128,124V92a20,20,0,0,0-40,0v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M168,124V92a20,20,0,0,0-40,0v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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
      d="M88,116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z"
      opacity="0.2"
    />
    <path
      d="M128,124V92a20,20,0,0,0-40,0v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,124V92a20,20,0,0,0-40,0v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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
    <path d="M188,80a27.82885,27.82885,0,0,0-13.35791,3.39716A27.97426,27.97426,0,0,0,128,72.43066,27.9817,27.9817,0,0,0,80,92v16H68a28.03146,28.03146,0,0,0-28,28v16a88,88,0,0,0,176,0V108A28.03146,28.03146,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V136a12.01343,12.01343,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v32a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,124V92a20,20,0,0,0-40,0v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M168,124V92a20,20,0,0,0-40,0v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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
      d="M128,124V92a20,20,0,0,0-40,0v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M168,124V92a20,20,0,0,0-40,0v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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
      d="M128,124V92a20,20,0,0,0-40,0v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,124V92a20,20,0,0,0-40,0v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,148V116H68a20,20,0,0,0-20,20v16a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v16"
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

const HandGrabbing = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HandGrabbing.displayName = "HandGrabbing";

export default HandGrabbing;
