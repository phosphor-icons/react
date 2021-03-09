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
      x1="33.45455"
      y1="24"
      x2="222.54545"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M183.89179,189.48093c-20.898,21.71963-45.66537,31.18017-53.43559,33.75632a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667V48a8,8,0,0,1,8-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M102.05883,40H208a8,8,0,0,1,8,8v58.66667c0,18.84182-3.58637,34.858-9.3111,48.42156"
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
      d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z"
      opacity="0.2"
    />
    <line
      x1="33.45455"
      y1="24"
      x2="222.54545"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.24631,40H208a8,8,0,0,1,8,8v58.66667c0,22.61089-5.16469,41.15262-12.99168,56.26977"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.89179,189.48093c-20.898,21.71963-45.66537,31.18017-53.43559,33.75632a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667V48a8,8,0,0,1,8-8"
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
      <path d="M228.46533,226.61816l-38.64551-42.51025-.00781-.00928L108.60547,94.772l-69.231-76.15381A8.0006,8.0006,0,0,0,27.53467,29.38184L35.457,38.09668A15.90942,15.90942,0,0,0,31.99951,48v58.667c0,89.45117,75.82617,119.124,91.02637,124.16406a15.49078,15.49078,0,0,0,9.94824,0,148.267,148.267,0,0,0,50.55762-29.852l33.09375,36.40284a8.0006,8.0006,0,1,0,11.83984-10.76368Z" />
      <path d="M197.08838,168.31836a8.001,8.001,0,0,0,13.02441-1.70313c9.21485-17.79785,13.88672-37.96679,13.88672-59.94824V48a16.01833,16.01833,0,0,0-16-16H91.24658a8.00036,8.00036,0,0,0-5.91992,13.38184Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="33.45455"
      y1="24"
      x2="222.54545"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M91.24631,40H208a8,8,0,0,1,8,8v58.66667c0,22.61089-5.16469,41.15262-12.99168,56.26977"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M183.89179,189.48093c-20.898,21.71963-45.66537,31.18017-53.43559,33.75632a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667V48a8,8,0,0,1,8-8"
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
      x1="33.45455"
      y1="24"
      x2="222.54545"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M91.24631,40H208a8,8,0,0,1,8,8v58.66667c0,22.61089-5.16469,41.15262-12.99168,56.26977"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M183.89179,189.48093c-20.898,21.71963-45.66537,31.18017-53.43559,33.75632a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667V48a8,8,0,0,1,8-8"
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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M91.24631,40H208a8,8,0,0,1,8,8v58.66667c0,22.61089-5.16469,41.15262-12.99168,56.26977"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.89179,189.48093c-20.898,21.71963-45.66537,31.18017-53.43559,33.75632a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667V48a8,8,0,0,1,8-8"
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

const ShieldSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShieldSlash.displayName = "ShieldSlash";

export default ShieldSlash;
