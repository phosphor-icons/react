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
      d="M130.49413,63.28047l11.648-11.648a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M125.50407,192.72133l-11.64621,11.6462a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
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
      d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
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
      <path d="M210.0249,45.97559a52.00107,52.00107,0,0,0-73.54,0L116.686,65.77441a8.00053,8.00053,0,1,0,11.31445,11.31446L147.79932,57.29a35.99926,35.99926,0,1,1,50.91113,50.91016l-28.2832,28.28515a36.04088,36.04088,0,0,1-50.91211,0,8.00053,8.00053,0,0,0-11.31446,11.31445,52.0625,52.0625,0,0,0,73.54,0l28.28418-28.28515a52.00226,52.00226,0,0,0,0-73.53906Z" />
      <path d="M127.99951,178.91113,108.20068,198.71A35.99926,35.99926,0,1,1,57.28955,147.7998l28.2832-28.28515a36.03821,36.03821,0,0,1,50.91211,0,8.00053,8.00053,0,1,0,11.31446-11.31445,52.0625,52.0625,0,0,0-73.54,0L45.9751,136.48535a52.00031,52.00031,0,0,0,73.54,73.53906L139.314,190.22559a8.00053,8.00053,0,0,0-11.31445-11.31446Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
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
      d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
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
      d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
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

const Link = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Link.displayName = "Link";

export default Link;
