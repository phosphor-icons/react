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
      d="M191.98242,224,127.975,184l-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="191.982 176 127.975 136 63.982 176"
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
    <polygon
      points="191.971 176 127.963 136 63.971 176 63.971 224 127.963 184 191.971 224 191.971 176"
      opacity="0.2"
    />
    <path
      d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="191.971 176 127.963 136 63.971 176"
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
    <path d="M183.97656,32h-112a16.01833,16.01833,0,0,0-16,16V224a8.00043,8.00043,0,0,0,12.24024,6.78418l59.75293-37.35059,59.76709,37.35059A8,8,0,0,0,199.97656,224V48A16.01833,16.01833,0,0,0,183.97656,32ZM132.209,177.21582a8.00107,8.00107,0,0,0-8.48,0L71.97656,209.56543V180.434l55.99317-35.00043,56.00683,35.00068v29.13311Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M191.98828,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="191.988 176 127.981 136 63.988 176"
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
      d="M191.99414,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="191.994 176 127.987 136 63.994 176"
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
      d="M192,224l-64.0074-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="192 176 127.993 136 64 176"
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

const Bookmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Bookmark.displayName = "Bookmark";

export default Bookmark;
