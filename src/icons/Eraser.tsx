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
      x1="91.55018"
      y1="99.54921"
      x2="159.43243"
      y2="167.43146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
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
      d="M111.03042,215.83347H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L91.55018,99.54921l67.88225,67.88225Z"
      opacity="0.2"
    />
    <line
      x1="91.55018"
      y1="99.54921"
      x2="159.43243"
      y2="167.43146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
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
    <path d="M216.001,207.833H130.34375l34.72949-34.72949.0166-.01465.01465-.0166,56.55371-56.55274a24.02962,24.02962,0,0,0,0-33.94141L176.40332,37.32324a24.0007,24.0007,0,0,0-33.94141,0L85.90283,93.88232l-.01025.00928-.00928.01026L29.32422,150.46094a24.00066,24.00066,0,0,0,0,33.9414l37.08887,37.08789a8.00232,8.00232,0,0,0,5.65722,2.34278H216.001a8,8,0,0,0,0-16ZM153.77637,48.6377a7.99708,7.99708,0,0,1,11.3125,0l45.25488,45.25488a8.00888,8.00888,0,0,1,0,11.31347l-50.91113,50.91114L102.86475,99.54932Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="91.55018"
      y1="99.54921"
      x2="159.43243"
      y2="167.43146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
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
      x1="91.55018"
      y1="99.54921"
      x2="159.43243"
      y2="167.43146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
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
      x1="91.55018"
      y1="99.54921"
      x2="159.43243"
      y2="167.43146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216.00049,215.83348H72.07L34.98164,178.74517a16,16,0,0,1,0-22.62742L148.11873,42.98066a16,16,0,0,1,22.62741,0L216.001,88.2355a16,16,0,0,1,0,22.62742L111.03042,215.83347"
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

const Eraser = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Eraser.displayName = "Eraser";

export default Eraser;
