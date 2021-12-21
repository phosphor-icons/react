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
    <polygon
      points="12 96 128 32 244 96 128 160 12 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="186 240 186 128 128 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M224,107v58.2a7.8,7.8,0,0,1-1.9,5.1c-7.7,9.1-39,41.7-94.1,41.7s-86.4-32.6-94.1-41.7a7.8,7.8,0,0,1-1.9-5.1V107"
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
      d="M36,110.9v54.6a7.8,7.8,0,0,0,1.6,4.7c6.7,9,35.1,41.8,90.4,41.8s83.7-32.8,90.4-41.8a7.8,7.8,0,0,0,1.6-4.7V110.9L128,160Z"
      opacity="0.2"
    />
    <polygon
      points="8 96 128 32 248 96 128 160 8 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="188 240 188 128 128 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,110.9v54.6a7.8,7.8,0,0,1-1.6,4.7c-6.7,9-35.1,41.8-90.4,41.8s-83.7-32.8-90.4-41.8a7.8,7.8,0,0,1-1.6-4.7V110.9"
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
    <path d="M180,209.6a119.4,119.4,0,0,0,16-8.5V240a8,8,0,0,1-16,0ZM120.9,92.2a8.2,8.2,0,0,0,3.3,10.9L171,128l17-9.1-56.2-30A8.2,8.2,0,0,0,120.9,92.2Zm130.9-3.3-120-64a8.5,8.5,0,0,0-7.6,0l-120,64a8.1,8.1,0,0,0,0,14.2L28,115.7v49.8a15.5,15.5,0,0,0,3.2,9.5c7.9,10.6,38.3,45,96.8,45a128.7,128.7,0,0,0,52-10.5V132.8l-9-4.8-43,22.9-88.2-47h0L25,96,128,41.1,231,96l-14.8,7.9h0l-28.2,15,3.8,2a8.4,8.4,0,0,1,3.2,3.3,7.5,7.5,0,0,1,1,3.8v73.1A111.8,111.8,0,0,0,224.8,175a15.5,15.5,0,0,0,3.2-9.5V115.7l23.8-12.6a8.1,8.1,0,0,0,0-14.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polygon
      points="8 96 128 32 248 96 128 160 8 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="188 240 188 128 128 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M220,110.9v54.6a7.8,7.8,0,0,1-1.6,4.7c-6.7,9-35.1,41.8-90.4,41.8s-83.7-32.8-90.4-41.8a7.8,7.8,0,0,1-1.6-4.7V110.9"
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
    <polygon
      points="8 96 128 32 248 96 128 160 8 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="188 240 188 128 128 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M220,110.9v54.6a7.8,7.8,0,0,1-1.6,4.7c-6.7,9-35.1,41.8-90.4,41.8s-83.7-32.8-90.4-41.8a7.8,7.8,0,0,1-1.6-4.7V110.9"
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
    <polygon
      points="8 96 128 32 248 96 128 160 8 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="188 240 188 128 128 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,110.9v54.6a7.8,7.8,0,0,1-1.6,4.7c-6.7,9-35.1,41.8-90.4,41.8s-83.7-32.8-90.4-41.8a7.8,7.8,0,0,1-1.6-4.7V110.9"
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

const GraduationCap = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GraduationCap.displayName = "GraduationCap";

export default GraduationCap;
