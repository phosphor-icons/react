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
      x="44"
      y="56"
      width="160"
      height="80"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M204,96h28a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="44"
      y1="96"
      x2="16"
      y2="96"
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
    <rect x="40" y="56" width="168" height="80" rx="8" opacity="0.2" />
    <rect
      x="40"
      y="56"
      width="168"
      height="80"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="96"
      x2="16"
      y2="96"
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
    <path d="M248,104v49.96582a16.06941,16.06941,0,0,1-11.60352,15.38477L135.999,198.03418,136,232a8,8,0,0,1-16,0V198.03418a16.06941,16.06941,0,0,1,11.60352-15.38477L232.001,153.96582,232,104H216v24a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V104H16a8,8,0,0,1,0-16H32V64A16.01833,16.01833,0,0,1,48,48H200a16.01833,16.01833,0,0,1,16,16V88h16A16.01833,16.01833,0,0,1,248,104Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="56"
      width="168"
      height="80"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="96"
      x2="16"
      y2="96"
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
      x="40"
      y="56"
      width="168"
      height="80"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="96"
      x2="16"
      y2="96"
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
      x="40"
      y="56"
      width="168"
      height="80"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M208,96h24a8,8,0,0,1,8,8v49.96559a8,8,0,0,1-5.80223,7.69219L133.80223,190.34222A8,8,0,0,0,128,198.03441V232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="96"
      x2="16"
      y2="96"
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

const PaintRoller = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PaintRoller.displayName = "PaintRoller";

export default PaintRoller;
