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
    <g>
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
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </g>
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <g>
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
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M192,208a8.00008,8.00008,0,0,1-8,8H56a8,8,0,0,1,0-16,28.03146,28.03146,0,0,0,28-28V140H56a8,8,0,0,1,0-16H84V84a52,52,0,0,1,88.76953-36.76953A8.00018,8.00018,0,0,1,161.45508,58.544,35.99961,35.99961,0,0,0,100,84v40h36a8,8,0,0,1,0,16H100v32a43.79772,43.79772,0,0,1-10.083,28H184A8.00008,8.00008,0,0,1,192,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <g>
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
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </g>
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <g>
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
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <g>
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
        d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CurrencyGbp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CurrencyGbp.displayName = "CurrencyGbp";

export default CurrencyGbp;
