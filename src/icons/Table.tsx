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
      d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88.00008"
      y1="104"
      x2="88.00008"
      y2="200"
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
    <rect x="32.0002" y="104" width="55.99988" height="96" opacity="0.2" />
    <path
      d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88.00008"
      y1="104"
      x2="88.00008"
      y2="200"
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
    <path d="M224.00586,48h-192a7.99977,7.99977,0,0,0-8,8V192a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56A7.99977,7.99977,0,0,0,224.00586,48Zm-184,64h40v32h-40Zm56,0H216.01l.00244,32H96.00586Zm-56,48h40v32h-40Zm176,32h-120V160H216.01367l.00244,31.99951Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88.00008"
      y1="104"
      x2="88.00008"
      y2="200"
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
      d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88.00008"
      y1="104"
      x2="88.00008"
      y2="200"
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
      d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88.00008"
      y1="104"
      x2="88.00008"
      y2="200"
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

const Table = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Table.displayName = "Table";

export default Table;
