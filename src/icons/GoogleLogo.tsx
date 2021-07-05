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
      d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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
      d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,184A80,80,0,1,1,184.56836,71.43164a7.99984,7.99984,0,1,1-11.31348,11.31348A63.99718,63.99718,0,1,0,191.50244,136H128a8,8,0,0,1,0-16h72a8.00008,8.00008,0,0,1,8,8A80.09041,80.09041,0,0,1,128,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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
      d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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
      d="M128,128h88a88,88,0,1,1-25.77461-62.2254"
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

const GoogleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GoogleLogo.displayName = "GoogleLogo";

export default GoogleLogo;
