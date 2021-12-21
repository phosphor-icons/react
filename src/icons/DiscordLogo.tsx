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
    <circle cx="96" cy="132" r="16" />
    <circle cx="160" cy="132" r="16" />
    <path
      d="M151.3,174.6l15.8,31.5a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3L151.5,81.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104.7,174.6,88.9,206.1a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l10.5,31.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M181.1,168c-15.2,5.1-33.5,8-53.1,8s-37.9-2.9-53.1-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,86.4A173.7,173.7,0,0,0,128,80a173.7,173.7,0,0,0-48,6.4"
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
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9h0a190.1,190.1,0,0,1,52.2,0h0L162,49.9a8.1,8.1,0,0,1,9.4-5.3A176.4,176.4,0,0,1,201,53.8a7.7,7.7,0,0,1,4.7,5.1l33.9,113.2a8.1,8.1,0,0,1-2.4,8.4c-15.4,13.4-36.6,23.8-61.1,29.8a7.8,7.8,0,0,1-9-4.2l-12.1-24a195,195,0,0,1-27,1.9,195,195,0,0,1-27-1.9Z"
      opacity="0.2"
    />
    <circle cx="96" cy="144" r="12" />
    <circle cx="160" cy="144" r="12" />
    <path
      d="M74.4,80A174.9,174.9,0,0,1,128,72a174.9,174.9,0,0,1,53.6,8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M181.6,176a174.9,174.9,0,0,1-53.6,8,174.9,174.9,0,0,1-53.6-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M155,182.1l12.1,24a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3l-7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9"
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
    <path d="M247.3,169.8l-34-113.2a15.6,15.6,0,0,0-9.2-10.2h-.6l.6-.2A192.4,192.4,0,0,0,169.6,36a8,8,0,0,0-9.4,6.3,7.9,7.9,0,0,0,6.2,9.4c4.5.9,8.9,2,13.2,3.2A8,8,0,0,1,176,70h-.8A185.4,185.4,0,0,0,128,64a181.8,181.8,0,0,0-46.1,5.8,8,8,0,0,1-5.6-14.9h.1c4.3-1.2,8.7-2.3,13.2-3.2a8,8,0,0,0,6.3-9.4A8.1,8.1,0,0,0,86.5,36,191.2,191.2,0,0,0,51.9,46.4a15.6,15.6,0,0,0-9.2,10.2L8.7,169.8a16,16,0,0,0,4.9,16.7,34.7,34.7,0,0,0,2.9,2.5h.1c16.2,13.2,37.5,23.3,61.5,29.1a6.3,6.3,0,0,0,1.9.3,8,8,0,0,0,1.9-15.8,160.3,160.3,0,0,1-31.3-11.1h0a8,8,0,0,1,8.6-13.2c19,8.4,42.9,13.7,68.8,13.7s49.8-5.3,68.8-13.7a8,8,0,0,1,8.6,13.2h0a160.3,160.3,0,0,1-31.3,11.1,8,8,0,0,0,1.9,15.8,6.3,6.3,0,0,0,1.9-.3c24-5.8,45.3-15.9,61.5-29.1h.1a34.7,34.7,0,0,0,2.9-2.5A16,16,0,0,0,247.3,169.8ZM96,156a12,12,0,1,1,12-12A12,12,0,0,1,96,156Zm64,0a12,12,0,1,1,12-12A12,12,0,0,1,160,156Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle cx="96" cy="144" r="10" />
    <circle cx="160" cy="144" r="10" />
    <path
      d="M74.4,80A174.9,174.9,0,0,1,128,72a174.9,174.9,0,0,1,53.6,8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M181.6,176a174.9,174.9,0,0,1-53.6,8,174.9,174.9,0,0,1-53.6-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M155,182.1l12.1,24a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3l-7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9"
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
    <circle cx="96" cy="144" r="8" />
    <circle cx="160" cy="144" r="8" />
    <path
      d="M74.4,80A174.9,174.9,0,0,1,128,72a174.9,174.9,0,0,1,53.6,8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M181.6,176a174.9,174.9,0,0,1-53.6,8,174.9,174.9,0,0,1-53.6-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M155,182.1l12.1,24a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3l-7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9"
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
    <circle cx="96" cy="144" r="12" />
    <circle cx="160" cy="144" r="12" />
    <path
      d="M74.4,80A174.9,174.9,0,0,1,128,72a174.9,174.9,0,0,1,53.6,8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M181.6,176a174.9,174.9,0,0,1-53.6,8,174.9,174.9,0,0,1-53.6-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M155,182.1l12.1,24a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3l-7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="96" cy="144" r="12" />
    <circle cx="160" cy="144" r="12" />
    <path
      d="M74.4,80A174.9,174.9,0,0,1,128,72a174.9,174.9,0,0,1,53.6,8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M181.6,176a174.9,174.9,0,0,1-53.6,8,174.9,174.9,0,0,1-53.6-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M155,182.1l12.1,24a7.8,7.8,0,0,0,9,4.2c24.5-6,45.7-16.4,61.1-29.8a8.1,8.1,0,0,0,2.4-8.4L205.7,58.9a7.7,7.7,0,0,0-4.7-5.1,176.4,176.4,0,0,0-29.6-9.2,8.1,8.1,0,0,0-9.4,5.3l-7.9,23.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M101,182.1l-12.1,24a7.8,7.8,0,0,1-9,4.2c-24.5-6-45.7-16.4-61.1-29.8a8.1,8.1,0,0,1-2.4-8.4L50.3,58.9A7.7,7.7,0,0,1,55,53.8a176.4,176.4,0,0,1,29.6-9.2A8.1,8.1,0,0,1,94,49.9l7.9,23.9"
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

const DiscordLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DiscordLogo.displayName = "DiscordLogo";

export default DiscordLogo;
