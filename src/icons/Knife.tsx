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
      d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
      <path d="M146.49075,90.49075l51.36711-52.63289a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542Z" />
    </g>
    <path
      d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
    <path d="M231.79883,32.2002a28.05536,28.05536,0,0,0-39.667.06933L18.27441,210.41211a8,8,0,0,0,3.92676,13.38281,155.06019,155.06019,0,0,0,34.957,4.00293c33.4209-.001,66.877-10.86914,98.32813-32.1748,31.74512-21.50391,50.14551-45.79981,50.91406-46.82325a8.00114,8.00114,0,0,0-.74316-10.457L186.919,119.60547l44.97753-47.90332A28.03445,28.03445,0,0,0,231.79883,32.2002ZM189.207,144.52148a225.51045,225.51045,0,0,1-43.10351,38.13184c-34.46973,23.23145-69.999,32.665-105.83887,28.13477l106.29492-108.915,23.30176,23.30175q.208.22852.43847.44434l.082.07617Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
      d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
      d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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

const Knife = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Knife.displayName = "Knife";

export default Knife;
