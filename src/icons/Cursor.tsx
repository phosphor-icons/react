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
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="136.59053"
      y1="136.58564"
      x2="208.00488"
      y2="208"
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
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      opacity="0.2"
    />
    <path
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136.59053"
      y1="136.58564"
      x2="208.00488"
      y2="208"
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
    <path d="M150.54443,139.22559l55.83594-20.30469a15.99964,15.99964,0,0,0,.15039-30.01758L51.29346,30.68945A15.99937,15.99937,0,0,0,30.69482,51.28906v-.00049L88.90869,206.52588a15.85524,15.85524,0,0,0,14.97656,10.38232h.084a15.86,15.86,0,0,0,14.957-10.53222L139.23047,150.54l63.11767,63.11719a8.00053,8.00053,0,0,0,11.31446-11.31446Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="136.59053"
      y1="136.58564"
      x2="208.00488"
      y2="208"
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
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="136.59053"
      y1="136.58564"
      x2="208.00488"
      y2="208"
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
      d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136.59053"
      y1="136.58564"
      x2="208.00488"
      y2="208"
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

const Cursor = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cursor.displayName = "Cursor";

export default Cursor;
