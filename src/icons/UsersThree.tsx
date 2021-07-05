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
      cy="140"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M70.4343,215.9991a64.02584,64.02584,0,0,1,115.13125-.00031"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M204.50925,116.59876a59.962,59.962,0,0,1,39.49189,23.39691"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M167.10717,70.22754a32.00487,32.00487,0,1,1,36.89009,44.765"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M52.00271,114.99256a32.00461,32.00461,0,1,1,36.88964-44.766"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M11.99717,139.99792A59.96206,59.96206,0,0,1,51.4908,116.59875"
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
    <circle cx="128" cy="140" r="40" opacity="0.2" />
    <circle cx="60" cy="84" r="32" opacity="0.2" />
    <circle cx="196" cy="84" r="32" opacity="0.2" />
    <circle
      cx="128"
      cy="140"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M196,116a59.909,59.909,0,0,1,48.00114,23.99567"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M11.99717,139.99792A59.909,59.909,0,0,1,60,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M70.4343,215.9991a64.02584,64.02584,0,0,1,115.13125-.00031"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M60,116A32,32,0,1,1,91.437,77.99243"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.56291,77.993A32.0027,32.0027,0,1,1,196,116"
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
    <path d="M63.99805,140.002a7.99955,7.99955,0,0,1-8,8h-.00049l-44.00147-.0039a8,8,0,0,1-6.3955-12.80469A67.81463,67.81463,0,0,1,33.02783,113.5127,39.99241,39.99241,0,1,1,99.29492,76.50293a7.99971,7.99971,0,0,1-3.78515,8.37695,64.36027,64.36027,0,0,0-27.85889,33.7959A63.645,63.645,0,0,0,63.99805,140.002Zm186.39941-4.81054a67.81009,67.81009,0,0,0-27.42676-21.68067A39.99246,39.99246,0,1,0,156.70361,76.5a8.00092,8.00092,0,0,0,3.78467,8.37695,64.367,64.367,0,0,1,27.85938,33.79688A63.64448,63.64448,0,0,1,192,140a8.00039,8.00039,0,0,0,8.001,8l44.001-.00391a8,8,0,0,0,6.39551-12.80468ZM157.16162,178.0896a48,48,0,1,0-58.32324,0,71.66776,71.66776,0,0,0-35.59522,34.40454A7.9997,7.9997,0,0,0,70.43457,223.999H185.56543a8.00017,8.00017,0,0,0,7.19141-11.50488A71.66776,71.66776,0,0,0,157.16162,178.0896Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="140"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M196,116a59.909,59.909,0,0,1,48.00114,23.99567"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M11.99717,139.99792A59.909,59.909,0,0,1,60,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M70.4343,215.9991a64.02584,64.02584,0,0,1,115.13125-.00031"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M60,116A32,32,0,1,1,91.437,77.99243"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M164.56291,77.993A32.0027,32.0027,0,1,1,196,116"
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
      cy="140"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M196,116a59.909,59.909,0,0,1,48.00114,23.99567"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M11.99717,139.99792A59.909,59.909,0,0,1,60,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M70.4343,215.9991a64.02584,64.02584,0,0,1,115.13125-.00031"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M60,116A32,32,0,1,1,91.437,77.99243"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M164.56291,77.993A32.0027,32.0027,0,1,1,196,116"
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
      cy="140"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M196,116a59.909,59.909,0,0,1,48.00114,23.99567"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M11.99717,139.99792A59.909,59.909,0,0,1,60,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M70.4343,215.9991a64.02584,64.02584,0,0,1,115.13125-.00031"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M60,116A32,32,0,1,1,91.437,77.99243"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.56291,77.993A32.0027,32.0027,0,1,1,196,116"
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

const UsersThree = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UsersThree.displayName = "UsersThree";

export default UsersThree;
