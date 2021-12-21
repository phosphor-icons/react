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
      cx="188"
      cy="32"
      r="12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M161,172a71.9,71.9,0,0,1-66,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="128 72 136 24 176.1 30.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="88" cy="128" r="20" />
    <circle cx="168" cy="128" r="20" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M240,104a24,24,0,0,0-43.4-14.1h0C178.3,78.7,154.3,72,128,72S77.7,78.7,59.4,89.9h0a24,24,0,1,0-31.6,34.8h0A50.7,50.7,0,0,0,24,144c0,39.8,46.6,72,104,72s104-32.2,104-72a50.7,50.7,0,0,0-3.8-19.3h0A24,24,0,0,0,240,104Z"
      opacity="0.2"
    />
    <circle
      cx="188"
      cy="32"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161,176a71.9,71.9,0,0,1-66,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128 72 136 24 172.2 29.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="88" cy="132" r="16" />
    <circle cx="168" cy="132" r="16" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M248,104a32,32,0,0,0-52.9-24.2c-16.8-8.9-36.8-14.3-57.7-15.5l5.2-31.2,21.8,3.4a24.2,24.2,0,1,0,2.5-15.8l-29.7-4.6a8,8,0,0,0-9.1,6.6l-6.9,41.5c-21.8.9-42.8,6.3-60.3,15.6a32,32,0,0,0-42.6,47.7A61.4,61.4,0,0,0,16,144c0,21.9,12,42.4,33.9,57.5S98.6,224,128,224s57.1-8,78.1-22.5S240,165.9,240,144a60.1,60.1,0,0,0-2.3-16.4A32.4,32.4,0,0,0,248,104ZM72,132a16,16,0,1,1,16,16A16,16,0,0,1,72,132Zm92.7,51.1a80.1,80.1,0,0,1-73.4,0,8,8,0,0,1,7.3-14.2,64.2,64.2,0,0,0,58.8,0,8,8,0,0,1,7.3,14.2ZM168,148a16,16,0,1,1,16-16A16,16,0,0,1,168,148Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="188"
      cy="32"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M161,176a71.9,71.9,0,0,1-66,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="128 72 136 24 172.2 29.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="88" cy="132" r="14" />
    <circle cx="168" cy="132" r="14" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="188"
      cy="32"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M161,176a71.9,71.9,0,0,1-66,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="128 72 136 24 172.2 29.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="88" cy="132" r="12" />
    <circle cx="168" cy="132" r="12" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="188"
      cy="32"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M161,176a71.9,71.9,0,0,1-66,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128 72 136 24 172.2 29.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.4,89.9C77.7,78.7,101.7,72,128,72s50.3,6.7,68.6,17.9h0a24,24,0,1,1,31.6,34.8h0A50.7,50.7,0,0,1,232,144c0,39.8-46.6,72-104,72S24,183.8,24,144a50.7,50.7,0,0,1,3.8-19.3h0A24,24,0,1,1,59.4,89.9Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="88" cy="132" r="16" />
    <circle cx="168" cy="132" r="16" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const RedditLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

RedditLogo.displayName = "RedditLogo";

export default RedditLogo;
