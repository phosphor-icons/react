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
      x1="128"
      y1="24"
      x2="128"
      y2="189.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M220.2,116.6l8.7-7.3c5.9-4.9,2.9-14.8-4.8-15.3l-11.5-.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M173,216.5l9.8,6.2c6.5,4.1,14.5-2,12.6-9.5l-2.8-10.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M182,160.5l-1.2-4.7a8.7,8.7,0,0,1,2.9-8.8l3.4-2.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M169.6,90.5l-4.5-.3a8.3,8.3,0,0,1-7.3-5.4L152.7,72,135.8,29.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7a8.2,8.2,0,0,1,8.8,0l4.3,2.7"
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
      d="M128,189.4a8.7,8.7,0,0,0-4.4,1.3L76.7,220.4c-7.7,4.9-17.3-2.4-15-11.4l13.5-53.2a8.7,8.7,0,0,0-2.9-8.8L27.1,109.3c-5.9-4.9-2.9-14.8,4.8-15.3l59-3.8a8.3,8.3,0,0,0,7.3-5.4l22-55.4A8.3,8.3,0,0,1,128,24h0Z"
      opacity="0.2"
    />
    <path
      d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="24"
      x2="128"
      y2="189.4"
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
    <path d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59-3.8a.5.5,0,0,1-.4-.3l-22-55.5a16.3,16.3,0,0,0-30.4,0l-22,55.5a.5.5,0,0,1-.4.3L31.4,86A16.4,16.4,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.2,37.6a.8.8,0,0,1,.2.8L53.9,207a18.6,18.6,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.8,16.8,0,0,0,9.5-3.1,16.6,16.6,0,0,0,6.3-17.7l-14.5-57.3a.8.8,0,0,1,.2-.8L234,115.5A16.8,16.8,0,0,0,239.2,97.4Zm-15.4,5.8-45.3,37.6a16.8,16.8,0,0,0-5.4,17l14.5,57.3c.1.4.1.5,0,.6a.7.7,0,0,1-.3.3h-.2L136.7,184a16,16,0,0,0-8.7-2.5V32c.1,0,.2,0,.3.3l22.1,55.5a16.4,16.4,0,0,0,14.1,10.4l59.1,3.8c.1,0,.2,0,.3.4S223.9,103.1,223.8,103.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="24"
      x2="128"
      y2="189.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M220.2,116.6l8.7-7.3c5.9-4.9,2.9-14.8-4.8-15.3l-11.5-.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184.1,168.9l-3.3-13.1a8.7,8.7,0,0,1,2.9-8.8l10-8.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M178.2,91l-13.1-.8a8.3,8.3,0,0,1-7.3-5.4L152.7,72,135.8,29.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7a8.2,8.2,0,0,1,8.8,0l11.5,7.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M173,216.5l9.8,6.2c6.5,4.1,14.5-2,12.6-9.5l-2.8-10.9"
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
      x1="128"
      y1="24"
      x2="128"
      y2="189.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M220.2,116.6l8.7-7.3c5.9-4.9,2.9-14.8-4.8-15.3l-11.5-.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184.1,168.9l-3.3-13.1a8.7,8.7,0,0,1,2.9-8.8l10-8.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M178.2,91l-13.1-.8a8.3,8.3,0,0,1-7.3-5.4L152.7,72,135.8,29.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7a8.2,8.2,0,0,1,8.8,0l11.5,7.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M173,216.5l9.8,6.2c6.5,4.1,14.5-2,12.6-9.5l-2.8-10.9"
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
      x1="128"
      y1="24"
      x2="128"
      y2="189.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220.2,116.6l8.7-7.3c5.9-4.9,2.9-14.8-4.8-15.3l-11.5-.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184.1,168.9l-3.3-13.1a8.7,8.7,0,0,1,2.9-8.8l10-8.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M178.2,91l-13.1-.8a8.3,8.3,0,0,1-7.3-5.4L152.7,72,135.8,29.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7a8.2,8.2,0,0,1,8.8,0l11.5,7.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M173,216.5l9.8,6.2c6.5,4.1,14.5-2,12.6-9.5l-2.8-10.9"
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

const StarHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

StarHalf.displayName = "StarHalf";

export default StarHalf;
