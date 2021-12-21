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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M49.6,183.4l12.1-7.3a8.4,8.4,0,0,0,3.8-6.1l3.7-37a7.3,7.3,0,0,1,1.2-3.5L90.1,98.6A8,8,0,0,1,102,96.8l15.4,12.9a7.8,7.8,0,0,0,6.2,1.8l31.2-4.2a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8"
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
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8h.1a97,97,0,0,1-29.2,38.1Z"
      opacity="0.2"
    />
    <path
      d="M49.6,183.4A96,96,0,0,1,182.7,49.1h0l1.1,24.3a8.1,8.1,0,0,1-1.9,5.6l-22.2,25.6a7.8,7.8,0,0,1-4.9,2.7l-31.5,4.3a8.6,8.6,0,0,1-5.8-1.5L97.9,95.9a8.1,8.1,0,0,0-11.5,2.2L66.6,129.2a7.7,7.7,0,0,0-1.3,4.2l-.2,36.1a8,8,0,0,1-3.8,6.8l-11.7,7.1Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8"
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
    <path d="M223.5,169.2a6.1,6.1,0,0,0,.5-1.2A104,104,0,0,0,187.8,42.9l-1.2-.7A103,103,0,0,0,128,24,104,104,0,0,0,42.6,187.3v.2a10.5,10.5,0,0,0,.8,1.1,104,104,0,0,0,147.8,21.9l1.4-1.1A105.3,105.3,0,0,0,223.5,169.2Zm-162,16.4,3.9-2.4a15.8,15.8,0,0,0,7.7-13.6l.2-33.8a8.3,8.3,0,0,1,1.3-4.3l14-22a8,8,0,0,1,11.4-2.2l12.8,9.3a16.5,16.5,0,0,0,11.6,2.9l31.4-4.3a15.8,15.8,0,0,0,10-5.4l22.1-25.6A15.4,15.4,0,0,0,191.8,73l-.2-5.8A87.7,87.7,0,0,1,216,128a86.4,86.4,0,0,1-3.2,23.4l-15.9-14.6a16.1,16.1,0,0,0-16.9-3l-30.5,12.7a16.1,16.1,0,0,0-9.7,12.4l-2.4,16.2A16.2,16.2,0,0,0,149.2,193l21.5,5.6,4,4a88,88,0,0,1-113.2-17Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8"
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
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8"
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
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M49.6,183.4l11.7-7.1a8,8,0,0,0,3.8-6.8l.2-36.1a7.7,7.7,0,0,1,1.3-4.2L86.4,98.1a8.1,8.1,0,0,1,11.5-2.2l19.6,14.2a8.6,8.6,0,0,0,5.8,1.5l31.5-4.3a7.8,7.8,0,0,0,4.9-2.7L181.9,79a8.1,8.1,0,0,0,1.9-5.6l-1.1-24.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M187.1,203.7l-10.8-10.8a8.2,8.2,0,0,0-3.6-2.1l-21.5-5.6a8,8,0,0,1-5.8-8.9l2.3-16.2a8.2,8.2,0,0,1,4.9-6.2L183,141.2a8,8,0,0,1,8.5,1.5l24.9,22.8"
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

const GlobeHemisphereEast = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

GlobeHemisphereEast.displayName = "GlobeHemisphereEast";

export default GlobeHemisphereEast;
