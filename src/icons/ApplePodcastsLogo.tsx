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
      cy="108"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M134.6,224H121.4a16,16,0,0,1-15.8-13.1l-10.2-56A16,16,0,0,1,111.2,136h33.6a16,16,0,0,1,15.8,18.9l-10.2,56A16,16,0,0,1,134.6,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M134.6,224H121.4a16,16,0,0,1-15.8-13.1l-10.2-56A16,16,0,0,1,111.2,136h33.6a16,16,0,0,1,15.8,18.9l-10.2,56A16,16,0,0,1,134.6,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M62.7,198.4a96,96,0,1,1,130.6,0"
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
    <circle cx="128" cy="120" r="24" opacity="0.2" />
    <path
      d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="120"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68.3,151.2a64,64,0,1,1,119.4,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76.4,208.9a96,96,0,1,1,103.2,0"
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
    <path d="M128,144a28,28,0,1,1,28-28A28.1,28.1,0,0,1,128,144Zm12.5,0h-25a19.9,19.9,0,0,0-15.4,7.3,19.6,19.6,0,0,0-4.2,16.6l9.6,48A20.1,20.1,0,0,0,125.1,232h5.8a20.1,20.1,0,0,0,19.6-16.1l9.6-48a19.6,19.6,0,0,0-4.2-16.6A19.9,19.9,0,0,0,140.5,144Zm39.7,4.3a8,8,0,0,0,14.9,5.8A70.7,70.7,0,0,0,200,128a72,72,0,0,0-144,0,70.3,70.3,0,0,0,4.9,26.1,8,8,0,0,0,7.4,5.1,7.2,7.2,0,0,0,2.9-.6,8,8,0,0,0,4.6-10.3,56,56,0,1,1,104.4,0ZM128,24A104,104,0,0,0,72,215.7a8,8,0,0,0,8.7-13.5,88,88,0,1,1,94.6,0,8,8,0,0,0,4.4,14.7,8.8,8.8,0,0,0,4.3-1.2A104,104,0,0,0,128,24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M68.3,151.2a64,64,0,1,1,119.4,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M76.4,208.9a96,96,0,1,1,103.2,0"
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
      cy="120"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M68.3,151.2a64,64,0,1,1,119.4,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M76.4,208.9a96,96,0,1,1,103.2,0"
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
      cy="120"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M68.3,151.2a64,64,0,1,1,119.4,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76.4,208.9a96,96,0,1,1,103.2,0"
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

const ApplePodcastsLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ApplePodcastsLogo.displayName = "ApplePodcastsLogo";

export default ApplePodcastsLogo;
