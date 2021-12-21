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
      d="M104,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44"
      y1="140"
      x2="93.5"
      y2="189.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="164"
      y1="140"
      x2="213.5"
      y2="189.5"
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
    <path d="M104,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2" />
    <path d="M224,140v24a36,36,0,0,1-72,0V140Z" opacity="0.2" />
    <path
      d="M104,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="140"
      x2="215.4"
      y2="187.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="140"
      x2="95.4"
      y2="187.4"
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
    <path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v60H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32.1,32.1,0,0,0,24,72v92a44,44,0,0,0,88,0V148h32v16a44,44,0,0,0,88,0V72A32.1,32.1,0,0,0,200,40ZM85,177a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4L58.3,161.7a8.1,8.1,0,0,1,11.4-11.4L85,165.7A7.9,7.9,0,0,1,85,177Zm120,0a7.7,7.7,0,0,1-5.6,2.4,8,8,0,0,1-5.7-2.4l-15.4-15.3a8.1,8.1,0,0,1,11.4-11.4L205,165.7A7.9,7.9,0,0,1,205,177Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M104,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M224,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="140"
      x2="215.4"
      y2="187.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="140"
      x2="95.4"
      y2="187.4"
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
      d="M104,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M224,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="140"
      x2="215.4"
      y2="187.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="140"
      x2="95.4"
      y2="187.4"
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
      d="M104,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,140v24a36,36,0,0,1-72,0V140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,48a23.9,23.9,0,0,1,24,24v68H32V72A23.9,23.9,0,0,1,56,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="140"
      x2="215.4"
      y2="187.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="140"
      x2="95.4"
      y2="187.4"
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

const Sunglasses = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Sunglasses.displayName = "Sunglasses";

export default Sunglasses;
