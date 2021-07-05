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
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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
    <rect x="39.99414" y="88" width="176" height="128" rx="8" opacity="0.2" />
    <rect
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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
    <path d="M207.99463,80h-36V52a44,44,0,0,0-88,0V80h-36a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,207.99463,80Zm-108-28a28,28,0,0,1,56,0V80h-56Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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

const LockSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LockSimple.displayName = "LockSimple";

export default LockSimple;
