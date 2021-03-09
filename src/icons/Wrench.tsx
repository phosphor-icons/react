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
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
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
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
      opacity="0.2"
    />
    <path
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
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
    <path d="M210.91162,146.91211a72.37653,72.37653,0,0,1-79.84424,15.03613L79.0249,222.2002q-.19116.22119-.39746.42773a32.00021,32.00021,0,0,1-45.25537-45.25488c.1377-.1377.28076-.27051.42773-.39844l60.25293-52.043a72.02489,72.02489,0,0,1,94.06153-95.23437A8.004,8.004,0,0,1,190.648,42.72461L151.71387,81.6582l3.77148,18.85645,18.856,3.77148,38.93457-38.93457a8.00429,8.00429,0,0,1,13.02685,2.53418A71.72729,71.72729,0,0,1,210.91162,146.91211Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
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
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
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
      d="M184.99131,37.06756,143.02944,79.02944l5.65685,28.28427,28.28427,5.65685,41.96188-41.96187.0041-.00174a64.02489,64.02489,0,0,1-89.88113,81.03367l.00123-.00214L72.97056,216.97056a24,24,0,0,1-33.94112-33.94112L103.9608,126.944l-.00137.0007a64.02489,64.02489,0,0,1,81.03363-89.88122Z"
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

const Wrench = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Wrench.displayName = "Wrench";

export default Wrench;
