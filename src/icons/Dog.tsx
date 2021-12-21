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
      y1="192"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="92" cy="136" r="16" />
    <circle cx="164" cy="136" r="16" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="104"
      y1="48"
      x2="152"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3L104,48h48Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="140" r="12" />
    <circle cx="164" cy="140" r="12" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="48"
      x2="152"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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
    <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68.7,16a16.1,16.1,0,0,1-6.7,1.4,15.6,15.6,0,0,1-10-3.6V184a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V141.8a15.6,15.6,0,0,1-10,3.6,16.1,16.1,0,0,1-6.7-1.4,15.8,15.8,0,0,1-9.1-17.6L30.6,38.9A16.1,16.1,0,0,1,50.2,26.3L105,40h46l54.8-13.7a16.1,16.1,0,0,1,19.6,12.6l16.4,87.5A15.8,15.8,0,0,1,232.7,144ZM200,184V122L148.1,56H107.9L56,122v62a24.1,24.1,0,0,0,24,24h40V195.3l-13.7-13.6a8.1,8.1,0,0,1,11.4-11.4L128,180.7l10.3-10.4a8.1,8.1,0,0,1,11.4,11.4L136,195.3V208h40A24.1,24.1,0,0,0,200,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="140" r="10" />
    <circle cx="164" cy="140" r="10" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="48"
      x2="152"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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
      y1="192"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="140" r="8" />
    <circle cx="164" cy="140" r="8" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="48"
      x2="152"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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
      y1="192"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="140" r="12" />
    <circle cx="164" cy="140" r="12" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="48"
      x2="152"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3"
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

const Dog = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Dog.displayName = "Dog";

export default Dog;
