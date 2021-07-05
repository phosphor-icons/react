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
      d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,168V136a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M147.83843,128,135.70664,84.4441a8,8,0,0,0-15.41328,0L108.16157,128Z"
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
      d="M175.99816,211.158a96,96,0,1,0-95.99492.00082L80,211.16442V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.1616l12.00656-57.63163c1.769-8.49116,13.89469-8.49116,15.66368,0L147.83843,136H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.16115Z"
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
      d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
    <path d="M201.53906,54.46094A103.99994,103.99994,0,1,0,54.46094,201.53906,103.99994,103.99994,0,1,0,201.53906,54.46094ZM88,206.37012V176h80v30.37012A88.38031,88.38031,0,0,1,88,206.37012ZM104,136h43.78662c.01514.00006.03027.00195.04541.00195.01148,0,.02344-.00189.03491-.00195H152v24H104Zm86.22461,54.22559c-2.0022,2.00225-4.08447,3.87616-6.22461,5.64471V176a16.01833,16.01833,0,0,0-16-16V136a16.01128,16.01128,0,0,0-13.7356-15.82068L143.60156,73.2998a15.99991,15.99991,0,0,0-31.20312-.00048l-10.66284,46.88A16.01132,16.01132,0,0,0,88,136v24a16.01833,16.01833,0,0,0-16,16v19.8703c-2.14014-1.76855-4.22241-3.64246-6.22461-5.64471a88,88,0,1,1,124.44922,0Z" />
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
      d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
      d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
      d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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

const MarkerCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MarkerCircle.displayName = "MarkerCircle";

export default MarkerCircle;
