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
      x1="69.32731"
      y1="83.99548"
      x2="186.21472"
      y2="83.99548"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="167.99548"
      x2="128"
      y2="128"
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
      points="128 128 180.923 87.995 74.661 87.995 128 128"
      opacity="0.2"
    />
    <path
      d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="167.99548"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="74.66065"
      y1="87.99548"
      x2="180.92301"
      y2="87.99548"
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
    <path d="M193.64844,88.40527A16.08547,16.08547,0,0,0,200,75.64111V40a16.01833,16.01833,0,0,0-16-16H72A16.01833,16.01833,0,0,0,56,40V76a16.07553,16.07553,0,0,0,6.3999,12.7998l18.127,13.59522.00048.00049L114.6665,128,62.40039,167.2002A16.07459,16.07459,0,0,0,56,180v36a16.01833,16.01833,0,0,0,16,16H184a16.01833,16.01833,0,0,0,16-16V180.35889a16.08452,16.08452,0,0,0-6.352-12.76416L141.2666,128l22.70459-17.16211ZM72,40H184V75.6416l-5.76025,4.354H77.32764L72,76ZM184,180.35889V216H72V180l48-36v23.99561a8,8,0,0,0,16,0V144.07568Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="74.66065"
      y1="87.99548"
      x2="180.92301"
      y2="87.99548"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="167.99548"
      x2="128"
      y2="128"
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
      x1="74.66065"
      y1="87.99548"
      x2="180.92301"
      y2="87.99548"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="167.99548"
      x2="128"
      y2="128"
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
      d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="74.66065"
      y1="87.99548"
      x2="180.92301"
      y2="87.99548"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="167.99548"
      x2="128"
      y2="128"
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

const HourglassMedium = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HourglassMedium.displayName = "HourglassMedium";

export default HourglassMedium;
