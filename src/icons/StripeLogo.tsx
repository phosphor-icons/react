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
      d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="40"
      y="40.00002"
      width="176"
      height="176"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="40.00002" width="176" height="176" rx="8" opacity="0.2" />
    <path
      d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40.00002"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M208,32H48A16.01817,16.01817,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01817,16.01817,0,0,0,208,32ZM128,184c-24.71045,0-44.06738-14.05615-44.06738-32a8,8,0,0,1,16,0c0,7.56787,11.52685,16,28.06738,16,13.27539,0,28.06738-6.5708,28.06738-16,0-9.60376-12.1958-13.44092-30.80224-18.19849-8.70606-2.22631-17.709-4.52856-24.75733-8.25024C90.83887,120.44558,85.936,113.1946,85.936,104c0-18.24292,18.08349-32,42.064-32,17.16748,0,31.917,7.16382,38.49219,18.69556a8.00006,8.00006,0,0,1-13.89942,7.92529C148.91406,92.169,139.26074,88,128,88c-14.61523,0-26.064,7.02808-26.064,16,0,6.81152,10.80664,10.08447,27.293,14.30005,19.08545,4.88037,42.83838,10.95435,42.83838,33.7C172.06738,169.94387,152.71045,184,128,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="40"
      y="40.00002"
      width="176"
      height="176"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="40"
      y="40.00002"
      width="176"
      height="176"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M91.93248,152c0,13.25484,16.148,24,36.06752,24s36.06752-10.74516,36.06752-24c0-32-70.13129-20-70.13129-48,0-13.25483,14.14423-24,34.06377-24,14.93966,0,26.6307,6.04416,31.54249,14.65811"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40.00002"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const StripeLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

StripeLogo.displayName = "StripeLogo";

export default StripeLogo;
