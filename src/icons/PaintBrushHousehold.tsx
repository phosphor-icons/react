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
      x1="72"
      y1="104"
      x2="151.99999"
      y2="183.99999"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="96"
      y1="188"
      x2="70.56478"
      y2="214.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="68"
      y1="160"
      x2="42.56478"
      y2="186.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M136.12716,92.20308l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.20279,9.2028a16,16,0,0,1,0,22.62742L96,240,16,160,92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028A8,8,0,0,0,136.12716,92.20308Z"
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
      d="M92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028a8,8,0,0,0,11.61065-.31343l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.2028,9.20281a16,16,0,0,1,0,22.62741L152,184,72,104Z"
      opacity="0.2"
    />
    <line
      x1="72"
      y1="104"
      x2="151.99999"
      y2="183.99999"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.75578"
      y1="183.37379"
      x2="70.56478"
      y2="214.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="73.75578"
      y1="155.37379"
      x2="42.56478"
      y2="186.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.12716,92.20308l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.20279,9.2028a16,16,0,0,1,0,22.62742L96,240,16,160,92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028A8,8,0,0,0,136.12716,92.20308Z"
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
    <path d="M230.627,25.37207a32.03909,32.03909,0,0,0-45.2539,0c-.10254.10156-.20117.207-.29785.31348L130.17383,86.85938l-9.20313-9.20313a24.00066,24.00066,0,0,0-33.9414,0L10.34277,154.34277a8.00122,8.00122,0,0,0,0,11.31446l80,80a8.00181,8.00181,0,0,0,11.31446,0l76.68652-76.68653a24.00066,24.00066,0,0,0,0-33.9414l-9.20313-9.20215L230.31445,70.9248c.10645-.09668.21192-.19531.31348-.29785A32.03761,32.03761,0,0,0,230.627,25.37207ZM96,228.68652,81.87842,214.56494l25.53467-25.53369A8.00053,8.00053,0,0,0,96.09863,177.7168L70.564,203.25049,53.87842,186.56494l25.53467-25.53369A8.00053,8.00053,0,0,0,68.09863,149.7168L42.564,175.25049,27.31348,160,72,115.31445,140.68555,184Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="72"
      y1="104"
      x2="151.99999"
      y2="183.99999"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="101.75578"
      y1="183.37379"
      x2="70.56478"
      y2="214.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="73.75578"
      y1="155.37379"
      x2="42.56478"
      y2="186.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M136.12716,92.20308l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.20279,9.2028a16,16,0,0,1,0,22.62742L96,240,16,160,92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028A8,8,0,0,0,136.12716,92.20308Z"
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
      x1="72"
      y1="104"
      x2="151.99999"
      y2="183.99999"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="101.75578"
      y1="183.37379"
      x2="70.56478"
      y2="214.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="73.75578"
      y1="155.37379"
      x2="42.56478"
      y2="186.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M136.12716,92.20308l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.20279,9.2028a16,16,0,0,1,0,22.62742L96,240,16,160,92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028A8,8,0,0,0,136.12716,92.20308Z"
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
      x1="72"
      y1="104"
      x2="151.99999"
      y2="183.99999"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.75578"
      y1="183.37379"
      x2="70.56478"
      y2="214.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="73.75578"
      y1="155.37379"
      x2="42.56478"
      y2="186.56478"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.12716,92.20308l54.90228-61.17364a24,24,0,1,1,33.94112,33.94112l-61.17364,54.90228a8,8,0,0,0-.31342,11.61065l9.20279,9.2028a16,16,0,0,1,0,22.62742L96,240,16,160,92.68629,83.31371a16,16,0,0,1,22.62742,0l9.2028,9.2028A8,8,0,0,0,136.12716,92.20308Z"
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

const PaintBrushHousehold = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

PaintBrushHousehold.displayName = "PaintBrushHousehold";

export default PaintBrushHousehold;
