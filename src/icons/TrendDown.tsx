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
      points="232.002 200 136.002 104 96.002 144 24.002 72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="232.002 136 232.002 200 168.002 200"
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
      points="232.002 200 136.002 104 96.002 144 24.002 72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 136 232.002 200 168.002 200"
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
    <path d="M240.00244,136v64a8.00008,8.00008,0,0,1-8,8h-64a8.00038,8.00038,0,0,1-5.65723-13.65674L188.68848,168l-52.686-52.686-34.34277,34.34278a8.00122,8.00122,0,0,1-11.31446,0l-72-72A8.00018,8.00018,0,1,1,29.65967,66.34326L96.00244,132.686l34.34277-34.34278a8.00122,8.00122,0,0,1,11.31446,0L200.00244,156.686l26.34277-26.34278A8.0001,8.0001,0,0,1,240.00244,136Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="232.002 200 136.002 104 96.002 144 24.002 72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="232.002 136 232.002 200 168.002 200"
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
      points="232.002 200 136.002 104 96.002 144 24.002 72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="232.002 136 232.002 200 168.002 200"
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
      points="232.002 200 136.002 104 96.002 144 24.002 72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 136 232.002 200 168.002 200"
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

const TrendDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrendDown.displayName = "TrendDown";

export default TrendDown;
