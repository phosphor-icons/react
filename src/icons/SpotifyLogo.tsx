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
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M179.1333,116.32931a112.19069,112.19069,0,0,0-102.3584.04859"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M158.73682,155.34884a67.9512,67.9512,0,0,0-61.56592.04737"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
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
    <path d="M128,24A104,104,0,1,0,232,128,104.1179,104.1179,0,0,0,128,24Zm28.624,144.65722a8.00058,8.00058,0,0,1-10.73633,3.56641,39.98258,39.98258,0,0,0-35.85156.04,7.99966,7.99966,0,1,1-7.20117-14.28711,55.97479,55.97479,0,0,1,50.22217-.05566A7.99977,7.99977,0,0,1,156.624,168.65719Zm14.79737-28.30664a8.00153,8.00153,0,0,1-10.76221,3.49024,71.9412,71.9412,0,0,0-65.40234.042,7.99976,7.99976,0,1,1-7.29-14.24219,87.94,87.94,0,0,1,79.96484-.05176A7.9994,7.9994,0,0,1,171.42139,140.35055Zm14.82666-28.36426a8.00037,8.00037,0,0,1-10.77246,3.458,104.1903,104.1903,0,0,0-95.03614.04492,8,8,0,1,1-7.3291-14.22265,120.19311,120.19311,0,0,1,109.68066-.05274A7.99973,7.99973,0,0,1,186.24805,111.98629Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <g>
      <path
        d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </g>
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <g>
      <path
        d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <g>
      <path
        d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SpotifyLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SpotifyLogo.displayName = "SpotifyLogo";

export default SpotifyLogo;
