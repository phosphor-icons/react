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
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="168"
      x2="32"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="144"
      y1="64"
      x2="184"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="232"
      y1="72"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="224"
      y1="144"
      x2="112"
      y2="32"
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
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44Z"
      opacity="0.2"
    />
    <path
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="168"
      x2="32"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="64"
      x2="184"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="72"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="144"
      x2="112"
      y2="32"
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
    <path d="M237.7,77.7,203.3,112l26.4,26.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-6.3-6.4L160.3,195a40.1,40.1,0,0,1-56.6,0L88,179.3,37.7,229.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L76.7,168,61,152.3a40.1,40.1,0,0,1,0-56.6L112.7,44l-6.4-6.3a8.1,8.1,0,0,1,11.4-11.4L144,52.7l34.3-34.4a8.1,8.1,0,0,1,11.4,11.4L155.3,64,192,100.7l34.3-34.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="168"
      x2="32"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="144"
      y1="64"
      x2="184"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="232"
      y1="72"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="224"
      y1="144"
      x2="112"
      y2="32"
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
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="168"
      x2="32"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="144"
      y1="64"
      x2="184"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="232"
      y1="72"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="224"
      y1="144"
      x2="112"
      y2="32"
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
      d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="168"
      x2="32"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="64"
      x2="184"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="72"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="144"
      x2="112"
      y2="32"
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

const Plug = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Plug.displayName = "Plug";

export default Plug;
