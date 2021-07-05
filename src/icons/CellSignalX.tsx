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
      x1="224"
      y1="104"
      x2="176"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="224"
      y1="152"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,183.99507V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371V72.00485"
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
      d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z"
      opacity="0.2"
    />
    <line
      x1="224"
      y1="104"
      x2="176"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="152"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,173.2544V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371V82.74556"
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
      <path d="M211.314,128l18.34278-18.34277a8.00018,8.00018,0,1,0-11.31348-11.31446L200,116.686,181.65674,98.34277a8.00018,8.00018,0,0,0-11.31348,11.31446L188.686,128l-18.34278,18.34277a8.00018,8.00018,0,0,0,11.31348,11.31446L200,139.314l18.34326,18.34327a8.00018,8.00018,0,0,0,11.31348-11.31446Z" />
      <path d="M200,161.94141l-7.0293,7.02929a24.00019,24.00019,0,0,1-33.9414-33.9414L166.05859,128l-7.02929-7.0293a24.00019,24.00019,0,0,1,33.9414-33.9414L200,94.05859l7.0293-7.02929c.312-.312.64624-.58594.9707-.87744V43.31348A15.99974,15.99974,0,0,0,180.68652,32L15.99951,196.68652A16.00018,16.00018,0,0,0,27.31348,224H192a16.01833,16.01833,0,0,0,16-16V169.84814c-.32446-.2915-.65869-.56543-.9707-.87744Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="224"
      y1="104"
      x2="176"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="224"
      y1="152"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,173.2544V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371V82.74556"
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
      x1="224"
      y1="104"
      x2="176"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="224"
      y1="152"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,173.2544V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371V82.74556"
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
      x1="224"
      y1="104"
      x2="176"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="152"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,173.2544V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371V82.74556"
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

const CellSignalX = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CellSignalX.displayName = "CellSignalX";

export default CellSignalX;
