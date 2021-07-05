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
      d="M180,40h28a8,8,0,0,1,8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M180,216h28a8,8,0,0,0,8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M76,216H48a8,8,0,0,1-8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M76,40H48a8,8,0,0,0-8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="112"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M79.998,167.99792a60.00877,60.00877,0,0,1,96.004-.00225"
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
    <circle cx="128" cy="112" r="32" opacity="0.2" />
    <path
      d="M180,40h28a8,8,0,0,1,8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M180,216h28a8,8,0,0,0,8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,216H48a8,8,0,0,1-8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,40H48a8,8,0,0,0-8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="112"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M74.92057,175.99964a60.02261,60.02261,0,0,1,106.15892.00009"
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
    <path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16.01833,16.01833,0,0,1,224,48Zm-8,124a8.00008,8.00008,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16.01833,16.01833,0,0,0,16-16V180A8.00008,8.00008,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16.01833,16.01833,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8.00008,8.00008,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16.01833,16.01833,0,0,0,32,48V76A8.00008,8.00008,0,0,0,40,84Zm61.06079,57.54077a67.94605,67.94605,0,0,0-33.21313,30.72095A7.99956,7.99956,0,0,0,74.92041,184H181.07959a7.99956,7.99956,0,0,0,7.07275-11.73828,67.94605,67.94605,0,0,0-33.21313-30.72095,40,40,0,1,0-53.87842,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M180,40h28a8,8,0,0,1,8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M180,216h28a8,8,0,0,0,8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M76,216H48a8,8,0,0,1-8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M76,40H48a8,8,0,0,0-8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="128"
      cy="112"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M74.92057,175.99964a60.02261,60.02261,0,0,1,106.15892.00009"
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
      d="M180,40h28a8,8,0,0,1,8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M180,216h28a8,8,0,0,0,8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M76,216H48a8,8,0,0,1-8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M76,40H48a8,8,0,0,0-8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="128"
      cy="112"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M74.92057,175.99964a60.02261,60.02261,0,0,1,106.15892.00009"
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
      d="M180,40h28a8,8,0,0,1,8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M180,216h28a8,8,0,0,0,8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,216H48a8,8,0,0,1-8-8V179.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,40H48a8,8,0,0,0-8,8V75.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="112"
      r="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M74.92057,175.99964a60.02261,60.02261,0,0,1,106.15892.00009"
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

const UserFocus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserFocus.displayName = "UserFocus";

export default UserFocus;
