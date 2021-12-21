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
    <polyline
      points="140 192 76 56 12 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="121.2"
      y1="152"
      x2="30.8"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <ellipse
      cx="204"
      cy="167"
      rx="32"
      ry="27"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M184,109a35.1,35.1,0,0,1,20-6.1c17.7,0,32,12.5,32,28V192"
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
    <polyline
      points="152 192 80 56 8 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="208"
      cy="166.9"
      rx="32"
      ry="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,112.4a34.1,34.1,0,0,1,24-9.5c17.7,0,32,12.5,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.8"
      y1="152"
      x2="29.2"
      y2="152"
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
    <path d="M137.9,148.2h0L87.1,52.3a8,8,0,0,0-14.2,0L22.1,148.2h0L.9,188.3a8.1,8.1,0,0,0,3.4,10.8,8.1,8.1,0,0,0,10.8-3.4L34,160h92l18.9,35.7A7.9,7.9,0,0,0,152,200a8,8,0,0,0,7.1-11.7ZM42.5,144,80,73.1,117.5,144ZM208,94.9a42,42,0,0,0-29.6,11.8,8,8,0,1,0,11.2,11.4,26,26,0,0,1,18.4-7.2c13.2,0,24,9,24,20v7.2a43,43,0,0,0-24-7.2c-22.1,0-40,16.1-40,36s17.9,36,40,36a42.9,42.9,0,0,0,24.7-7.7A7.9,7.9,0,0,0,240,200a8,8,0,0,0,8-8V130.9C248,111,230.1,94.9,208,94.9Zm0,92c-13.2,0-24-9-24-20s10.8-20,24-20,24,9,24,20S221.2,186.9,208,186.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="152 192 80 56 8 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <ellipse
      cx="208"
      cy="166.9"
      rx="32"
      ry="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,112.4a34.1,34.1,0,0,1,24-9.5c17.7,0,32,12.5,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="130.8"
      y1="152"
      x2="29.2"
      y2="152"
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
    <polyline
      points="152 192 80 56 8 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <ellipse
      cx="208"
      cy="166.9"
      rx="32"
      ry="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,112.4a34.1,34.1,0,0,1,24-9.5c17.7,0,32,12.5,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="130.8"
      y1="152"
      x2="29.2"
      y2="152"
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
    <polyline
      points="152 192 80 56 8 192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="208"
      cy="166.9"
      rx="32"
      ry="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,112.4a34.1,34.1,0,0,1,24-9.5c17.7,0,32,12.5,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.8"
      y1="152"
      x2="29.2"
      y2="152"
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

const TextAa = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextAa.displayName = "TextAa";

export default TextAa;
