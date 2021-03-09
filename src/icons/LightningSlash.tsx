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
      x1="48"
      y1="40.00391"
      x2="208"
      y2="216.00391"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="163.777 167.359 96 239.977 112 159.977 48 135.976 92.198 88.622"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="119.583 59.281 160 15.977 144 95.976 208 119.977 191.162 138.018"
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
    <polygon
      points="96 239.969 112 159.969 48 135.969 160 15.969 144 95.969 208 119.969 96 239.969"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="39.99609"
      x2="208"
      y2="215.99609"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
      <path d="M53.91943,34.61475A7.99991,7.99991,0,1,0,42.08057,45.37744l39.24072,43.1648-39.16992,41.968a8.00053,8.00053,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02735l61.85083-66.26892,38.38111,42.21911a7.99991,7.99991,0,1,0,11.83886-10.76269Z" />
      <path d="M179.76562,149.25928a8.00013,8.00013,0,0,0,5.86719,2.61865h.05225a8.00073,8.00073,0,0,0,5.84863-2.5415l22.31494-23.90918a7.99994,7.99994,0,0,0-3.03955-12.94922L153.17871,90.8667l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-45.894,49.17237a8.00006,8.00006,0,0,0-.0708,10.83984Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="39.99609"
      x2="208"
      y2="215.99609"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
      x1="48"
      y1="39.99609"
      x2="208"
      y2="215.99609"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
      x1="48"
      y1="39.99609"
      x2="208"
      y2="215.99609"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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

const LightningSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LightningSlash.displayName = "LightningSlash";

export default LightningSlash;
