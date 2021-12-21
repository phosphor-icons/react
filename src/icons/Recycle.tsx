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
    <polyline
      points="152 232 128 208 152 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="194.6 75.2 185.8 108 153.1 99.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="79 140.8 70.2 108 37.4 116.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,208h88a16,16,0,0,0,13.8-24l-19.9-34.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M185.8,108l-44-76a15.9,15.9,0,0,0-27.6,0l-20,34.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M70.2,108l-44,76A16,16,0,0,0,40,208H80"
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
    <polyline
      points="152 232 128 208 152 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="194.6 75.2 185.8 108 153.1 99.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79 140.8 70.2 108 37.4 116.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,208h88a16,16,0,0,0,13.8-24l-23.9-41.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M70.2,108l-44,76A16,16,0,0,0,40,208H88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M185.8,108l-44-76a15.9,15.9,0,0,0-27.6,0l-24,41.4"
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
    <path d="M236.8,204A23.9,23.9,0,0,1,216,216H160v16a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-24-24.1A7.9,7.9,0,0,1,120,208a8.1,8.1,0,0,1,2.3-5.7l24-24a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,160,184v16h56a7.9,7.9,0,0,0,6.9-4,7.8,7.8,0,0,0,0-8l-24-41.4a8,8,0,0,1,13.9-8L236.7,180A23.7,23.7,0,0,1,236.8,204ZM88,200H40a7.9,7.9,0,0,1-6.9-4,7.8,7.8,0,0,1,0-8l28-48.3,13.9,8a8,8,0,0,0,4,1.1,7.8,7.8,0,0,0,4.8-1.7,8,8,0,0,0,2.9-8.4l-8.8-32.8a8.1,8.1,0,0,0-3.7-4.8,7.7,7.7,0,0,0-6.1-.8L35.3,109a8,8,0,0,0-5.8,6.7,7.9,7.9,0,0,0,3.9,8l13.8,8L19.3,180A23.9,23.9,0,0,0,40,216H88a8,8,0,0,0,0-16ZM128,32a7.8,7.8,0,0,1,6.9,4l28,48.3-13.8,8a7.9,7.9,0,0,0,1.9,14.6l32.8,8.8,2,.3a8.1,8.1,0,0,0,7.8-5.9l8.8-32.8a8.1,8.1,0,0,0-2.9-8.5,8,8,0,0,0-8.9-.5l-13.9,8L148.8,28a24,24,0,0,0-41.6,0L83.3,69.4a8,8,0,1,0,13.8,8l24-41.4A7.8,7.8,0,0,1,128,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="152 232 128 208 152 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="194.6 75.2 185.8 108 153.1 99.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="79 140.8 70.2 108 37.4 116.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,208h88a16,16,0,0,0,13.8-24l-23.9-41.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M70.2,108l-44,76A16,16,0,0,0,40,208H88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M185.8,108l-44-76a15.9,15.9,0,0,0-27.6,0l-24,41.4"
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
    <polyline
      points="152 232 128 208 152 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="194.6 75.2 185.8 108 153.1 99.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="79 140.8 70.2 108 37.4 116.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,208h88a16,16,0,0,0,13.8-24l-23.9-41.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M70.2,108l-44,76A16,16,0,0,0,40,208H88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M185.8,108l-44-76a15.9,15.9,0,0,0-27.6,0l-24,41.4"
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
    <polyline
      points="152 232 128 208 152 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="194.6 75.2 185.8 108 153.1 99.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79 140.8 70.2 108 37.4 116.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,208h88a16,16,0,0,0,13.8-24l-23.9-41.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M70.2,108l-44,76A16,16,0,0,0,40,208H88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M185.8,108l-44-76a15.9,15.9,0,0,0-27.6,0l-24,41.4"
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

const Recycle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Recycle.displayName = "Recycle";

export default Recycle;
