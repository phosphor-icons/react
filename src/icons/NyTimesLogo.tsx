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
    <circle cx="168" cy="148" r="16" />
    <path
      d="M205.57177,163.35784A80.00853,80.00853,0,1,1,127.92969,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M67.24858,91.86653A28.00107,28.00107,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="48.589 154.315 127.93 112 127.93 224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="91.92969"
      y1="131.2"
      x2="91.92969"
      y2="215.45913"
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
    <g opacity="0.2">
      <path d="M95.92964,217.34328a79.7299,79.7299,0,0,0,32,6.65672V112l-32,17.06667h0v88.2765Z" />
    </g>
    <circle cx="171.92969" cy="148" r="12" />
    <path
      d="M205.57177,163.35784A80.00853,80.00853,0,1,1,127.92969,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M67.24858,91.86653A28.00107,28.00107,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="48.589 154.315 127.93 112 127.93 224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="95.92969"
      y1="129.06667"
      x2="95.92969"
      y2="217.34317"
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
    <path d="M183.92969,148a12,12,0,1,1-12-12A12,12,0,0,1,183.92969,148Zm29.40576,17.28711A88.006,88.006,0,0,1,93.26221,224.87793a7.95208,7.95208,0,0,1-1.15674-.50684,88.23576,88.23576,0,0,1-51.48218-69.30615l-.00439-.03857A88.47326,88.47326,0,0,1,39.92969,144a87.47889,87.47889,0,0,1,14.0874-47.707A36.02189,36.02189,0,0,1,70,28a8.00159,8.00159,0,0,1,3.478.79541L187.68457,83.92969A20.0004,20.0004,0,0,0,186,44a8,8,0,0,1,0-16,36,36,0,0,1,0,72,8.00156,8.00156,0,0,1-3.478-.79541L126.25781,72.04248a72.06449,72.06449,0,0,0-70.25952,69.2544L92.0946,122.04541l.053-.02832L124.165,104.94141A8,8,0,0,1,135.92969,112V215.54541a71.8116,71.8116,0,0,0,61.87841-54.11719,7.99984,7.99984,0,1,1,15.52735,3.85889ZM119.92969,125.3335l-16,8.5332v78.00488a71.4173,71.4173,0,0,0,16,3.67334ZM64.36792,83.20215A88.16232,88.16232,0,0,1,101.459,60.0708L68.31543,44.07031a20.00737,20.00737,0,0,0-3.94751,39.13184ZM87.92969,203.833V142.3999L57.43481,158.66406A72.1802,72.1802,0,0,0,87.92969,203.833Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="172" cy="148" r="10" />
    <path
      d="M205.57177,163.35784A80.00853,80.00853,0,1,1,127.92969,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M67.24858,91.86653A28.00107,28.00107,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="48.589 154.315 127.93 112 127.93 224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="95.92969"
      y1="129.06667"
      x2="95.92969"
      y2="217.34317"
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
    <circle cx="172" cy="148" r="8" />
    <path
      d="M205.57177,163.35784A80.00853,80.00853,0,1,1,127.92969,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M67.24858,91.86653A28.00107,28.00107,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="48.589 154.315 127.93 112 127.93 224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="95.92969"
      y1="129.06667"
      x2="95.92969"
      y2="217.34317"
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
    <circle cx="171.92969" cy="148" r="12" />
    <path
      d="M205.57177,163.35784A80.00853,80.00853,0,1,1,127.92969,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M67.24858,91.86653A28.00107,28.00107,0,0,1,70,36L186,92a28,28,0,0,0,0-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="48.589 154.315 127.93 112 127.93 224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="95.92969"
      y1="129.06667"
      x2="95.92969"
      y2="217.34317"
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

const NyTimesLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NyTimesLogo.displayName = "NyTimesLogo";

export default NyTimesLogo;
