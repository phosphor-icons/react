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
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M72,99.9a15.8,15.8,0,0,0,12.4,15.5A191.4,191.4,0,0,0,128,120a191.4,191.4,0,0,0,43.6-4.6A15.8,15.8,0,0,0,184,99.9V96a56,56,0,0,0-56.7-56C96.5,40.4,72,66.1,72,96.8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="170.2"
      y1="197"
      x2="172.7"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="85.8"
      y1="197"
      x2="83.3"
      y2="212.3"
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
      d="M177,68.8h0A56.7,56.7,0,0,1,184,96v3.9a15.8,15.8,0,0,1-12.4,15.5A191.4,191.4,0,0,1,128,120a191.4,191.4,0,0,1-43.6-4.6A15.8,15.8,0,0,1,72,99.9V96.8a56.8,56.8,0,0,1,7.4-28h0C41.9,76.5,16,93,16,112c0,26.5,50.1,48,112,48s112-21.5,112-48C240,93,214.3,76.6,177,68.8Z"
      opacity="0.2"
    />
    <line
      x1="168.8"
      y1="188.7"
      x2="172.7"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="87.2"
      y1="188.7"
      x2="83.3"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,99.9a15.8,15.8,0,0,0,12.4,15.5A191.4,191.4,0,0,0,128,120a191.4,191.4,0,0,0,43.6-4.6A15.8,15.8,0,0,0,184,99.9V96a56,56,0,0,0-56.7-56C96.5,40.4,72,66.1,72,96.8Z"
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
    <path d="M180.6,211a8.1,8.1,0,0,1-6.6,9.2h-1.3a8.1,8.1,0,0,1-7.9-6.7l-3.9-23.5a8,8,0,0,1,15.8-2.7ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184Zm-39.5-3.1a7.9,7.9,0,0,0-9.2,6.5L75.4,211a8.1,8.1,0,0,0,6.6,9.2h1.3a8.1,8.1,0,0,0,7.9-6.7l3.9-23.5A8,8,0,0,0,88.5,180.9ZM248,112c0,16.2-13.4,30.9-37.7,41.3C188.2,162.8,159,168,128,168s-60.2-5.2-82.3-14.7C21.4,142.9,8,128.2,8,112c0-8.4,3.7-20.8,21.2-32.5,11.3-7.6,26.9-13.8,45.2-17.9A63.6,63.6,0,0,1,173,50.5a64.7,64.7,0,0,1,9.1,11.2C223.4,71.1,248,89.7,248,112ZM80,96.8v3.1a7.8,7.8,0,0,0,6.1,7.7A189.1,189.1,0,0,0,128,112a189.1,189.1,0,0,0,41.9-4.4,7.8,7.8,0,0,0,6.1-7.7V96a47.5,47.5,0,0,0-6.1-23.4h0a51.7,51.7,0,0,0-8.2-10.7A47.4,47.4,0,0,0,127.4,48C101.2,48.3,80,70.2,80,96.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="168.8"
      y1="188.7"
      x2="172.7"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="87.2"
      y1="188.7"
      x2="83.3"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,99.9a15.8,15.8,0,0,0,12.4,15.5A191.4,191.4,0,0,0,128,120a191.4,191.4,0,0,0,43.6-4.6A15.8,15.8,0,0,0,184,99.9V96a56,56,0,0,0-56.7-56C96.5,40.4,72,66.1,72,96.8Z"
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
      x1="168.8"
      y1="188.7"
      x2="172.7"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="87.2"
      y1="188.7"
      x2="83.3"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,99.9a15.8,15.8,0,0,0,12.4,15.5A191.4,191.4,0,0,0,128,120a191.4,191.4,0,0,0,43.6-4.6A15.8,15.8,0,0,0,184,99.9V96a56,56,0,0,0-56.7-56C96.5,40.4,72,66.1,72,96.8Z"
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
      x1="168.8"
      y1="188.7"
      x2="172.7"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="87.2"
      y1="188.7"
      x2="83.3"
      y2="212.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M177,68.8c37.3,7.8,63,24.2,63,43.2,0,26.5-50.1,48-112,48S16,138.5,16,112c0-19,25.9-35.5,63.4-43.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,99.9a15.8,15.8,0,0,0,12.4,15.5A191.4,191.4,0,0,0,128,120a191.4,191.4,0,0,0,43.6-4.6A15.8,15.8,0,0,0,184,99.9V96a56,56,0,0,0-56.7-56C96.5,40.4,72,66.1,72,96.8Z"
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

const FlyingSaucer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FlyingSaucer.displayName = "FlyingSaucer";

export default FlyingSaucer;
