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
      d="M40,80v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,128v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V128"
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
      d="M40,80v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V128"
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
    <path d="M128,24C74.168,24,32,48.59814,32,80v96c0,31.40186,42.168,56,96,56s96-24.59814,96-56V80C224,48.59814,181.832,24,128,24Zm80,104c0,9.61719-7.875,19.42871-21.60547,26.918C170.92822,163.354,150.18994,168,128,168s-42.92822-4.646-58.39453-13.082C55.875,147.42871,48,137.61719,48,128V111.35645C65.05994,126.3208,94.234,136,128,136s62.94006-9.6792,80-24.64355Zm-21.60547,74.918C170.92822,211.354,150.19043,216,128,216s-42.92822-4.646-58.39453-13.082C55.875,195.42871,48,185.61719,48,176V159.35645C65.05994,174.3208,94.234,184,128,184s62.94006-9.6792,80-24.64355V176C208,185.61719,200.125,195.42871,186.39453,202.918Z" />
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
      d="M40,80v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M40,128v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V128"
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
      d="M40,80v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M40,128v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V128"
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
      d="M40,80v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M40,128v48c0,26.50967,39.39894,48,88,48s88-21.49033,88-48V128"
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
