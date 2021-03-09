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
      d="M224,177.32122V78.67878a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32122Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="177.022 152.511 177.022 100.511 80 47"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="222.897 74.627 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128.94915"
      y1="128"
      x2="128.01036"
      y2="234.82131"
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
      d="M33.10781,74.617A7.99475,7.99475,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5A7.99528,7.99528,0,0,0,128,234.82122l.01036.00009L128.94915,128,33.108,74.61714Z"
      opacity="0.2"
    />
    <path
      d="M224,177.32122V78.67878a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32122Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="177.022 152.511 177.022 100.511 80 47"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="222.897 74.627 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.94915"
      y1="128"
      x2="128.01036"
      y2="234.82131"
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
    <path d="M229.927,70.82178c-.02612-.04883-.04639-.09864-.07373-.147-.01172-.0205-.02612-.03906-.03809-.05957a15.98449,15.98449,0,0,0-5.97168-5.88183l-87.999-49.5a16.09525,16.09525,0,0,0-15.68848,0L32.155,64.73389A15.99355,15.99355,0,0,0,26.168,70.646c-.01539.02685-.03394.05127-.04908.07861-.02441.04346-.042.08887-.06543.13281a15.9818,15.9818,0,0,0-2.05371,7.82129v98.64258A16.02109,16.02109,0,0,0,32.156,191.2666l88.001,49.50049a15.97809,15.97809,0,0,0,7.23486,2.02148c.18189.01416.363.03077.54834.03272h.07227c.25195,0,.50049-.01465.74658-.0376a15.95877,15.95877,0,0,0,7.08447-2.01709l88-49.5a16.01817,16.01817,0,0,0,8.15625-13.94531V78.67871A15.98036,15.98036,0,0,0,229.927,70.82178ZM127.99975,29.17871l79.74366,44.856-30.62061,17.396L96.43969,46.93115Zm.91016,89.64258L48.37866,73.96582,80.03833,56.15723l80.76513,44.54492Zm7.21167,103.43164.78686-89.57373,32.11377-18.24463v38.07617a8,8,0,0,0,16,0v-47.166l30.97754-17.59864v89.5752Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M224,177.32122V78.67878a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32122Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="177.022 152.511 177.022 100.511 80 47"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="222.897 74.627 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128.94915"
      y1="128"
      x2="128.01036"
      y2="234.82131"
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
      d="M224,177.32122V78.67878a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32122Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="177.022 152.511 177.022 100.511 80 47"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="222.897 74.627 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128.94915"
      y1="128"
      x2="128.01036"
      y2="234.82131"
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
      d="M224,177.32122V78.67878a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67878v98.64244a8,8,0,0,0,4.07791,6.9726l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32122Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="177.022 152.511 177.022 100.511 80 47"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="222.897 74.627 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.94915"
      y1="128"
      x2="128.01036"
      y2="234.82131"
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

const Package = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Package.displayName = "Package";

export default Package;
