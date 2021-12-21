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
      x1="56"
      y1="132"
      x2="136"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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
      x1="56"
      y1="132"
      x2="136"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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
    <path d="M192,208a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16,28.1,28.1,0,0,0,28-28V140H56a8,8,0,0,1,0-16H84V84a52,52,0,0,1,88.8-36.8,8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0A36.1,36.1,0,0,0,100,84v40h36a8,8,0,0,1,0,16H100v32a43.8,43.8,0,0,1-10.1,28H184A8,8,0,0,1,192,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="56"
      y1="132"
      x2="136"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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
      x1="56"
      y1="132"
      x2="136"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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
      x1="56"
      y1="132"
      x2="136"
      y2="132"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,44-44,43.5,43.5,0,0,1,31.1,12.9"
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

const CurrencyGbp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CurrencyGbp.displayName = "CurrencyGbp";

export default CurrencyGbp;
