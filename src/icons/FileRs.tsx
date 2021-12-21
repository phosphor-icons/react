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
    <polyline
      points="148 36 148 100 212 100"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M180,220h24a8,8,0,0,0,8-8V92L156,36H52a8,8,0,0,0-8,8v80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M108,214.4a23.7,23.7,0,0,0,15,5.6c9,0,17-3.4,17-14.6,0-17.9-32-10-32-26.8,0-9,6-14.6,15-14.6a23.7,23.7,0,0,1,15,5.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M36,204H52a20,20,0,0,0,0-40H36v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="60.5"
      y1="202.1"
      x2="72"
      y2="220"
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
    <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="68.8"
      y1="199.3"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,224h16a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
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
    <path d="M80.1,201.8A24,24,0,0,0,64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h9l8.3,12.4A7.9,7.9,0,0,0,80,224a7.8,7.8,0,0,0,4.4-1.3,8,8,0,0,0,2.2-11.1ZM64,192H56V176h8a8,8,0,0,1,0,16Zm88,12c0,13.1-9.3,21-25,21a33.4,33.4,0,0,1-20.1-6.8h0A7.6,7.6,0,0,1,104,212a8,8,0,0,1,8-8,8.3,8.3,0,0,1,5.1,1.8H117a18.4,18.4,0,0,0,10,3.2c9,0,9-3,9-5s0-.9-1.2-1.6-5.8-2.2-9.2-3.1C117,197,104,193.5,104,180s9.5-21,23-21a33.4,33.4,0,0,1,20.1,6.8h0A7.6,7.6,0,0,1,150,172a8,8,0,0,1-8,8,8.3,8.3,0,0,1-5.1-1.8h.1a18.4,18.4,0,0,0-10-3.2c-4.6,0-7,1.7-7,5v.2c1.1,1.3,6.6,2.8,9.7,3.6C138,186,152,189.7,152,204ZM213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,8,8H168a8,8,0,0,1,8,8v80a8,8,0,0,0,8,8h16a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="68.8"
      y1="199.3"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184,224h16a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 32 152 88 208 88"
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
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="68.8"
      y1="199.3"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184,224h16a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 32 152 88 208 88"
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
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="68.8"
      y1="199.3"
      x2="80"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,224h16a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
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

const FileRs = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FileRs.displayName = "FileRs";

export default FileRs;
