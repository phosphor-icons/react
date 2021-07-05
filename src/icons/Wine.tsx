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
      x1="128"
      y1="176"
      x2="128"
      y2="232"
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
      d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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
      d="M200.402,106.66714l1.65622,5.61085a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835l3.54259-12.00146h0C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
      d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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
    <path d="M209.73047,110.01318,183.67285,21.73535A7.99985,7.99985,0,0,0,176,16H80a7.99985,7.99985,0,0,0-7.67285,5.73535L46.26953,110.01367A31.984,31.984,0,0,0,47.791,132.24951,88.23263,88.23263,0,0,0,120,183.62012V224H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.62012a88.2322,88.2322,0,0,0,72.209-51.3711A31.98167,31.98167,0,0,0,209.73047,110.01318ZM131.57764,96.84473C105.398,83.75488,84.38428,83.76318,69.66943,87.25586L85.97949,32h84.041l20.8125,70.5083C180.05664,107.001,159.75586,110.93359,131.57764,96.84473Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
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
      strokeWidth="12"
    />
    <path
      d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
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
      strokeWidth="8"
    />
    <path
      d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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
      x1="128"
      y1="176"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
      d="M80,24h96l26.05817,88.278a23.979,23.979,0,0,1-1.1376,16.67254,80.03345,80.03345,0,0,1-145.841.00041A23.979,23.979,0,0,1,53.942,112.27835Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.48453,100.27689C68.083,94.644,92.7349,86.36745,128,104c37.55571,18.77785,63.07475,8.17173,72.402,2.66713"
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

const Wine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wine.displayName = "Wine";

export default Wine;
