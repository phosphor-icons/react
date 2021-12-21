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
      d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32"
      y1="128"
      x2="224"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="224"
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
      d="M60.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a95.5,95.5,0,0,1,28,67.7,95.8,95.8,0,0,1-28,67.8Z"
      opacity="0.2"
    />
    <path
      d="M196.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a96,96,0,0,1,0,135.5Z"
      opacity="0.2"
    />
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
      d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="128"
      x2="224"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="224"
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
    <path d="M63.6,46.4a104.3,104.3,0,0,1,52-21.7,4,4,0,0,1,4.4,4V120H95.7A104.1,104.1,0,0,0,63.4,52.4,3.9,3.9,0,0,1,63.6,46.4ZM46,64.1a104.8,104.8,0,0,0-21.3,51.4,4.1,4.1,0,0,0,4,4.5H79.6A88,88,0,0,0,51.9,63.6,4,4,0,0,0,46,64.1ZM192.4,46.4a104.3,104.3,0,0,0-52-21.7,4,4,0,0,0-4.4,4V120h24.3a104.1,104.1,0,0,1,32.3-67.6A3.9,3.9,0,0,0,192.4,46.4Zm38.9,69.1A104.8,104.8,0,0,0,210,64.1a4,4,0,0,0-5.9-.5A88,88,0,0,0,176.4,120h50.9A4.1,4.1,0,0,0,231.3,115.5Zm-206.6,25A104.8,104.8,0,0,0,46,191.9a4,4,0,0,0,5.9.5A88,88,0,0,0,79.6,136H28.7A4.1,4.1,0,0,0,24.7,140.5ZM210,191.9a104.8,104.8,0,0,0,21.3-51.4,4.1,4.1,0,0,0-4-4.5H176.4a88,88,0,0,0,27.7,56.4A4,4,0,0,0,210,191.9ZM63.6,209.6a104.3,104.3,0,0,0,52,21.7,4,4,0,0,0,4.4-4V136H95.7a104.1,104.1,0,0,1-32.3,67.6A3.9,3.9,0,0,0,63.6,209.6ZM160.3,136H136v91.3a4,4,0,0,0,4.4,4,104.3,104.3,0,0,0,52-21.7,3.9,3.9,0,0,0,.2-6A104.1,104.1,0,0,1,160.3,136Z" />
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
    <path
      d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="128"
      x2="224"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="224"
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
    <path
      d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="128"
      x2="224"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="224"
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
      d="M60,60.2A95.9,95.9,0,0,1,88,128a95.9,95.9,0,0,1-28,67.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M196,60.2a96.1,96.1,0,0,0,0,135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="128"
      x2="224"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="224"
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

const Basketball = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Basketball.displayName = "Basketball";

export default Basketball;
