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
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="189.3"
      y1="122.7"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="66.7"
      y1="122.7"
      x2="40"
      y2="112"
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
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      opacity="0.2"
    />
    <path
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="189.3"
      y1="122.7"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="66.7"
      y1="122.7"
      x2="40"
      y2="112"
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
    <path d="M243,194.5c-7.2,6.7-17.5,7.4-26.6,8-5.7.4-11.7.8-15.2,2.7s-6.8,6.7-10.2,11.3c-5.4,7.4-11.5,15.8-21.2,18.3s-18.6-1.9-26.8-5.7c-5.3-2.5-10.8-5.1-15-5.1s-9.7,2.6-15,5.1-13.7,6.4-21.2,6.4a27.7,27.7,0,0,1-5.6-.7c-9.7-2.5-15.8-10.9-21.2-18.3-3.4-4.6-6.8-9.4-10.2-11.3s-9.5-2.3-15.2-2.7c-9.1-.6-19.4-1.3-26.6-8a8,8,0,0,1,2.1-13.1c.3-.1,12.5-6,24.5-21.3a105.5,105.5,0,0,0,17.3-32.7l-19.9-8a8,8,0,1,1,6-14.8l18,7.2A160.5,160.5,0,0,0,64,80a64,64,0,0,1,128,0,160.5,160.5,0,0,0,3,31.8l18-7.2a8,8,0,0,1,6,14.8l-19.9,8a105.5,105.5,0,0,0,17.3,32.7c12.1,15.3,24.3,21.3,24.5,21.3a8,8,0,0,1,2.1,13.1Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="189.3"
      y1="122.7"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="66.7"
      y1="122.7"
      x2="40"
      y2="112"
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
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="189.3"
      y1="122.7"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="66.7"
      y1="122.7"
      x2="40"
      y2="112"
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
      d="M18.5,188.7S72,163.9,72,80a56,56,0,0,1,112,0c0,83.9,53.5,108.7,53.5,108.7-9.3,8.7-29,3.4-40.2,9.5s-17,25.6-29.5,28.8S141,216,128,216s-27.7,14.1-39.8,11-18.5-22.7-29.5-28.8S27.8,197.4,18.5,188.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="189.3"
      y1="122.7"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="66.7"
      y1="122.7"
      x2="40"
      y2="112"
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

const SnapchatLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SnapchatLogo.displayName = "SnapchatLogo";

export default SnapchatLogo;
