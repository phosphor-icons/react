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
      d="M164,224H56a8,8,0,0,1-8-8V76a8,8,0,0,1,8-8l76,0,40,40V216A8,8,0,0,1,164,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M84,68V36a8,8,0,0,1,8-8l80,0,40,40V176a8,8,0,0,1-8,8H172"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="144"
      x2="132"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="184"
      x2="132"
      y2="184"
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
      d="M176,192h24a8,8,0,0,0,8-8V72L168,32,88,32a8,8,0,0,0-8,8V64l56,0,40,40Z"
      opacity="0.2"
    />
    <path
      d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8l80,0,40,40V216A8,8,0,0,1,168,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,64V40a8,8,0,0,1,8-8l80,0,40,40V184a8,8,0,0,1-8,8H176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="152"
      x2="136"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="184"
      x2="136"
      y2="184"
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
    <path d="M213.65723,66.34326l-40-40A8.00076,8.00076,0,0,0,168,24H88A16.01833,16.01833,0,0,0,72,40V56H56A16.01833,16.01833,0,0,0,40,72V216a16.01833,16.01833,0,0,0,16,16H168a16.01833,16.01833,0,0,0,16-16V200h16a16.01833,16.01833,0,0,0,16-16V72A8.00035,8.00035,0,0,0,213.65723,66.34326ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8.00035,8.00035,0,0,0-2.34277-5.65674l-40-40A8.00076,8.00076,0,0,0,136,56H88V40h76.68652L200,75.314Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8l80,0,40,40V216A8,8,0,0,1,168,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,64V40a8,8,0,0,1,8-8l80,0,40,40V184a8,8,0,0,1-8,8H176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="152"
      x2="136"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="184"
      x2="136"
      y2="184"
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
      d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8l80,0,40,40V216A8,8,0,0,1,168,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,64V40a8,8,0,0,1,8-8l80,0,40,40V184a8,8,0,0,1-8,8H176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="152"
      x2="136"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="184"
      x2="136"
      y2="184"
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
      d="M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8l80,0,40,40V216A8,8,0,0,1,168,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,64V40a8,8,0,0,1,8-8l80,0,40,40V184a8,8,0,0,1-8,8H176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="152"
      x2="136"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="184"
      x2="136"
      y2="184"
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

const Files = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Files.displayName = "Files";

export default Files;
