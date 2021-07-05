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
      d="M176,120a48,48,0,0,1-48,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="104" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M92.76616,217.32808a95.841,95.841,0,0,0,37.17657,6.65271c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168Z"
      opacity="0.2"
    />
    <path
      d="M176,120a48,48,0,0,1-48,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="124" cy="100" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M202.053,54.97754A103.25514,103.25514,0,0,0,128.00009,24h-8a8.00009,8.00009,0,0,0-8,8V59.52979L11.80743,121.18652a8.00038,8.00038,0,0,0-2.29591,11.49317L23.29867,151.7959a31.8353,31.8353,0,0,0,31.338,12.82324c13.6514-2.31055,38.5919-4.23193,61.52457,6.19092L90.02246,207.40479a87.94472,87.94472,0,0,1-20.68657-13.81055A8.00032,8.00032,0,0,0,58.664,205.51611,103.66177,103.66177,0,0,0,128.01279,232q1.043,0,2.0879-.02051A104.001,104.001,0,0,0,202.053,54.97754ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M176,120a48,48,0,0,1-48,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="124" cy="100" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M176,120a48,48,0,0,1-48,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="124" cy="100" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M176,120a48,48,0,0,1-48,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="124" cy="100" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Horse = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Horse.displayName = "Horse";

export default Horse;
