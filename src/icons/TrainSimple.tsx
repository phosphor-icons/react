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
    <path
      d="M212,56a23.9,23.9,0,0,0-24-24H68A23.9,23.9,0,0,0,44,56v72H212Z"
      opacity="0.2"
    />
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
    <path d="M188,24H68A32.1,32.1,0,0,0,36,56V184a32.1,32.1,0,0,0,32,32H80L65.6,235.2a8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,72,248a8,8,0,0,0,6.4-3.2L100,216h56l21.6,28.8A8,8,0,0,0,184,248a7.7,7.7,0,0,0,4.8-1.6,8,8,0,0,0,1.6-11.2L176,216h12a32.1,32.1,0,0,0,32-32V56A32.1,32.1,0,0,0,188,24Zm0,176H68a16,16,0,0,1-16-16V136H204v48A16,16,0,0,1,188,200Z" />
    <circle cx="84" cy="172" r="12" />
    <circle cx="172" cy="172" r="12" />
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

const TrainSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrainSimple.displayName = "TrainSimple";

export default TrainSimple;
