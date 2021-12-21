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
    <ellipse
      cx="128"
      cy="80"
      rx="88"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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
    <ellipse cx="128" cy="80" rx="88" ry="48" opacity="0.2" />
    <ellipse
      cx="128"
      cy="80"
      rx="88"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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
    <path d="M128,24C74.2,24,32,48.6,32,80v96c0,31.4,42.2,56,96,56s96-24.6,96-56V80C224,48.6,181.8,24,128,24Zm80,104c0,9.6-7.9,19.4-21.6,26.9C170.9,163.4,150.2,168,128,168s-42.9-4.6-58.4-13.1C55.9,147.4,48,137.6,48,128V111.4C65.1,126.3,94.2,136,128,136s62.9-9.7,80-24.6Zm-21.6,74.9C170.9,211.4,150.2,216,128,216s-42.9-4.6-58.4-13.1C55.9,195.4,48,185.6,48,176V159.4C65.1,174.3,94.2,184,128,184s62.9-9.7,80-24.6V176C208,185.6,200.1,195.4,186.4,202.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="80"
      rx="88"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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
    <ellipse
      cx="128"
      cy="80"
      rx="88"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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
    <ellipse
      cx="128"
      cy="80"
      rx="88"
      ry="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
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

const Database = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Database.displayName = "Database";

export default Database;
