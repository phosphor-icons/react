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
      d="M143.99951,79.46017V203.05573a8,8,0,0,0,4.42229,7.15542L167.07945,219.54a8,8,0,0,0,11.33885-5.21513L191.99951,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z"
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
    <path d="M151.99951,160h40a40,40,0,0,0,0-80h-40Z" opacity="0.2" />
    <path
      d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z"
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
    <path d="M240,120a48.055,48.055,0,0,0-48-48H152.0166c-.51855-.00195-52.38086-.68945-101.72656-42.07617A15.999,15.999,0,0,0,23.999,42.168V197.832a15.83932,15.83932,0,0,0,9.2295,14.49121,16.07273,16.07273,0,0,0,6.80664,1.52539,15.91249,15.91249,0,0,0,10.2539-3.77148C88.1665,178.30859,127.52344,170.521,144,168.61572v35.103a15.965,15.965,0,0,0,7.124,13.3125l10.99317,7.3291a16.00058,16.00058,0,0,0,24.39648-9.43262L198.354,167.56641A48.06327,48.06327,0,0,0,240,120Zm-69.00879,91.04688L160,203.71875V168h21.75391ZM192,152H160V88h32a32,32,0,0,1,0,64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z"
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
      d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z"
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
      d="M152,80V203.71853a8,8,0,0,0,3.5624,6.6564l10.99213,7.32809a8,8,0,0,0,12.19874-4.71612L192,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,160a40,40,0,0,0,0-80H152S97.54828,80,45.14894,36.05237A7.99844,7.99844,0,0,0,32,42.16761V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54828,160,152,160,152,160Z"
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

const Megaphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Megaphone.displayName = "Megaphone";

export default Megaphone;
