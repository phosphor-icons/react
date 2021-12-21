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
      d="M104,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="152"
      y="164"
      width="72"
      height="44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M168,164V148a20,20,0,0,1,40,0v16"
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
      d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect x="152" y="164" width="72" height="44" opacity="0.2" />
    <rect
      x="152"
      y="164"
      width="72"
      height="44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,164V152a20,20,0,0,1,40,0v12"
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
    <path d="M232,88v16a8,8,0,0,1-16,0V88H130.7a15.6,15.6,0,0,1-9.6-3.2L93.3,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.3a15.6,15.6,0,0,1,9.6,3.2L130.7,72H216A16,16,0,0,1,232,88Zm0,76v44a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V164a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,164Zm-32-12a12,12,0,0,0-24,0v4h24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="152"
      y="164"
      width="72"
      height="44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M168,164V152a20,20,0,0,1,40,0v12"
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
      d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="152"
      y="164"
      width="72"
      height="44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M168,164V152a20,20,0,0,1,40,0v12"
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
      d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="152"
      y="164"
      width="72"
      height="44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,164V152a20,20,0,0,1,40,0v12"
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

const FolderSimpleLock = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderSimpleLock.displayName = "FolderSimpleLock";

export default FolderSimpleLock;
