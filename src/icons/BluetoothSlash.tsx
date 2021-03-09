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
      x1="55.99414"
      y1="176.00256"
      x2="119.99414"
      y2="128.00256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="176.648 181.512 119.994 224.003 119.994 119.194"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="119.994 59.729 119.994 32.003 183.994 80.003 156.899 100.324"
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
    <polygon
      points="119.971 32.003 183.971 80.003 119.971 128.003 119.971 32.003"
      opacity="0.2"
    />
    <polygon
      points="119.971 128 183.971 176 119.971 224 119.971 128"
      opacity="0.2"
    />
    <line
      x1="56"
      y1="176.00256"
      x2="120"
      y2="128.00256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48.00586"
      y1="40"
      x2="208.00586"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="120 71.622 120 32.003 184 80.003 150.476 105.146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.654 181.512 120 224.003 120 128.003 145.169 146.879"
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
      <path d="M213.91943,210.61865l-31.39087-34.53-.009-.01-31.35718-34.49292-.02148-.02343L53.91943,34.61865a7.99991,7.99991,0,1,0-11.83886,10.7627l70.8413,77.92553L51.19434,169.60254a7.9998,7.9998,0,1,0,9.5996,12.7998l51.2002-38.40014v80.00024a7.99975,7.99975,0,0,0,12.7998,6.3999l50.83033-38.12292,26.4563,29.10193a7.99991,7.99991,0,0,0,11.83886-10.7627Zm-85.92529-2.61621v-64l11.76013,8.82007,25.05945,27.56519Z" />
      <path d="M119.99414,79.62207a7.99977,7.99977,0,0,0,8-8V48.00244l42.6665,32L145.67041,98.74561a7.9998,7.9998,0,1,0,9.59961,12.7998l33.52392-25.14307a7.9995,7.9995,0,0,0,0-12.7998l-64-48a8,8,0,0,0-12.7998,6.3999V71.62207A7.99977,7.99977,0,0,0,119.99414,79.62207Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="55.99414"
      y1="176.00256"
      x2="119.99414"
      y2="128.00256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="119.994 71.622 119.994 32.003 183.994 80.003 150.47 105.146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="176.648 181.512 119.994 224.003 119.994 128.003 145.163 146.879"
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
      x1="55.99414"
      y1="176.00256"
      x2="119.99414"
      y2="128.00256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="119.994 71.622 119.994 32.003 183.994 80.003 150.47 105.146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="176.648 181.512 119.994 224.003 119.994 128.003 145.163 146.879"
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
      x1="55.99414"
      y1="176.00256"
      x2="119.99414"
      y2="128.00256"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="119.994 71.622 119.994 32.003 183.994 80.003 150.47 105.146"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="176.648 181.512 119.994 224.003 119.994 128.003 145.163 146.879"
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

const BluetoothSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BluetoothSlash.displayName = "BluetoothSlash";

export default BluetoothSlash;
