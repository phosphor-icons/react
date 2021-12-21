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
      d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1"
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
      d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.6,165,39.3,203.9A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-20.8-34.8h0c-11.4,9.7-32.2,16.8-67.9-1.1-33.3-16.6-53.6-11.7-65.4-3Z"
      opacity="0.2"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M223.6,199.8,160,93.8V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V93.8L55.8,160.7c0,.1-.1.2-.1.3L32.4,199.8A16,16,0,0,0,46.1,224H209.9a16,16,0,0,0,13.7-24.2ZM109.7,102a15.9,15.9,0,0,0,2.3-8.2V40h32V93.8a15.9,15.9,0,0,0,2.3,8.2l38.8,64.8c-13.1,7.1-31.4,5.1-53.5-6-14.3-7.1-32.7-13.5-50.3-11.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1"
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
      d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1"
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
      d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1"
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

const Flask = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Flask.displayName = "Flask";

export default Flask;
