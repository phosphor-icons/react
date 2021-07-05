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
    <polyline
      points="224 208 32 208 32 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208.002 64 128.002 144 96.002 112 32.002 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208.002 104 208.002 64 168.002 64"
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
    <polyline
      points="224 208 32 208 32 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208.002 64 128.002 144 96.002 112 32.002 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208.002 104 208.002 64 168.002 64"
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
    <path d="M231.99951,208a8.00039,8.00039,0,0,1-8,8h-192a8.00039,8.00039,0,0,1-8-8V48a8,8,0,0,1,16,0V156.68848l50.3457-50.34571a8.00122,8.00122,0,0,1,11.31446,0l26.34277,26.34375L176.68848,84,162.34521,69.65674A8.00038,8.00038,0,0,1,168.00244,56h40a8.00039,8.00039,0,0,1,8,8v40a8.00018,8.00018,0,0,1-13.65723,5.65674L188.00244,95.314l-54.34277,54.34327a8.00122,8.00122,0,0,1-11.31446,0L96.00244,123.31348l-56.00293,56.0039V200h184A8.00039,8.00039,0,0,1,231.99951,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="224 208 32 208 32 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208.002 64 128.002 144 96.002 112 32.002 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208.002 104 208.002 64 168.002 64"
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
    <polyline
      points="224 208 32 208 32 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208.002 64 128.002 144 96.002 112 32.002 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208.002 104 208.002 64 168.002 64"
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
    <polyline
      points="224 208 32 208 32 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208.002 64 128.002 144 96.002 112 32.002 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208.002 104 208.002 64 168.002 64"
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

const ChartLineUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChartLineUp.displayName = "ChartLineUp";

export default ChartLineUp;
