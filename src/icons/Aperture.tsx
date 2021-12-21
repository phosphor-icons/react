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
    <line
      x1="128"
      y1="32"
      x2="164.7"
      y2="134.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44.9"
      y1="80"
      x2="152.1"
      y2="99.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44.9"
      y1="176"
      x2="115.5"
      y2="92.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3"
      y2="121.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="211.1"
      y1="176"
      x2="103.9"
      y2="156.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="211.1"
      y1="80"
      x2="140.5"
      y2="163.1"
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
      d="M195.9,60.1a96,96,0,1,0,0,135.8A96,96,0,0,0,195.9,60.1Zm-31.2,74.6-24.2,28.4h0l-36.6-6.7h0L91.3,121.3h0l24.2-28.4h0l36.6,6.7h0l12.6,35.1Z"
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
    <line
      x1="128"
      y1="32"
      x2="164.7"
      y2="134.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.9"
      y1="80"
      x2="152.1"
      y2="99.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.9"
      y1="176"
      x2="115.5"
      y2="92.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3"
      y2="121.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="176"
      x2="103.9"
      y2="156.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="80"
      x2="140.5"
      y2="163.1"
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
    <path d="M232,128A104.1,104.1,0,0,0,128,24,104.1,104.1,0,0,0,24,128,104.1,104.1,0,0,0,128,232h.1A104.1,104.1,0,0,0,232,128ZM49.2,88.9l51.2,9.4L46.7,161.5A88,88,0,0,1,49.2,88.9Zm160.1,5.6a88,88,0,0,1-2.5,72.6l-51.2-9.4Zm-8-15.2L167.6,119l-28-78.2a86.8,86.8,0,0,1,50.6,25A88.5,88.5,0,0,1,201.3,79.3ZM122.4,40.2l17.5,49L58.3,74.3a99.2,99.2,0,0,1,7.5-8.5A87.1,87.1,0,0,1,122.4,40.2ZM54.7,176.7,88.4,137l28,78.2a86.8,86.8,0,0,1-50.6-25A88.5,88.5,0,0,1,54.7,176.7Zm78.9,39.1-17.5-49,23,4.2h.1l58.5,10.7a99.2,99.2,0,0,1-7.5,8.5A87.1,87.1,0,0,1,133.6,215.8Z" />
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
    <line
      x1="128"
      y1="32"
      x2="164.7"
      y2="134.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="44.9"
      y1="80"
      x2="152.1"
      y2="99.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="44.9"
      y1="176"
      x2="115.5"
      y2="92.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3"
      y2="121.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="211.1"
      y1="176"
      x2="103.9"
      y2="156.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="211.1"
      y1="80"
      x2="140.5"
      y2="163.1"
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
    <line
      x1="128"
      y1="32"
      x2="164.7"
      y2="134.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="44.9"
      y1="80"
      x2="152.1"
      y2="99.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="44.9"
      y1="176"
      x2="115.5"
      y2="92.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3"
      y2="121.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="211.1"
      y1="176"
      x2="103.9"
      y2="156.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="211.1"
      y1="80"
      x2="140.5"
      y2="163.1"
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
    <line
      x1="128"
      y1="32"
      x2="164.7"
      y2="134.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.9"
      y1="80"
      x2="152.1"
      y2="99.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.9"
      y1="176"
      x2="115.5"
      y2="92.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3"
      y2="121.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="176"
      x2="103.9"
      y2="156.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.1"
      y1="80"
      x2="140.5"
      y2="163.1"
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

const Aperture = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Aperture.displayName = "Aperture";

export default Aperture;
