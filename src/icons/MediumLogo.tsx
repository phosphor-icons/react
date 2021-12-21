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
      cx="70"
      cy="128"
      rx="54"
      ry="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <ellipse
      cx="182"
      cy="128"
      rx="22"
      ry="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="240"
      y1="72"
      x2="240"
      y2="184"
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
    <ellipse cx="72" cy="128" rx="56" ry="60" opacity="0.2" />
    <ellipse cx="184" cy="128" rx="24" ry="56" opacity="0.2" />
    <ellipse
      cx="72"
      cy="128"
      rx="56"
      ry="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="184"
      cy="128"
      rx="24"
      ry="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240"
      y1="72"
      x2="240"
      y2="184"
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
    <path d="M136,128c0,37.5-28.7,68-64,68S8,165.5,8,128,36.7,60,72,60,136,90.5,136,128Zm48-64c-5.7,0-16.4,2.8-24.3,21.3-5,11.5-7.7,26.7-7.7,42.7s2.7,31.2,7.7,42.7c7.9,18.5,18.6,21.3,24.3,21.3s16.4-2.8,24.3-21.3c5-11.5,7.7-26.7,7.7-42.7s-2.7-31.2-7.7-42.7C200.4,66.8,189.7,64,184,64Zm56,0a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8,8,0,0,0,240,64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="72"
      cy="128"
      rx="56"
      ry="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <ellipse
      cx="184"
      cy="128"
      rx="24"
      ry="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="240"
      y1="72"
      x2="240"
      y2="184"
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
      cx="72"
      cy="128"
      rx="56"
      ry="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <ellipse
      cx="184"
      cy="128"
      rx="24"
      ry="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="240"
      y1="72"
      x2="240"
      y2="184"
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
      cx="72"
      cy="128"
      rx="56"
      ry="60"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="184"
      cy="128"
      rx="24"
      ry="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="240"
      y1="72"
      x2="240"
      y2="184"
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

const MediumLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MediumLogo.displayName = "MediumLogo";

export default MediumLogo;
