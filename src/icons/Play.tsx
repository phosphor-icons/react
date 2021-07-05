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
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
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
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
      opacity="0.2"
    />
    <path
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
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
    <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
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
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
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
      d="M228.14833,121.17381,84.1717,33.18517A8,8,0,0,0,72,40.01136V215.98864a8,8,0,0,0,12.1717,6.82619l143.97663-87.98864A8,8,0,0,0,228.14833,121.17381Z"
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

const Play = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Play.displayName = "Play";

export default Play;
