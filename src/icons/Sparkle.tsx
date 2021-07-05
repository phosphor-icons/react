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
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="16"
      x2="176"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="40"
      x2="152"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="224"
      y1="72"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="240"
      y1="88"
      x2="208"
      y2="88"
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
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      opacity="0.2"
    />
    <path
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="16"
      x2="176"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="152"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="72"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240"
      y1="88"
      x2="208"
      y2="88"
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
    <path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="16"
      x2="176"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="200"
      y1="40"
      x2="152"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="224"
      y1="72"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="240"
      y1="88"
      x2="208"
      y2="88"
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
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="16"
      x2="176"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="200"
      y1="40"
      x2="152"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="224"
      y1="72"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="240"
      y1="88"
      x2="208"
      y2="88"
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
      d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="16"
      x2="176"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="152"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="72"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240"
      y1="88"
      x2="208"
      y2="88"
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

const Sparkle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Sparkle.displayName = "Sparkle";

export default Sparkle;
