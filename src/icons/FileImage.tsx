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
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="148 32 148 92 208 92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M196,224h4a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
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
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      opacity="0.2"
    />
    <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
    <path
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
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
    <path d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v96a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,80V51.3L188.7,80Zm-1.3,139.6a8.3,8.3,0,0,1,.4,8.2A8,8,0,0,1,152,232H24a8,8,0,0,1-7-4.2,7.9,7.9,0,0,1,.3-8.1l32.6-50.8a12,12,0,0,1,20.2,0l6.4,10L94,152.6a12,12,0,0,1,20,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
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
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
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
      d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
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

const FileImage = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FileImage.displayName = "FileImage";

export default FileImage;
