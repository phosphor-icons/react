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
      d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="180"
      cy="76"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      opacity="0.5"
    />
    <circle cx="180" cy="76" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <g opacity="0.2">
      <path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" />
    </g>
    <path
      d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="76"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      opacity="0.5"
    />
    <circle cx="180" cy="76" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M160.00244,16A80.05817,80.05817,0,0,0,83.91357,120.77539L26.34521,178.34277A8.00235,8.00235,0,0,0,24.00244,184v40a8.00039,8.00039,0,0,0,8,8h40a8.00039,8.00039,0,0,0,8-8V208h16a8.00039,8.00039,0,0,0,8-8V184h16a8.00235,8.00235,0,0,0,5.65723-2.34277l9.56738-9.56836A80.00922,80.00922,0,1,0,160.00244,16ZM180,92a16,16,0,1,1,16-16A16.00016,16.00016,0,0,1,180,92Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="180"
      cy="76"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
      opacity="0.5"
    />
    <circle cx="180" cy="76" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="180"
      cy="76"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
      opacity="0.5"
    />
    <circle cx="180" cy="76" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="76"
      r="4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      opacity="0.5"
    />
    <circle cx="180" cy="76" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Key = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Key.displayName = "Key";

export default Key;
