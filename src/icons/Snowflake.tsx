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
      x1="128"
      y1="64"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="104 40 128 64 152 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="104 216 128 192 152 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72.57437"
      y1="96"
      x2="183.42563"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="39.79 104.785 72.574 96 63.79 63.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="192.21 192.785 183.426 160 216.21 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72.57437"
      y1="160"
      x2="183.42563"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="63.79 192.785 72.574 160 39.79 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="216.21 104.785 183.426 96 192.21 63.215"
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
      x1="128"
      y1="64"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 40 128 64 152 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 216 128 192 152 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72.57437"
      y1="96"
      x2="183.42563"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="39.79 104.785 72.574 96 63.79 63.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="192.21 192.785 183.426 160 216.21 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72.57437"
      y1="160"
      x2="183.42563"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="63.79 192.785 72.574 160 39.79 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="216.21 104.785 183.426 96 192.21 63.215"
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
    <path d="M223.938,149.14551a7.99991,7.99991,0,0,1-5.65723,9.79785l-25.05713,6.71387,6.71436,25.05664a8.00007,8.00007,0,1,1-15.45508,4.14062l-7.927-29.58374L136,141.856V188.686l21.65674,21.65673a8.00018,8.00018,0,0,1-11.31348,11.31446L128,203.31348l-18.34326,18.34375a8.00018,8.00018,0,0,1-11.31348-11.31446L120,188.686V141.856L79.44409,165.27075l-7.927,29.58374A8.00007,8.00007,0,1,1,56.062,190.71387l6.71436-25.05664-25.05713-6.71387a8.00007,8.00007,0,1,1,4.14062-15.45508L71.44458,151.415,112.00073,128,71.44458,104.585l-29.58472,7.92676a8.00007,8.00007,0,1,1-4.14062-15.45508l25.05713-6.71387L56.062,65.28613a8.00007,8.00007,0,1,1,15.45508-4.14062l7.927,29.58374L120,114.144V67.314L98.34326,45.65723a8.00018,8.00018,0,0,1,11.31348-11.31446L128,52.68652l18.34326-18.34375a8.00018,8.00018,0,1,1,11.31348,11.31446L136,67.314V114.144l40.55591-23.41479,7.927-29.58374A8.00007,8.00007,0,1,1,199.938,65.28613l-6.71436,25.05664,25.05713,6.71387a8.00007,8.00007,0,1,1-4.14062,15.45508L184.55542,104.585,143.99927,128l40.55615,23.415,29.58472-7.92676A8.00062,8.00062,0,0,1,223.938,149.14551Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="64"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="104 40 128 64 152 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="104 216 128 192 152 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72.57437"
      y1="96"
      x2="183.42563"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="39.79 104.785 72.574 96 63.79 63.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="192.21 192.785 183.426 160 216.21 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72.57437"
      y1="160"
      x2="183.42563"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="63.79 192.785 72.574 160 39.79 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="216.21 104.785 183.426 96 192.21 63.215"
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
      x1="128"
      y1="64"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="104 40 128 64 152 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="104 216 128 192 152 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72.57437"
      y1="96"
      x2="183.42563"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="39.79 104.785 72.574 96 63.79 63.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="192.21 192.785 183.426 160 216.21 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72.57437"
      y1="160"
      x2="183.42563"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="63.79 192.785 72.574 160 39.79 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="216.21 104.785 183.426 96 192.21 63.215"
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
      x1="128"
      y1="64"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 40 128 64 152 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 216 128 192 152 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72.57437"
      y1="96"
      x2="183.42563"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="39.79 104.785 72.574 96 63.79 63.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="192.21 192.785 183.426 160 216.21 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72.57437"
      y1="160"
      x2="183.42563"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="63.79 192.785 72.574 160 39.79 151.215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="216.21 104.785 183.426 96 192.21 63.215"
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

const Snowflake = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Snowflake.displayName = "Snowflake";

export default Snowflake;
