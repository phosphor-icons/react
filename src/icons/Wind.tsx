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
      d="M102.1,52A24,24,0,1,1,120,92H24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.1,92A24,24,0,1,1,208,132H32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M134.1,212A24,24,0,1,0,152,172H40"
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
      d="M129.5,192.3A24,24,0,1,0,152,160H40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M97.5,63.7A24,24,0,1,1,120,96H24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M185.5,95.7A24,24,0,1,1,208,128H32"
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
    <path d="M184,184a32,32,0,0,1-62,11.1,8,8,0,1,1,15-5.5A16,16,0,1,0,152,168H40a8,8,0,0,1,0-16H152A32.1,32.1,0,0,1,184,184Zm-64-80A32,32,0,1,0,90,60.9a8,8,0,1,0,15,5.5A16,16,0,1,1,120,88H24a8,8,0,0,0,0,16Zm88-32a32.1,32.1,0,0,0-30,20.9,8,8,0,1,0,15,5.5A16,16,0,1,1,208,120H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M129.5,192.3A24,24,0,1,0,152,160H40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M97.5,63.7A24,24,0,1,1,120,96H24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M185.5,95.7A24,24,0,1,1,208,128H32"
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
      d="M129.5,192.3A24,24,0,1,0,152,160H40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M97.5,63.7A24,24,0,1,1,120,96H24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M185.5,95.7A24,24,0,1,1,208,128H32"
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
      d="M129.5,192.3A24,24,0,1,0,152,160H40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M97.5,63.7A24,24,0,1,1,120,96H24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M185.5,95.7A24,24,0,1,1,208,128H32"
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

const Wind = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wind.displayName = "Wind";

export default Wind;
