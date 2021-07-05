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
    <line
      x1="120"
      y1="88.00002"
      x2="88"
      y2="224.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
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
    <line
      x1="120"
      y1="88.00002"
      x2="88"
      y2="224.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
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
    <path d="M232,128a104.02405,104.02405,0,0,1-132.74316,99.957l9.8164-39.26513A50.31473,50.31473,0,0,0,136,196c35.29,0,64-30.50488,64-68A72,72,0,1,0,61.2373,155.00393,8.00011,8.00011,0,0,0,76.06836,149,56.00735,56.00735,0,1,1,184,128c0,28.67285-21.53271,52-48,52-10.49072,0-17.78076-3.66064-22.75049-8.01269l14.51172-58.04688a8.00012,8.00012,0,0,0-15.52246-3.88086L84.17822,222.30178A103.99416,103.99416,0,1,1,232,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="120"
      y1="88.00002"
      x2="88"
      y2="224.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
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
    <line
      x1="120"
      y1="88.00002"
      x2="88"
      y2="224.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
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
    <line
      x1="120"
      y1="88.00002"
      x2="88"
      y2="224.00002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
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

const PinterestLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PinterestLogo.displayName = "PinterestLogo";

export default PinterestLogo;
