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
      d="M156,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,204,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M92,176V160a19.96611,19.96611,0,0,1,7.739-15.80207"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M52,176V160a60.01385,60.01385,0,0,1,90.83207-51.48275"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M12,176V160A100.00166,100.00166,0,0,1,177.59331,84.51611"
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
      d="M152,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,200,200Z"
      opacity="0.2"
    />
    <path
      d="M152,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,200,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M16,176V160A96.00006,96.00006,0,0,1,178.92582,91.17453"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,176V160a64.00543,64.00543,0,0,1,101.86674-51.60093"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,176V160a32.02814,32.02814,0,0,1,39.42145-31.135"
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
    <path d="M248,160a48.054,48.054,0,0,1-48,48H152c-17.645,0-32-14.75391-32-32.88867s14.355-32.88867,32-32.88867a31.5421,31.5421,0,0,1,3.33545.17578A48.00491,48.00491,0,0,1,248,160ZM112,72a87.53238,87.53238,0,0,1,61.34814,24.91016,8.00027,8.00027,0,0,0,11.15528-11.47071A104.00011,104.00011,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.09957,88.09957,0,0,1,112,72Zm0,32a55.55123,55.55123,0,0,1,33.12842,10.84473A7.99959,7.99959,0,1,0,154.605,101.9541,72.00452,72.00452,0,0,0,40,160v16a8,8,0,0,0,16,0V160A56.06322,56.06322,0,0,1,112,104Zm15.20508,26.71289a7.99944,7.99944,0,0,0-5.936-9.63086A40.02529,40.02529,0,0,0,72,160v16a8,8,0,0,0,16,0V160a24.02909,24.02909,0,0,1,29.57373-23.35156A7.99553,7.99553,0,0,0,127.20508,130.71289Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M152,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,200,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M16,176V160A96.00006,96.00006,0,0,1,178.92582,91.17453"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M48,176V160a64.00543,64.00543,0,0,1,101.86674-51.60093"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,176V160a32.02814,32.02814,0,0,1,39.42145-31.135"
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
      d="M152,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,200,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M16,176V160A96.00006,96.00006,0,0,1,178.92582,91.17453"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M48,176V160a64.00543,64.00543,0,0,1,101.86674-51.60093"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,176V160a32.02814,32.02814,0,0,1,39.42145-31.135"
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
      d="M152,200c-13.25483,0-24-11.14314-24-24.88889s10.74517-24.88889,24-24.88889a23.18816,23.18816,0,0,1,8.81117,1.73087l-.00141-.0003A40.00363,40.00363,0,1,1,200,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M16,176V160A96.00006,96.00006,0,0,1,178.92582,91.17453"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,176V160a64.00543,64.00543,0,0,1,101.86674-51.60093"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,176V160a32.02814,32.02814,0,0,1,39.42145-31.135"
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

const RainbowCloud = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

RainbowCloud.displayName = "RainbowCloud";

export default RainbowCloud;
