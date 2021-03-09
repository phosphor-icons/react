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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="109.08829"
      y1="109.08829"
      x2="146.9117"
      y2="146.9117"
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
      d="M88,160a70.51259,70.51259,0,0,0,.73242,7.26758A70.51259,70.51259,0,0,0,96,168a71.99981,71.99981,0,0,0,72-72,70.51259,70.51259,0,0,0-.73242-7.26758A70.51259,70.51259,0,0,0,160,88,71.99981,71.99981,0,0,0,88,160Z"
      opacity="0.2"
    />
    <circle
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
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
    <path d="M174.63477,81.36523a79.99168,79.99168,0,1,0-93.26954,93.26954,79.99168,79.99168,0,1,0,93.26954-93.26954ZM32,96A64.00385,64.00385,0,0,1,157.98779,80.05127,80.06522,80.06522,0,0,0,80.051,157.98779,64.1144,64.1144,0,0,1,32,96ZM160,224a64.11421,64.11421,0,0,1-61.98779-48.05127A80.06522,80.06522,0,0,0,175.949,98.01221,64.00389,64.00389,0,0,1,160,224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="122.51701"
      y1="98.51701"
      x2="157.48457"
      y2="133.48457"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="98.51562"
      y1="122.51562"
      x2="133.48323"
      y2="157.48323"
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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="122.51701"
      y1="98.51701"
      x2="157.48457"
      y2="133.48457"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="98.51562"
      y1="122.51562"
      x2="133.48323"
      y2="157.48323"
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
      cx="96"
      cy="96"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="122.51701"
      y1="98.51701"
      x2="157.48457"
      y2="133.48457"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="98.51562"
      y1="122.51562"
      x2="133.48323"
      y2="157.48323"
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

const Intersect = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Intersect.displayName = "Intersect";

export default Intersect;
