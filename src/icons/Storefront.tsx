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
      d="M48,139.58816V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.58972"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M54.03441,40H201.96559a8,8,0,0,1,7.69219,5.80223L224,96H32L46.34222,45.80223A8,8,0,0,1,54.03441,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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
    <path d="M96,96v16a32,32,0,0,1-64,0V96" opacity="0.2" />
    <path d="M224,96v16a32,32,0,0,1-64,0V96" opacity="0.2" />
    <path
      d="M48,139.58816V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.58972"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54.03441,40H201.96559a8,8,0,0,1,7.69219,5.80223L224,96H32L46.34222,45.80223A8,8,0,0,1,54.03441,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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
    <path d="M231.98975,95.79919c-.00293-.11914-.00953-.23779-.01807-.35705-.0127-.1836-.03149-.36475-.0564-.5448-.0144-.10315-.02881-.20581-.04712-.30872-.03784-.21142-.08545-.41894-.13964-.62426-.01416-.05372-.02076-.10853-.03614-.16211L217.35059,43.604A16.06985,16.06985,0,0,0,201.96582,32H54.03418A16.06971,16.06971,0,0,0,38.64941,43.60449L24.30762,93.80225c-.01538.05358-.022.10839-.03614.16211-.05419.20532-.1018.41284-.13964.62426-.01831.10291-.03272.20557-.04712.30872-.02491.18-.0437.3612-.0564.5448-.00854.11926-.01514.23791-.01807.35705C24.00854,95.86658,24,95.93213,24,96v16a39.96242,39.96242,0,0,0,16,31.978V208a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V143.978A39.96242,39.96242,0,0,0,232,112V96C232,95.93213,231.99146,95.86658,231.98975,95.79919ZM40,104H88v8a23.98436,23.98436,0,0,1-35.12427,21.256,7.98438,7.98438,0,0,0-1.813-1.05774A23.99623,23.99623,0,0,1,40,112Zm112,8a24,24,0,0,1-48,0v-8h48Zm52.93213,20.20166a7.97469,7.97469,0,0,0-1.80176,1.05115A23.98441,23.98441,0,0,1,168,112v-8h48v8A23.99664,23.99664,0,0,1,204.93213,132.20166Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M48,139.58816V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.58972"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M54.03441,40H201.96559a8,8,0,0,1,7.69219,5.80223L224,96H32L46.34222,45.80223A8,8,0,0,1,54.03441,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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
      d="M48,139.58816V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.58972"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M54.03441,40H201.96559a8,8,0,0,1,7.69219,5.80223L224,96H32L46.34222,45.80223A8,8,0,0,1,54.03441,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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
      d="M48,139.58816V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.58972"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54.03441,40H201.96559a8,8,0,0,1,7.69219,5.80223L224,96H32L46.34222,45.80223A8,8,0,0,1,54.03441,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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

const Storefront = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Storefront.displayName = "Storefront";

export default Storefront;
