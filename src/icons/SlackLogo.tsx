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
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
      transform="translate(304 160) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
      transform="translate(24 328) rotate(-90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
      transform="translate(24 328) rotate(-90)"
      opacity="0.2"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      opacity="0.2"
    />
    <path
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      opacity="0.2"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      opacity="0.2"
    />
    <path
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
      transform="translate(304 160) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
      transform="translate(24 328) rotate(-90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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
    <path d="M221.1,128A32,32,0,0,0,200,72a32.2,32.2,0,0,0-16,4.3V56a32,32,0,0,0-56-21.1A32,32,0,0,0,72,56a32.2,32.2,0,0,0,4.3,16H56a32,32,0,0,0-21.1,56A32,32,0,0,0,56,184a32.2,32.2,0,0,0,16-4.3V200a32,32,0,0,0,56,21.1A32,32,0,0,0,184,200a32.2,32.2,0,0,0-4.3-16H200a32,32,0,0,0,21.1-56ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z"
      transform="translate(304 160) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128A24,24,0,0,1,176,104Z"
      transform="translate(24 328) rotate(-90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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
    <path
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
      transform="translate(304 160) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
      transform="translate(24 328) rotate(-90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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
    <path
      d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
      transform="translate(184 24) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z"
      transform="translate(304 160) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
      transform="translate(24 328) rotate(-90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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

const SlackLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SlackLogo.displayName = "SlackLogo";

export default SlackLogo;
