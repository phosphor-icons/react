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
      d="M208,80a16,16,0,0,0-16-16H148l56,96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="204"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="52"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="166.667 96 102.667 96 52 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="52 64 84 64 128.333 140"
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
    <circle cx="208" cy="160" r="40" opacity="0.2" />
    <circle cx="48" cy="160" r="40" opacity="0.2" />
    <path
      d="M208,80a16,16,0,0,0-16-16H152l56,96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="208"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="48"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="48 64 76 64 132 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="170.087 96 94.667 96 48 160"
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
    <path d="M256,160a48,48,0,1,1-78.74414-36.82715l23.834,40.85791a7.99983,7.99983,0,1,0,13.82032-8.06152l-23.84375-40.87549A47.983,47.983,0,0,1,256,160ZM47.99316,168.00049a8.00038,8.00038,0,0,1-6.457-12.71387l27.875-38.22827a48.13563,48.13563,0,1,0,12.918,9.43994L54.46387,164.71338A7.98855,7.98855,0,0,1,47.99316,168.00049ZM165.92871,72H192a8.00917,8.00917,0,0,1,8,8,8,8,0,0,0,16,0,24.02718,24.02718,0,0,0-24-24H152a7.99957,7.99957,0,0,0-6.91016,12.03076L156.73853,88H99.26147L82.91016,59.96924A7.999,7.999,0,0,0,76,56H48a8,8,0,0,0,0,16H71.40527L85.12134,95.51318,69.41113,117.05835a48.23239,48.23239,0,0,1,12.918,9.43994l11.59278-15.89844,31.168,53.43091a7.99983,7.99983,0,1,0,13.82032-8.06152L108.59473,104h57.477l11.18408,19.17285a48.02278,48.02278,0,0,1,13.81055-8.0791Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,80a16,16,0,0,0-16-16H152l56,96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="208"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="48"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="48 64 76 64 132 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="170.087 96 94.667 96 48 160"
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
      d="M208,80a16,16,0,0,0-16-16H152l56,96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="208"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="48"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="48 64 76 64 132 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="170.087 96 94.667 96 48 160"
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
      d="M208,80a16,16,0,0,0-16-16H152l56,96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="208"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="48"
      cy="160"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="48 64 76 64 132 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="170.087 96 94.667 96 48 160"
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

const Bicycle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Bicycle.displayName = "Bicycle";

export default Bicycle;
