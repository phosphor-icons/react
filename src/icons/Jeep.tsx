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
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="136"
      x2="128"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="136"
      x2="168"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="136"
      x2="88"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
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
    <path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176Z" opacity="0.2" />
    <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176Z" opacity="0.2" />
    <path
      d="M36,96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
      opacity="0.2"
    />
    <path
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="128"
      x2="144"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="128"
      x2="112"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="132" r="12" />
    <circle cx="184" cy="132" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M239.7,88H226.9l-6-42.3A16,16,0,0,0,205.1,32H50.9A16,16,0,0,0,35.1,45.7L29.1,88H16.3A8.2,8.2,0,0,0,8,95.5a8,8,0,0,0,8,8.5H28V208a16,16,0,0,0,16,16H68a16,16,0,0,0,16-16V184h16a4,4,0,0,0,4-4V128.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v52a4,4,0,0,0,4,4h8a4,4,0,0,0,4-4V128.3a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v52a4,4,0,0,0,4,4h16v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V104h12a8,8,0,0,0,8-8.5A8.2,8.2,0,0,0,239.7,88ZM72,144a12,12,0,1,1,12-12A12,12,0,0,1,72,144Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,184,144Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="144"
      y1="128"
      x2="144"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="128"
      x2="112"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="184" cy="132" r="10" />
    <circle cx="72" cy="132" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="144"
      y1="128"
      x2="144"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="128"
      x2="112"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="72" cy="132" r="8" />
    <circle cx="184" cy="132" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="128"
      x2="144"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="128"
      x2="112"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,176H36V96l7-49.1A8,8,0,0,1,50.9,40H205.1a8,8,0,0,1,7.9,6.9L220,96Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="132" r="12" />
    <circle cx="184" cy="132" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Jeep = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Jeep.displayName = "Jeep";

export default Jeep;
