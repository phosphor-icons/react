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
      cx="127.99414"
      cy="96"
      r="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="96"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="176 159.995 176 240 127.993 216 80 240 80 160.002"
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
    <circle cx="127.99414" cy="96" r="48" opacity="0.2" />
    <circle
      cx="127.99414"
      cy="96"
      r="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="127.99414"
      cy="96"
      r="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176 159.995 176 240 127.993 216 80 240 80 160.002"
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
    <g>
      <circle cx="127.99414" cy="96" r="56" />
      <path d="M127.99414,8A87.96624,87.96624,0,0,0,72,163.8374V240a7.99951,7.99951,0,0,0,11.57812,7.15527l44.415-22.21093,44.42969,22.21142A8,8,0,0,0,184,240V163.82764A87.96617,87.96617,0,0,0,127.99414,8Zm0,160a72,72,0,1,1,72-72A72.08124,72.08124,0,0,1,127.99414,168Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="127.99414"
      cy="96"
      r="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="127.99414"
      cy="96"
      r="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="176 159.995 176 240 127.993 216 80 240 80 160.002"
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
      cx="127.99414"
      cy="96"
      r="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="127.99414"
      cy="96"
      r="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="176 159.995 176 240 127.993 216 80 240 80 160.002"
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
      cx="127.99414"
      cy="96"
      r="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="127.99414"
      cy="96"
      r="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176 159.995 176 240 127.993 216 80 240 80 160.002"
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

const Medal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Medal.displayName = "Medal";

export default Medal;
