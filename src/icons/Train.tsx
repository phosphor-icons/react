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
      x1="44"
      y1="128"
      x2="212"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44"
      y1="72"
      x2="212"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="44"
      y="32"
      width="168"
      height="176"
      rx="24"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="72"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="88" cy="168" r="16" />
    <circle cx="168" cy="168" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="44" y="72" width="168" height="56" opacity="0.2" />
    <line
      x1="44"
      y1="128"
      x2="212"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44"
      y1="72"
      x2="212"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="44"
      y="32"
      width="168"
      height="176"
      rx="24"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="72"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="172" r="12" />
    <circle cx="172" cy="172" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M188,24H68A32.03667,32.03667,0,0,0,36,56V184a32.03667,32.03667,0,0,0,32,32H79.99976L65.59961,235.2002a8.00019,8.00019,0,0,0,12.80078,9.5996L100.00024,216h55.99952l21.59985,28.7998a8.00019,8.00019,0,0,0,12.80078-9.5996L176.00024,216H188a32.03667,32.03667,0,0,0,32-32V56A32.03667,32.03667,0,0,0,188,24ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm36-64H52V80h68Zm52,64a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm32-64H136V80h68Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="44"
      y1="128"
      x2="212"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="44"
      y1="72"
      x2="212"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="44"
      y="32"
      width="168"
      height="176"
      rx="24"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="72"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="172" cy="172" r="10" />
    <circle cx="84" cy="172" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="44"
      y1="128"
      x2="212"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="44"
      y1="72"
      x2="212"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="44"
      y="32"
      width="168"
      height="176"
      rx="24"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="72"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="84" cy="172" r="8" />
    <circle cx="172" cy="172" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="44"
      y1="128"
      x2="212"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44"
      y1="72"
      x2="212"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="208"
      x2="72"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="208"
      x2="184"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="44"
      y="32"
      width="168"
      height="176"
      rx="24"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="72"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="172" r="12" />
    <circle cx="172" cy="172" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Train = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Train.displayName = "Train";

export default Train;
