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
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="128 96 128 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,68.12774l6.95849-45.34129A8,8,0,0,1,102.86591,16h50.26817a8,8,0,0,1,7.90743,6.78646L168,68.128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,187.87226l6.95849,45.34129A8,8,0,0,0,102.86591,240h50.26817a8,8,0,0,0,7.90743-6.78646L168,187.872"
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
    <circle cx="128" cy="128" r="72" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="72"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <polyline
      points="128 88 128 128 168 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,68.12774l6.80838-37.55481A8,8,0,0,1,102.68007,24h50.63985a8,8,0,0,1,7.87169,6.57294L168,68.128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,187.87226l6.80838,37.55481A8,8,0,0,0,102.68007,232h50.63985a8,8,0,0,0,7.87169-6.57294L168,187.872"
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
    <path d="M175.29687,63.53107l-6.23339-34.38556A15.99062,15.99062,0,0,0,153.31982,16H102.68018A15.99062,15.99062,0,0,0,86.93652,29.14551l-6.2334,34.38556a79.89661,79.89661,0,0,0,0,128.93786l6.2334,34.38556A15.99062,15.99062,0,0,0,102.68018,240h50.63964a15.99062,15.99062,0,0,0,15.74366-13.14551l6.23339-34.38556a79.8966,79.8966,0,0,0,0-128.93786ZM102.68018,32h50.64013l3.90723,21.55316a79.69216,79.69216,0,0,0-58.45508,0Zm50.63964,192H102.67969l-3.90723-21.55316a79.69216,79.69216,0,0,0,58.45508,0ZM168,136H128a8.00008,8.00008,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="128 88 128 128 168 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,68.12774l6.80838-37.55481A8,8,0,0,1,102.68007,24h50.63985a8,8,0,0,1,7.87169,6.57294L168,68.128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88,187.87226l6.80838,37.55481A8,8,0,0,0,102.68007,232h50.63985a8,8,0,0,0,7.87169-6.57294L168,187.872"
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
      r="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="128 88 128 128 168 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,68.12774l6.80838-37.55481A8,8,0,0,1,102.68007,24h50.63985a8,8,0,0,1,7.87169,6.57294L168,68.128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88,187.87226l6.80838,37.55481A8,8,0,0,0,102.68007,232h50.63985a8,8,0,0,0,7.87169-6.57294L168,187.872"
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
      r="72"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <polyline
      points="128 88 128 128 168 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,68.12774l6.80838-37.55481A8,8,0,0,1,102.68007,24h50.63985a8,8,0,0,1,7.87169,6.57294L168,68.128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,187.87226l6.80838,37.55481A8,8,0,0,0,102.68007,232h50.63985a8,8,0,0,0,7.87169-6.57294L168,187.872"
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

const Watch = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Watch.displayName = "Watch";

export default Watch;
