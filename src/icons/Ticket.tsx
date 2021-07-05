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
      x1="96"
      y1="56"
      x2="96"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
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
      d="M96,56H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H96Z"
      opacity="0.2"
    />
    <line
      x1="96"
      y1="56"
      x2="96"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
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
    <path d="M227.19141,104.48A16.04032,16.04032,0,0,0,240,88.80957V64a16.01833,16.01833,0,0,0-16-16H32A16.01833,16.01833,0,0,0,16,64V88.80957A16.04032,16.04032,0,0,0,28.80859,104.48a24.00818,24.00818,0,0,1,0,47.04A16.04032,16.04032,0,0,0,16,167.19043V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V167.19043A16.04032,16.04032,0,0,0,227.19141,151.52a24.00818,24.00818,0,0,1,0-47.04ZM32,167.19824a40.00306,40.00306,0,0,0,0-78.38867V64H88V192H32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="96"
      y1="56"
      x2="96"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
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
      x1="96"
      y1="56"
      x2="96"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
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
      x1="96"
      y1="56"
      x2="96"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
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

const Ticket = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Ticket.displayName = "Ticket";

export default Ticket;
