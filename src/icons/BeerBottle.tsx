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
      x1="208"
      y1="16"
      x2="240"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,24,152,72l-40,8L27.3,164.7a16.1,16.1,0,0,0,0,22.6l41.4,41.4a16.1,16.1,0,0,0,22.6,0L176,144l8-40,48-64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="108"
      y1="212"
      x2="44"
      y2="148"
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
    <rect
      x="60.4"
      y="110.7"
      width="79.2"
      height="90.51"
      transform="translate(-81 116.4) rotate(-45)"
      opacity="0.2"
    />
    <line
      x1="208"
      y1="16"
      x2="240"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,24,152,72l-40,8L27.3,164.7a16.1,16.1,0,0,0,0,22.6l41.4,41.4a16.1,16.1,0,0,0,22.6,0L176,144l8-40,48-64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="216"
      x2="40"
      y2="152"
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
    <path d="M245.7,42.3l-32-32a8.1,8.1,0,0,0-11.4,11.4l1.5,1.4L148.7,64.5l-38.3,7.7a8.5,8.5,0,0,0-4.1,2.1l-16,16h0l-56,56h0L21.7,159a23.9,23.9,0,0,0,0,34L63,234.3a23.9,23.9,0,0,0,34,0l12.7-12.6h0l56-56h0l16-16a8.5,8.5,0,0,0,2.1-4.1l7.7-38.3,41.4-55.1,1.4,1.5a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,245.7,42.3ZM74.3,223,33,181.7a8,8,0,0,1,0-11.4l7-7L92.7,216l-7,7A8.1,8.1,0,0,1,74.3,223ZM177.6,99.2a8.3,8.3,0,0,0-1.4,3.2l-7.6,37.7-8.6,8.6L107.3,96l8.6-8.6,37.7-7.6a8.3,8.3,0,0,0,3.2-1.4l58.4-43.8,6.2,6.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="208"
      y1="16"
      x2="240"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,24,152,72l-40,8L27.3,164.7a16.1,16.1,0,0,0,0,22.6l41.4,41.4a16.1,16.1,0,0,0,22.6,0L176,144l8-40,48-64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="216"
      x2="40"
      y2="152"
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
      x1="208"
      y1="16"
      x2="240"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,24,152,72l-40,8L27.3,164.7a16.1,16.1,0,0,0,0,22.6l41.4,41.4a16.1,16.1,0,0,0,22.6,0L176,144l8-40,48-64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="216"
      x2="40"
      y2="152"
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
      x1="208"
      y1="16"
      x2="240"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,24,152,72l-40,8L27.3,164.7a16.1,16.1,0,0,0,0,22.6l41.4,41.4a16.1,16.1,0,0,0,22.6,0L176,144l8-40,48-64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="96"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="216"
      x2="40"
      y2="152"
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

const BeerBottle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BeerBottle.displayName = "BeerBottle";

export default BeerBottle;
