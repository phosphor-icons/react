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
    <rect
      x="28.00781"
      y="84.00005"
      width="160"
      height="128"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M68.00781,84.00005v-32a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V164a8,8,0,0,1-8,8h-32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="28"
      y1="124"
      x2="188"
      y2="124"
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
      d="M216.00781,48h-144a7.99993,7.99993,0,0,0-8,8V80h120a7.99993,7.99993,0,0,1,8,8v88h24a7.99977,7.99977,0,0,0,8-8V56A7.99993,7.99993,0,0,0,216.00781,48Z"
      opacity="0.2"
    />
    <rect
      x="32.00781"
      y="80.00005"
      width="160"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="112"
      x2="192"
      y2="112"
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
    <path d="M216.00781,40h-144a16.01818,16.01818,0,0,0-16,16V72h-16a16.01818,16.01818,0,0,0-16,16v23.84521c-.001.052-.00781.10254-.00781.15479s.00684.10278.00781.15479V200a16.01833,16.01833,0,0,0,16,16h144a16.01833,16.01833,0,0,0,16-16V184h16a16.01833,16.01833,0,0,0,16-16V56A16.01817,16.01817,0,0,0,216.00781,40Zm-32,48,.00147,16H40.00781V88Zm32,80h-16V88a16.01817,16.01817,0,0,0-16-16h-112V56h144Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="32.00781"
      y="80.00005"
      width="160"
      height="128"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32"
      y1="112"
      x2="192"
      y2="112"
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
    <rect
      x="32.00781"
      y="80.00005"
      width="160"
      height="128"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32"
      y1="112"
      x2="192"
      y2="112"
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
    <rect
      x="32.00781"
      y="80.00005"
      width="160"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="112"
      x2="192"
      y2="112"
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

const Browsers = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Browsers.displayName = "Browsers";

export default Browsers;
