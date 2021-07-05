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
      d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="108"
      x2="136"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="148"
      x2="120"
      y2="148"
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
      d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="112"
      x2="136"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="144"
      x2="120"
      y2="144"
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
    <path d="M192.56934,189.25488a7.99974,7.99974,0,0,1-.001,11.314A80.00019,80.00019,0,0,1,56.40088,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.40088A80.00019,80.00019,0,0,1,192.56836,55.43115a7.99984,7.99984,0,1,1-11.3125,11.31446A63.98841,63.98841,0,0,0,72.51758,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.51758a63.98841,63.98841,0,0,0,108.73828,37.25439A8.00093,8.00093,0,0,1,192.56934,189.25488Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="112"
      x2="136"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="144"
      x2="120"
      y2="144"
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
      d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="112"
      x2="136"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="144"
      x2="120"
      y2="144"
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
      d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="112"
      x2="136"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="144"
      x2="120"
      y2="144"
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

const CurrencyEur = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CurrencyEur.displayName = "CurrencyEur";

export default CurrencyEur;
