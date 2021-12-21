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
      d="M176,128a240.3,240.3,0,0,1-17.9,91.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,293.3,293.3,0,0,1-7.1,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M23.3,168A95.5,95.5,0,0,0,32,128,95.4,95.4,0,0,1,64,56.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M110.6,208c-2.1,4.4-4.3,8.8-6.6,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,128a189.6,189.6,0,0,1-6.1,48"
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
      d="M176,128a238.5,238.5,0,0,1-18,91.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,287.3,287.3,0,0,1-7.2,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M23.3,168A95.5,95.5,0,0,0,32,128,95.4,95.4,0,0,1,64,56.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.6,208c-2.1,4.4-4.3,8.8-6.6,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128a189.6,189.6,0,0,1-6.1,48"
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
    <path d="M176,120a8,8,0,0,0-8,8,229.3,229.3,0,0,1-17.4,88.2,8,8,0,0,0,7.4,11,7.9,7.9,0,0,0,7.4-5A246.5,246.5,0,0,0,184,128,8,8,0,0,0,176,120Z" />
    <path d="M128,88a40.4,40.4,0,0,1,29.8,13.3,8,8,0,0,0,11.3.7,8,8,0,0,0,.6-11.3A56,56,0,0,0,72,128a136.4,136.4,0,0,1-17,65.9,8,8,0,0,0,3.1,10.8,8.1,8.1,0,0,0,3.9,1,7.9,7.9,0,0,0,7-4.1A152.2,152.2,0,0,0,88,128,40.1,40.1,0,0,1,128,88Z" />
    <path d="M69.3,62.4A8,8,0,1,0,58.6,50.5,104.2,104.2,0,0,0,24,128a87.6,87.6,0,0,1-8,36.7,8.1,8.1,0,0,0,3.9,10.6,8.3,8.3,0,0,0,3.4.7,7.8,7.8,0,0,0,7.2-4.7A102.4,102.4,0,0,0,40,128,88.3,88.3,0,0,1,69.3,62.4Z" />
    <path d="M128,24a104.5,104.5,0,0,0-34.7,5.9,8.1,8.1,0,0,0-4.9,10.2A8,8,0,0,0,98.6,45,88.1,88.1,0,0,1,216,128a281.8,281.8,0,0,1-7,62.2,8.2,8.2,0,0,0,6.1,9.6l1.8.2a7.9,7.9,0,0,0,7.7-6.2A296.3,296.3,0,0,0,232,128,104.2,104.2,0,0,0,128,24Z" />
    <path d="M113.9,200.7a8.1,8.1,0,0,0-10.6,4c-1.9,4.2-4.1,8.4-6.3,12.4a8.1,8.1,0,0,0,3.1,10.9,7.8,7.8,0,0,0,3.9,1,8.1,8.1,0,0,0,7-4.1c2.4-4.4,4.7-9,6.8-13.6A8,8,0,0,0,113.9,200.7Z" />
    <path d="M128,120a8,8,0,0,0-8,8,186.5,186.5,0,0,1-5.8,46,8,8,0,0,0,5.7,9.8l2,.2a8.1,8.1,0,0,0,7.8-6,199.8,199.8,0,0,0,6.3-50A8,8,0,0,0,128,120Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M176,128a240.3,240.3,0,0,1-17.9,91.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,293.3,293.3,0,0,1-7.1,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M23.3,168A95.5,95.5,0,0,0,32,128,95.7,95.7,0,0,1,64,56.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M110.6,208c-2.1,4.4-4.2,8.8-6.6,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,128a189.6,189.6,0,0,1-6.1,48"
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
      d="M176,128a240.3,240.3,0,0,1-17.9,91.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,293.3,293.3,0,0,1-7.1,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M23.3,168A95.5,95.5,0,0,0,32,128,95.7,95.7,0,0,1,64,56.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M110.6,208c-2,4.4-4.2,8.8-6.6,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,128a189.6,189.6,0,0,1-6.1,48"
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
      d="M176,128a240.3,240.3,0,0,1-17.9,91.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M163.8,96A48,48,0,0,0,80,128a142.6,142.6,0,0,1-18,69.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,37.5A94.4,94.4,0,0,1,128,32a96,96,0,0,1,96,96,293.3,293.3,0,0,1-7.1,64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M23.3,168A95.5,95.5,0,0,0,32,128,95.7,95.7,0,0,1,64,56.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M110.6,208c-2,4.4-4.2,8.8-6.6,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128a189.6,189.6,0,0,1-6.1,48"
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

const FingerprintSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FingerprintSimple.displayName = "FingerprintSimple";

export default FingerprintSimple;
