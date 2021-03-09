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
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="32"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M222.81257,112.85778a95.9029,95.9029,0,1,1-79.67019-79.67033"
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
      d="M128,32A96.00088,96.00088,0,0,0,63.79883,199.375v-.001A71.99731,71.99731,0,0,1,128,160a40,40,0,1,1,40-40,40.0001,40.0001,0,0,1-40,40,71.99731,71.99731,0,0,1,64.20117,39.374A96.0002,96.0002,0,0,0,128,32Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="32"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M222.81257,112.85778a95.9029,95.9029,0,1,1-79.67019-79.67033"
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
    <path d="M128,76a44,44,0,1,1-44,44A43.99983,43.99983,0,0,1,128,76Zm48-12h16V80a8,8,0,0,0,16,0V64h16a8,8,0,0,0,0-16H208V32a8,8,0,0,0-16,0V48H176a8,8,0,0,0,0,16Zm45.56006,40.95605a8.00039,8.00039,0,0,0-6.64893,9.15381A89.00044,89.00044,0,0,1,216,128a87.63672,87.63672,0,0,1-22.24182,58.41016,79.7044,79.7044,0,0,0-24.431-22.97461,59.83641,59.83641,0,0,1-82.6543,0A79.70345,79.70345,0,0,0,62.2417,186.41016,87.9498,87.9498,0,0,1,128,40a89.02966,89.02966,0,0,1,13.89062,1.08887,7.99994,7.99994,0,1,0,2.50391-15.80274A104.0826,104.0826,0,0,0,24,128a103.74716,103.74716,0,0,0,33.81934,76.68066,7.94507,7.94507,0,0,0,1.32629,1.18946,103.784,103.784,0,0,0,137.71252-.00293,7.94633,7.94633,0,0,0,1.31678-1.18115A103.74751,103.74751,0,0,0,232,128a105.04749,105.04749,0,0,0-1.28613-16.39453A7.99752,7.99752,0,0,0,221.56006,104.95605Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="200"
      y1="32"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M222.81257,112.85778a95.9029,95.9029,0,1,1-79.67019-79.67033"
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
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="200"
      y1="32"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M222.81257,112.85778a95.9029,95.9029,0,1,1-79.67019-79.67033"
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
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="32"
      x2="200"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M222.81257,112.85778a95.9029,95.9029,0,1,1-79.67019-79.67033"
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

const UserCirclePlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserCirclePlus.displayName = "UserCirclePlus";

export default UserCirclePlus;
