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
      d="M171.8,144A44.1,44.1,0,0,1,136,183.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
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
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
      opacity="0.2"
    />
    <path
      d="M179.4,148A52.2,52.2,0,0,1,136,191.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
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
    <path d="M197.1,66.6c-13-20.8-29.9-38.7-44.6-53.4a8,8,0,0,0-7-2.2,7.9,7.9,0,0,0-5.9,4.4L108.7,80.2,76.5,58.7a8.1,8.1,0,0,0-6-1.2,8,8,0,0,0-5.1,3.4C45.9,90.3,36,116.9,36,140a92,92,0,0,0,184,0C220,115.1,212.5,91.1,197.1,66.6Zm-9.8,82.6a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M179.4,148A52.2,52.2,0,0,1,136,191.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
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
      d="M179.4,148A52.2,52.2,0,0,1,136,191.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
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
      d="M179.4,148A52.2,52.2,0,0,1,136,191.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,65.4C56.6,88.6,44,115.2,44,140a84,84,0,0,0,168,0c0-52-36-92-65.2-121.1h0L112,92,72,65.4Z"
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

const Fire = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Fire.displayName = "Fire";

export default Fire;
