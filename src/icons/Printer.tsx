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
    <rect
      x="63.99414"
      y="40"
      width="128"
      height="40"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="63.99414"
      y="156"
      width="128"
      height="64"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="188" cy="116" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M210.66083,80H45.32751c-9.57293,0-17.33337,7.16357-17.33337,16v80h36V152h128v24h36V96C227.99414,87.16357,220.23376,80,210.66083,80Z"
      opacity="0.2"
    />
    <rect
      x="63.99414"
      y="40"
      width="128"
      height="40"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="63.99414"
      y="152"
      width="128"
      height="68"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="116" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M210.66064,72h-10.6665V40a8.00008,8.00008,0,0,0-8-8h-128a8.00008,8.00008,0,0,0-8,8V72H45.32764c-13.96875,0-25.3335,10.7666-25.3335,24v80a8.00008,8.00008,0,0,0,8,8h28v36a8.00008,8.00008,0,0,0,8,8h128a8.00008,8.00008,0,0,0,8-8V184h28a8.00008,8.00008,0,0,0,8-8V96C235.99414,82.7666,224.62939,72,210.66064,72ZM71.99414,48h112V72h-112Zm112,164h-112V160h112Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="63.994 80 63.994 40 191.994 40 191.994 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="63.99414"
      y="152"
      width="128"
      height="68"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="188" cy="116" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polyline
      points="63.994 80 63.994 40 191.994 40 191.994 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="63.99414"
      y="152"
      width="128"
      height="68"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="188" cy="116" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline
      points="63.994 80 63.994 40 191.994 40 191.994 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="63.99414"
      y="152"
      width="128"
      height="68"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="116" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Printer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Printer.displayName = "Printer";

export default Printer;
