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
    <polyline
      points="176 104 224 152 176 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,56a96,96,0,0,0,96,96h96"
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
    <polyline
      points="176 104 224 152 176 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,56a96,96,0,0,0,96,96h96"
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
    <path d="M229.65723,157.65723l-48,48A8.00066,8.00066,0,0,1,168,200V160H128A104.11791,104.11791,0,0,1,24,56a8,8,0,0,1,16,0,88.09957,88.09957,0,0,0,88,88h40V104a8.00065,8.00065,0,0,1,13.65723-5.65723l48,48A8.00122,8.00122,0,0,1,229.65723,157.65723Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="176 104 224 152 176 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,56a96,96,0,0,0,96,96h96"
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
    <polyline
      points="176 104 224 152 176 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,56a96,96,0,0,0,96,96h96"
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
    <polyline
      points="176 104 224 152 176 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,56a96,96,0,0,0,96,96h96"
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

const ArrowBendDownRight = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowBendDownRight.displayName = "ArrowBendDownRight";

export default ArrowBendDownRight;
