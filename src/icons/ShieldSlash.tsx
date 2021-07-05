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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M187.53527,193.51968c-21.56883,24.54405-48.85178,34.98988-57.07907,37.71757a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667V56a8,8,0,0,1,8-8h7.30776"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M109.353,48H208a8,8,0,0,1,8,8v58.66667a125.41227,125.41227,0,0,1-7.13369,42.8506"
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
      d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
      opacity="0.2"
    />
    <line
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M187.53527,193.51968c-21.56883,24.54405-48.85178,34.98988-57.07907,37.71757a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667V56a8,8,0,0,1,8-8h7.30776"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M98.54466,48H208a8,8,0,0,1,8,8v58.66667c0,20.0838-4.07475,36.95719-10.47061,51.07187"
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
    <path d="M227.87939,237.9209a8,8,0,0,1-11.30078-.541L187.4165,205.28613a147.318,147.318,0,0,1-54.44238,33.54492,15.49078,15.49078,0,0,1-9.94824,0c-15.2002-5.04-91.02637-34.71289-91.02637-124.16406V56a15.98851,15.98851,0,0,1,7.48242-13.52026L27.57861,29.37988a8,8,0,0,1,11.8418-10.75976l21.7998,23.99121.00879.00879L193.45654,188.13965l.01563.019,34.94824,38.46143A7.9992,7.9992,0,0,1,227.87939,237.9209Zm-28.2705-66.80274a8.00083,8.00083,0,0,0,13.208-2.07812c7.41993-16.376,11.18262-34.66992,11.18262-54.37305V56a16.01833,16.01833,0,0,0-16-16H98.54443a8.00019,8.00019,0,0,0-5.92089,13.37988Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M187.53527,193.51968c-21.56883,24.54405-48.85178,34.98988-57.07907,37.71757a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667V56a8,8,0,0,1,8-8h7.30776"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M98.54466,48H208a8,8,0,0,1,8,8v58.66667c0,20.0838-4.07475,36.95719-10.47061,51.07187"
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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M187.53527,193.51968c-21.56883,24.54405-48.85178,34.98988-57.07907,37.71757a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667V56a8,8,0,0,1,8-8h7.30776"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M98.54466,48H208a8,8,0,0,1,8,8v58.66667c0,20.0838-4.07475,36.95719-10.47061,51.07187"
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
      x1="33.5"
      y1="24"
      x2="222.5"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M187.53527,193.51968c-21.56883,24.54405-48.85178,34.98988-57.07907,37.71757a7.54755,7.54755,0,0,1-4.9124,0C111.306,226.51683,40,198.682,40,114.66667V56a8,8,0,0,1,8-8h7.30776"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M98.54466,48H208a8,8,0,0,1,8,8v58.66667c0,20.0838-4.07475,36.95719-10.47061,51.07187"
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

const ShieldSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShieldSlash.displayName = "ShieldSlash";

export default ShieldSlash;
