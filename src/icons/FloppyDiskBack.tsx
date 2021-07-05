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
      d="M40,91.31371V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.31371a8,8,0,0,0-5.65686,2.34315l-43.3137,43.3137A8,8,0,0,0,40,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128.0059"
      cy="148.009"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="104 80.009 160 80.009 160 40.009"
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
      d="M208,40.00012H91.31372a8.00052,8.00052,0,0,0-5.657,2.343L42.34326,85.65686A7.99918,7.99918,0,0,0,40,91.3136V208.00012a8.00009,8.00009,0,0,0,8,8H208a8.00009,8.00009,0,0,0,8-8v-160A7.99993,7.99993,0,0,0,208,40.00012ZM128.00586,176.00891a28,28,0,1,1,28-28A28,28,0,0,1,128.00586,176.00891Z"
      opacity="0.2"
    />
    <path
      d="M40,91.31371V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.31371a8,8,0,0,0-5.65686,2.34315l-43.3137,43.3137A8,8,0,0,0,40,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128.0059"
      cy="148.009"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="96 80.009 160 80.009 160 40.009"
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
    <path d="M208,31.99963H168V80.0094a8.00039,8.00039,0,0,1-8,8H96a8,8,0,0,1,0-16h56V31.99963H91.31348A15.89171,15.89171,0,0,0,80,36.68616L36.68555,79.99963A15.898,15.898,0,0,0,32,91.31409V207.99963a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16v-160A16.01833,16.01833,0,0,0,208,31.99963ZM128,176a28,28,0,1,1,28-28A28.0316,28.0316,0,0,1,128,176Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M40,91.31371V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.31371a8,8,0,0,0-5.65686,2.34315l-43.3137,43.3137A8,8,0,0,0,40,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="128.0059"
      cy="148.009"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="96 80.009 160 80.009 160 40.009"
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
      d="M40,91.31371V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.31371a8,8,0,0,0-5.65686,2.34315l-43.3137,43.3137A8,8,0,0,0,40,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="128.0059"
      cy="148.009"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="96 80.009 160 80.009 160 40.009"
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
      d="M40,91.31371V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H91.31371a8,8,0,0,0-5.65686,2.34315l-43.3137,43.3137A8,8,0,0,0,40,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128.0059"
      cy="148.009"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="96 80.009 160 80.009 160 40.009"
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

const FloppyDiskBack = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FloppyDiskBack.displayName = "FloppyDiskBack";

export default FloppyDiskBack;
