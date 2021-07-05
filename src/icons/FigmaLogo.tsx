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
    <circle
      cx="162"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
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
    <circle cx="162" cy="128" r="34" opacity="0.2" />
    <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" opacity="0.2" />
    <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" opacity="0.2" />
    <circle
      cx="162"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
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
    <path d="M186.61523,94.00049A41.97934,41.97934,0,0,0,162,18.001H94A41.97934,41.97934,0,0,0,69.38477,94.00049a41.93894,41.93894,0,0,0,.00048,67.99939A41.9892,41.9892,0,1,0,136,195.99951V160.948a41.97356,41.97356,0,1,0,50.61523-66.94751ZM188,60.001a26.02916,26.02916,0,0,1-25.98047,25.99951L162,86l-.03857.001L136,86V34.001h26A26.02947,26.02947,0,0,1,188,60.001ZM162,154a25.99952,25.99952,0,0,1-.03857-51.999H162l.019-.00049A25.99976,25.99976,0,0,1,162,154Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="162"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
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
    <circle
      cx="162"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
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
    <circle
      cx="162"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,94V26.00089H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,161.99911V94H94a34,34,0,0,0,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,94V26.00089h34a34,34,0,0,1,0,68Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z"
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

const FigmaLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FigmaLogo.displayName = "FigmaLogo";

export default FigmaLogo;
