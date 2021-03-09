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
      d="M127.99991,24H128a40,40,0,0,1,40,40v56a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,120.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M208,120a80,80,0,0,1-160,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="232"
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
      d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
      opacity="0.2"
    />
    <path
      d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
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
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
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
    <g>
      <path d="M127.99414,175.99609a48.05083,48.05083,0,0,0,48-47.99218V63.99609a48,48,0,1,0-96,0v64A48.05249,48.05249,0,0,0,127.99414,175.99609Z" />
      <path d="M200.43164,128.05078a8.07828,8.07828,0,0,0-8.82812,7.07813,64.00856,64.00856,0,0,1-127.21875-.00782,8.09865,8.09865,0,0,0-8.82813-7.07031,8.01056,8.01056,0,0,0-7.07812,8.83594A79.60051,79.60051,0,0,0,119.99414,207.251v24.74511a8,8,0,1,0,16,0V207.252a79.577,79.577,0,0,0,71.51563-70.373A8.00321,8.00321,0,0,0,200.43164,128.05078Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
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
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
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
      d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
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
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
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
      d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z"
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
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011"
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

const Microphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Microphone.displayName = "Microphone";

export default Microphone;
