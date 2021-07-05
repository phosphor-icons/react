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
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
    <path d="M240.00244,56v64a8.00018,8.00018,0,0,1-13.65723,5.65674L200.00244,99.314l-58.34277,58.34278a8.00122,8.00122,0,0,1-11.31446,0L96.00244,123.314,29.65967,189.65674a8.00018,8.00018,0,0,1-11.31446-11.31348l72-72a8.00122,8.00122,0,0,1,11.31446,0L136.00244,140.686,188.68848,88,162.34521,61.65674A8.00038,8.00038,0,0,1,168.00244,48h64A8.00008,8.00008,0,0,1,240.00244,56Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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

const TrendUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrendUp.displayName = "TrendUp";

export default TrendUp;
