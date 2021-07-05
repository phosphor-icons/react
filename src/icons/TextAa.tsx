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
      x1="121.17649"
      y1="152"
      x2="30.82348"
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
      d="M183.99592,109.04406A34.8085,34.8085,0,0,1,204,102.9c17.67311,0,32,12.536,32,28V192"
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
      d="M183.9948,112.38439A34.03967,34.03967,0,0,1,208,102.9c17.67311,0,32,12.536,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.82351"
      y1="152"
      x2="29.17645"
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
    <path d="M137.86572,148.20361l-.01416-.02685L87.07031,52.25684a8.00006,8.00006,0,0,0-14.14062,0L22.14844,148.17676l-.01416.02685L.92969,188.25684a8,8,0,0,0,14.14062,7.48632L33.99316,160h92.01368l18.92285,35.74316a8,8,0,0,0,14.14062-7.48632ZM42.46387,144,80,73.09766,117.53613,144ZM208,94.90039a42.22159,42.22159,0,0,0-29.63867,11.80469,7.9999,7.9999,0,1,0,11.26758,11.35937A26.12387,26.12387,0,0,1,208,110.90039c13.2334,0,24,8.97168,24,20v7.21973a42.75745,42.75745,0,0,0-24-7.21973c-22.05566,0-40,16.14941-40,36s17.94434,36,40,36a42.65985,42.65985,0,0,0,24.67236-7.6958A7.9985,7.9985,0,0,0,248,192V130.90039C248,111.0498,230.05566,94.90039,208,94.90039Zm0,92c-13.2334,0-24-8.97168-24-20s10.7666-20,24-20,24,8.97168,24,20S221.2334,186.90039,208,186.90039Z" />
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
      d="M183.9948,112.38439A34.03967,34.03967,0,0,1,208,102.9c17.67311,0,32,12.536,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="130.82351"
      y1="152"
      x2="29.17645"
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
      d="M183.9948,112.38439A34.03967,34.03967,0,0,1,208,102.9c17.67311,0,32,12.536,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="130.82351"
      y1="152"
      x2="29.17645"
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
      d="M183.9948,112.38439A34.03967,34.03967,0,0,1,208,102.9c17.67311,0,32,12.536,32,28V192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="130.82351"
      y1="152"
      x2="29.17645"
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
