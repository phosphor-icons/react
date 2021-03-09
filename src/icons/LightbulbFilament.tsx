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
      x1="128"
      y1="192"
      x2="128"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="96 112 128 144 160 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
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
      strokeWidth="24"
    />
    <path
      d="M79.96682,167.98091A79.87808,79.87808,0,0,1,48.00125,104.4514C47.76163,61.08915,82.72,25.04306,126.071,24.02272A80.00431,80.00431,0,0,1,175.845,168.122a19.791,19.791,0,0,0-7.84468,15.87805v.00023a8,8,0,0,1-8,7.99971H95.99967a8,8,0,0,1-8-7.99967v-.22676A19.80385,19.80385,0,0,0,79.96682,167.98091Z"
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
      d="M78.70372,167.0114a79.86047,79.86047,0,0,1-30.70247-62.55993C47.76163,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02423a8,8,0,0,1-8,7.99987H95.99986a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.70372,167.0114Z"
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
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="96 112 128 144 160 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M78.70372,167.0114a79.86047,79.86047,0,0,1-30.70247-62.55993C47.76163,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02423a8,8,0,0,1-8,7.99987H95.99986a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.70372,167.0114Z"
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
    <path d="M176,232a8.00008,8.00008,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,176,232Zm40-128a87.54352,87.54352,0,0,1-33.64209,69.208A16.2351,16.2351,0,0,0,176,185.97656V192a16.01833,16.01833,0,0,1-16,16H96a16.01833,16.01833,0,0,1-16-16v-6.03125a16.02005,16.02005,0,0,0-6.23-12.65918,87.57531,87.57531,0,0,1-33.76856-68.81445c-.26318-47.66211,38.2627-87.34961,85.88086-88.47071A88.0021,88.0021,0,0,1,216,104Zm-50.34326,2.34277a8.00182,8.00182,0,0,0-11.31348,0L128,132.68652l-26.34326-26.34375a8.00018,8.00018,0,0,0-11.31348,11.31446L120,147.314V184a8,8,0,0,0,16,0V147.314l29.65674-29.65673A8.00034,8.00034,0,0,0,165.65674,106.34277Z" />
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
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="96 112 128 144 160 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M78.70372,167.0114a79.86047,79.86047,0,0,1-30.70247-62.55993C47.76163,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02423a8,8,0,0,1-8,7.99987H95.99986a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.70372,167.0114Z"
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
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="96 112 128 144 160 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M78.70372,167.0114a79.86047,79.86047,0,0,1-30.70247-62.55993C47.76163,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02423a8,8,0,0,1-8,7.99987H95.99986a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.70372,167.0114Z"
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
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="96 112 128 144 160 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M78.70372,167.0114a79.86047,79.86047,0,0,1-30.70247-62.55993C47.76163,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02423a8,8,0,0,1-8,7.99987H95.99986a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.70372,167.0114Z"
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

const LightbulbFilament = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LightbulbFilament.displayName = "LightbulbFilament";

export default LightbulbFilament;
