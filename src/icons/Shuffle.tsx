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
      d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152.76794,93.858A64.00219,64.00219,0,0,1,200.93555,72H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,184H55.06445a64.00212,64.00212,0,0,0,48.16769-21.85814"
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
      d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
    <path d="M237.65723,178.34277a8.00122,8.00122,0,0,1,0,11.31446l-24,24A8.00066,8.00066,0,0,1,200,208V191.98584a72.13911,72.13911,0,0,1-57.65332-30.13721L100.63379,103.4502A56.11029,56.11029,0,0,0,55.06445,80H32a8,8,0,0,1,0-16H55.06445a72.14126,72.14126,0,0,1,58.58887,30.15137l41.71289,58.39843A56.0996,56.0996,0,0,0,200,175.97168V160a8.00065,8.00065,0,0,1,13.65723-5.65723Zm-94.64356-71.36132a7.99621,7.99621,0,0,0,11.15918-1.86036l1.19336-1.67089A56.0996,56.0996,0,0,1,200,80.02832V96a8.00053,8.00053,0,0,0,13.65723,5.65723l24-24a8.00122,8.00122,0,0,0,0-11.31446l-24-24A8.00065,8.00065,0,0,0,200,48V64.01416a72.13911,72.13911,0,0,0-57.65332,30.13721l-1.19336,1.6709A7.9986,7.9986,0,0,0,143.01367,106.98145Zm-30.02734,42.0371a7.99642,7.99642,0,0,0-11.15918,1.86036l-1.19336,1.67089A56.11029,56.11029,0,0,1,55.06445,176H32a8,8,0,0,0,0,16H55.06445a72.14126,72.14126,0,0,0,58.58887-30.15137l1.19336-1.6709A7.9986,7.9986,0,0,0,112.98633,149.01855Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
      d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
      d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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

const Shuffle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Shuffle.displayName = "Shuffle";

export default Shuffle;
