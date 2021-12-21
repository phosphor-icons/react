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
      d="M32,72H83.9a7.8,7.8,0,0,1,6.5,3.4l75.2,105.2a7.8,7.8,0,0,0,6.5,3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,184H83.9a7.8,7.8,0,0,0,6.5-3.4l13-18.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152.6,93.6l13-18.2a7.8,7.8,0,0,1,6.5-3.4H232"
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
      d="M32,72H83.9a7.8,7.8,0,0,1,6.5,3.4l75.2,105.2a7.8,7.8,0,0,0,6.5,3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.7,100.5l17.9-25.1a7.8,7.8,0,0,1,6.5-3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184H83.9a7.8,7.8,0,0,0,6.5-3.4l17.9-25.1"
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
    <path d="M237.7,178.3a8.1,8.1,0,0,1,0,11.4l-24,24A8.3,8.3,0,0,1,208,216a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,200,208V192H172.1a16.1,16.1,0,0,1-13-6.7L83.9,80H32a8,8,0,0,1,0-16H83.9a16.1,16.1,0,0,1,13,6.7L172.1,176H200V160a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7ZM143,107a8,8,0,0,0,11.2-1.9L172.1,80H200V96a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l24-24a8.1,8.1,0,0,0,0-11.4l-24-24a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,200,48V64H172.1a16.1,16.1,0,0,0-13,6.7L141.2,95.8A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.2,1.9L83.9,176H32a8,8,0,0,0,0,16H83.9a16.1,16.1,0,0,0,13-6.7l17.9-25.1A8,8,0,0,0,113,149Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,72H83.9a7.8,7.8,0,0,1,6.5,3.4l75.2,105.2a7.8,7.8,0,0,0,6.5,3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M147.7,100.5l17.9-25.1a7.8,7.8,0,0,1,6.5-3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,184H83.9a7.8,7.8,0,0,0,6.5-3.4l17.9-25.1"
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
      d="M32,72H83.9a7.8,7.8,0,0,1,6.5,3.4l75.2,105.2a7.8,7.8,0,0,0,6.5,3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M147.7,100.5l17.9-25.1a7.8,7.8,0,0,1,6.5-3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,184H83.9a7.8,7.8,0,0,0,6.5-3.4l17.9-25.1"
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
      d="M32,72H83.9a7.8,7.8,0,0,1,6.5,3.4l75.2,105.2a7.8,7.8,0,0,0,6.5,3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 48 232 72 208 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 160 232 184 208 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M147.7,100.5l17.9-25.1a7.8,7.8,0,0,1,6.5-3.4H232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,184H83.9a7.8,7.8,0,0,0,6.5-3.4l17.9-25.1"
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

const ShuffleAngular = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShuffleAngular.displayName = "ShuffleAngular";

export default ShuffleAngular;
