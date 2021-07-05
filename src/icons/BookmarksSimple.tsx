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
      d="M164.00586,228l-56.0074-40-55.9926,40V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M92.00586,28h104a8,8,0,0,1,8,8V188"
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
      d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      opacity="0.2"
    />
    <path
      d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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
    <g>
      <path d="M160.00586,56h-96a16.01833,16.01833,0,0,0-16,16V224a8.00026,8.00026,0,0,0,12.65039,6.50977L111.999,193.83105l51.35743,36.67872A7.99952,7.99952,0,0,0,176.00586,224V72A16.01833,16.01833,0,0,0,160.00586,56Z" />
      <path d="M192.00586,24h-104a8,8,0,0,0,0,16h104V192a8,8,0,0,0,16,0V40A16.01833,16.01833,0,0,0,192.00586,24Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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
      d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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
      d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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

const BookmarksSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BookmarksSimple.displayName = "BookmarksSimple";

export default BookmarksSimple;
