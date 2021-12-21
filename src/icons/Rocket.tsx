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
      x1="144"
      y1="228"
      x2="112"
      y2="228"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="96" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M73.9,111.4h0L42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24C78.4,161.4,72.7,134.5,73.9,111.4Z"
      opacity="0.2"
    />
    <path
      d="M181.5,110.7h0l31.4,37.7a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.6a8,8,0,0,1-12.8,4.6l-30-24C177,160.7,182.7,133.8,181.5,110.7Z"
      opacity="0.2"
    />
    <line
      x1="144"
      y1="224"
      x2="112"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="96" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M144,216H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" />
    <path d="M219.6,143.9l-30.2-36.3a125.4,125.4,0,0,0-8-34.9c-11.6-30.2-32.1-50-43.4-59.1a15.9,15.9,0,0,0-20-.1c-11.4,9.1-32.2,28.9-43.9,59.1A121.5,121.5,0,0,0,66,108.3L36.4,143.9A16.1,16.1,0,0,0,33,157.6l12.4,55.6a15.9,15.9,0,0,0,10.3,11.6,17,17,0,0,0,5.4.9,16,16,0,0,0,9.9-3.5L98.8,200h58.4L185,222.2a16,16,0,0,0,9.9,3.5,17,17,0,0,0,5.4-.9,15.9,15.9,0,0,0,10.3-11.6L223,157.6A16.1,16.1,0,0,0,219.6,143.9ZM61,209.7,48.7,154.1l17.9-21.5q3.5,28.1,19.1,57.4ZM128,108a12,12,0,1,1,12-12A12,12,0,0,1,128,108Zm67,101.7-24.8-19.8c10.4-19.7,16.6-39,18.8-57.8l18.3,22Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="144"
      y1="224"
      x2="112"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="96" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="144"
      y1="224"
      x2="112"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="96" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="144"
      y1="224"
      x2="112"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M123,19.8C104,35,40.5,95.8,96,192h64c54.4-96.2-8.2-156.9-27-172.2A7.8,7.8,0,0,0,123,19.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M73.9,111.4,42.5,149a7.6,7.6,0,0,0-1.6,6.8l12.3,55.7A8,8,0,0,0,66,216l30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M181.5,110.6l32,38.4a7.6,7.6,0,0,1,1.6,6.8l-12.3,55.7A8,8,0,0,1,190,216l-30-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="96" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Rocket = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Rocket.displayName = "Rocket";

export default Rocket;
