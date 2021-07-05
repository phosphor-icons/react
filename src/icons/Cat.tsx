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
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="84" cy="140" r="16" />
    <circle cx="172" cy="140" r="16" />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="108"
      y1="49.91564"
      x2="108"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="148"
      y1="49.91489"
      x2="148"
      y2="88"
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
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
      opacity="0.2"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="140" r="12" />
    <circle cx="172" cy="140" r="12" />
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="53.00879"
      x2="96"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="53.00879"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
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
    <path d="M221.4126,36.25659a16.40365,16.40365,0,0,0-17.04737,4.06372L187.46,57.22656a111.22891,111.22891,0,0,0-118.91894,0L51.63379,40.31982a16.40325,16.40325,0,0,0-17.04688-4.063A15.9582,15.9582,0,0,0,24,51.31348V136c0,47.50391,37.57251,87.05957,86.72656,94.67578A8.01964,8.01964,0,0,0,120,222.77075V195.314l-13.42163-13.42163a8.21993,8.21993,0,0,1-.40625-11.37329,8.00123,8.00123,0,0,1,11.48511-.17578L128,180.68652l10.34277-10.34326a8.00123,8.00123,0,0,1,11.48511.17578,8.21993,8.21993,0,0,1-.40625,11.37329L136,195.314v27.45679a8.01964,8.01964,0,0,0,9.27344,7.905C194.42749,223.05957,232,183.50391,232,136V51.31348A15.95841,15.95841,0,0,0,221.4126,36.25659ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,0,1-16,0V69.00879a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69.00879a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="84" cy="140" r="10" />
    <circle cx="172" cy="140" r="10" />
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="53.00879"
      x2="96"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="53.00879"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
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
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="84" cy="140" r="8" />
    <circle cx="172" cy="140" r="8" />
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="53.00879"
      x2="96"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="53.00879"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
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
    <line
      x1="128"
      y1="192"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="84" cy="140" r="12" />
    <circle cx="172" cy="140" r="12" />
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144 176 128 192 112 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="53.00879"
      x2="96"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="53.00879"
      x2="160"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z"
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

const Cat = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cat.displayName = "Cat";

export default Cat;
