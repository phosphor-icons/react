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
    <circle cx="60" cy="228" r="16" />
    <circle cx="92" cy="196" r="16" />
    <circle cx="28" cy="196" r="16" />
    <circle cx="60" cy="164" r="16" />
    <path
      d="M244,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,64.39532,86.07114A8,8,0,0,0,59.6732,99.6732l96.6536,96.6536a8,8,0,0,0,13.60206-4.72212L184,72"
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
      d="M184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166Z"
      opacity="0.2"
    />
    <circle cx="60" cy="228" r="12" />
    <circle cx="88" cy="200" r="12" />
    <circle cx="28" cy="196" r="12" />
    <circle cx="56" cy="168" r="12" />
    <path
      d="M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72"
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
    <path d="M72,228a12,12,0,1,1-12-12A12,12,0,0,1,72,228Zm16-40a12,12,0,1,0,12,12A12,12,0,0,0,88,188Zm-60-4a12,12,0,1,0,12,12A12,12,0,0,0,28,184Zm40-16a12,12,0,1,0-12,12A12,12,0,0,0,68,168ZM248,32H219.31348A15.89354,15.89354,0,0,0,208,36.68652L180.15576,64.53027,54.01855,85.55322a16.00028,16.00028,0,0,0-8.6831,27.09619l98.01514,98.01465a15.99969,15.99969,0,0,0,27.09619-8.68261l21.023-126.13721v-.00049L219.31348,48H248a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="60" cy="228" r="10" />
    <circle cx="88" cy="200" r="10" />
    <circle cx="28" cy="196" r="10" />
    <circle cx="56" cy="168" r="10" />
    <path
      d="M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72"
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
    <circle cx="60" cy="228" r="8" />
    <circle cx="88" cy="200" r="8" />
    <circle cx="28" cy="196" r="8" />
    <circle cx="56" cy="168" r="8" />
    <path
      d="M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72"
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
    <circle cx="60" cy="228" r="12" />
    <circle cx="88" cy="200" r="12" />
    <circle cx="28" cy="196" r="12" />
    <circle cx="56" cy="168" r="12" />
    <path
      d="M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72"
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

const Shower = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Shower.displayName = "Shower";

export default Shower;
