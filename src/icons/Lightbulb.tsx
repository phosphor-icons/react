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
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,168a79.8,79.8,0,0,1-32-63.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,49.7,144.1A20,20,0,0,0,168,184h0a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-.2A19.6,19.6,0,0,0,80,168Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M163.1,96A35.8,35.8,0,0,0,136,68.9"
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
      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
      opacity="0.2"
    />
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
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
    <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.7,87.7,0,0,1-33.6,69.2A16.1,16.1,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16.2,16.2,0,0,0-6.2-12.7A87.8,87.8,0,0,1,40,104.5C39.7,56.8,78.3,17.1,125.9,16A87.9,87.9,0,0,1,216,104Zm-32.8-9.4a55.8,55.8,0,0,0-45.8-45.7,8,8,0,1,0-2.6,15.8,39.7,39.7,0,0,1,32.6,32.6,8,8,0,0,0,7.9,6.6h1.4A7.9,7.9,0,0,0,183.2,94.6Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
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
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
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
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
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

const Lightbulb = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Lightbulb.displayName = "Lightbulb";

export default Lightbulb;
