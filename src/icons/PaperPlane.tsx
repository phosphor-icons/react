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
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="127.88159"
      y1="184"
      x2="127.88159"
      y2="120"
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
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      opacity="0.2"
    />
    <path
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.88159"
      y1="184"
      x2="127.88159"
      y2="120"
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
    <path d="M236.43432,201.4707l-94.59179-168.915a16.00119,16.00119,0,0,0-27.92188,0L19.32885,201.47021A16.00042,16.00042,0,0,0,38.67065,224.356l81.21094-29.00391V120a8,8,0,1,1,16,0v75.352L217.09253,224.356a16.171,16.171,0,0,0,5.44531.95117,16.02221,16.02221,0,0,0,13.89648-23.83643Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="127.88159"
      y1="184"
      x2="127.88159"
      y2="120"
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
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="127.88159"
      y1="184"
      x2="127.88159"
      y2="120"
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
      d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.88159"
      y1="184"
      x2="127.88159"
      y2="120"
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

const PaperPlane = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaperPlane.displayName = "PaperPlane";

export default PaperPlane;
