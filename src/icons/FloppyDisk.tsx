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
      d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="152"
      y1="80.00903"
      x2="96"
      y2="80.00903"
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
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64L208,216a8,8,0,0,0,8-8V91.31371a8,8,0,0,0-2.34315-5.65686l-43.3137-43.3137A8,8,0,0,0,164.68629,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z"
      opacity="0.2"
    />
    <path
      d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="72.00903"
      x2="96"
      y2="72.00903"
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
    <path d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H79.82617c.05835.00122.11524.00879.17383.00879s.11548-.00757.17383-.00879h95.65234c.05835.00122.11524.00879.17383.00879s.11548-.00757.17383-.00879H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM208,91.31409V207.99963H184V152.00842a16.01833,16.01833,0,0,0-16-16H88a16.01833,16.01833,0,0,0-16,16v55.99121H48v-160l116.68555.001L208,91.31409v-.001l8,.001ZM160,72.0094a8.00039,8.00039,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8.00039,8.00039,0,0,1,160,72.0094Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="152"
      y1="72.00903"
      x2="96"
      y2="72.00903"
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
      d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="152"
      y1="72.00903"
      x2="96"
      y2="72.00903"
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
      d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,216.00842v-64a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="72.00903"
      x2="96"
      y2="72.00903"
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

const FloppyDisk = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FloppyDisk.displayName = "FloppyDisk";

export default FloppyDisk;
