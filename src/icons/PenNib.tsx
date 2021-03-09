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
    <circle
      cx="116"
      cy="140"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="32.00586"
      y1="224.00342"
      x2="99.02963"
      y2="156.97074"
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
      d="M120.00586,56.00342,60.3291,78.38232a7.99941,7.99941,0,0,0-5.08227,6.1753l-23.241,139.4458,139.4458-23.24121a7.99949,7.99949,0,0,0,6.17529-5.082l22.37891-59.67676ZM116,160a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,116,160Z"
      opacity="0.2"
    />
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32.00586"
      y1="224.00342"
      x2="101.85786"
      y2="154.14214"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
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
    <path d="M232.00586,92.68994l-68.68652-68.6875a16.02162,16.02162,0,0,0-22.62793.001L115.57349,49.12158l-58.053,21.77a16.045,16.045,0,0,0-10.165,12.35108L26.58887,207.83984a4,4,0,0,0,6.77417,3.48584l55.08423-55.08545a32.0378,32.0378,0,1,1,11.311,11.31543L44.667,222.64893a4,4,0,0,0,3.48609,6.77392l124.61352-20.769a16.0433,16.0433,0,0,0,12.35059-10.16406l21.77-58.05371,25.11767-25.11817a15.99888,15.99888,0,0,0,.001-22.62793Zm-32,31.99951-68.686-68.686,20.686-20.68653,68.68555,68.68653Z" />
    <circle cx="116.00586" cy="140.00342" r="16" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="32.00586"
      y1="224.00342"
      x2="101.85786"
      y2="154.14214"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
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
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="32.00586"
      y1="224.00342"
      x2="101.85786"
      y2="154.14214"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
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
    <circle
      cx="116"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32.00586"
      y1="224.00342"
      x2="101.85786"
      y2="154.14214"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32.00586,224.00342l139.44573-23.241a8,8,0,0,0,6.17544-5.08216l22.37883-59.67688-80-80L60.329,78.38225a8,8,0,0,0-5.08217,6.17544Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200.00586,136.00342,226.349,109.66027a8,8,0,0,0,0-11.31371l-68.6863-68.68629a8,8,0,0,0-11.3137,0L120.00586,56.00342"
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

const PenNib = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PenNib.displayName = "PenNib";

export default PenNib;
