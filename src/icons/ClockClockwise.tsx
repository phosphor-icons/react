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
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="184.167 99.716 224.167 99.716 224.167 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
    <circle cx="128" cy="128" r="88" opacity="0.2" />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="184.167 99.716 224.167 99.716 224.167 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
    <path d="M136,80v43.38116l37.56934,21.69062a8,8,0,1,1-8,13.85644l-41.56934-24c-.064-.03692-.12109-.0805-.18359-.11889-.13575-.08362-.271-.16779-.40088-.2591-.10352-.07232-.20215-.14892-.30127-.22534-.10205-.0788-.20362-.15765-.30127-.24115-.11182-.09479-.21778-.19342-.32276-.29333-.0791-.07532-.15771-.15064-.23388-.22913-.10694-.11017-.2085-.22351-.30811-.339-.06933-.08026-.13769-.16083-.2041-.24377-.0918-.1156-.1792-.23352-.26416-.35352-.06738-.09473-.1333-.19019-.19629-.2879-.07226-.11194-.14062-.22547-.207-.34058-.06592-.11438-.12988-.22986-.19043-.34778-.05322-.10418-.10352-.20941-.15186-.31561-.061-.13287-.11914-.26685-.17333-.4035-.03907-.09986-.0752-.20063-.11036-.30194-.0498-.14252-.09668-.28589-.13818-.432-.03027-.10687-.05664-.21454-.083-.32257-.0332-.13928-.06543-.27881-.09131-.42084-.02392-.12842-.0415-.25757-.05908-.38714-.0166-.12226-.0332-.244-.04394-.368-.01416-.16015-.01954-.3208-.02442-.48187C120.00879,128.14313,120,128.07269,120,128V80a8,8,0,0,1,16,0Zm91.228-27.67529a7.99962,7.99962,0,0,0-8.71826,1.73437L204.1665,68.40222l-8.28466-8.28454a95.9551,95.9551,0,1,0,0,135.76464,7.99983,7.99983,0,1,0-11.31348-11.31347,80.00009,80.00009,0,1,1,0-113.1377l8.28467,8.28467L178.50977,94.05908a7.99981,7.99981,0,0,0,5.65673,13.65674h40a7.99977,7.99977,0,0,0,8-8v-40A8.00014,8.00014,0,0,0,227.228,52.32471Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="184.167 99.716 224.167 99.716 224.167 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="184.167 99.716 224.167 99.716 224.167 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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
      y1="80"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="169.56922"
      y1="152"
      x2="128"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="184.167 99.716 224.167 99.716 224.167 59.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2254,190.2254a88,88,0,1,1,0-124.4508l33.94112,33.94113"
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

const ClockClockwise = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ClockClockwise.displayName = "ClockClockwise";

export default ClockClockwise;
