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
      d="M108,128a20,20,0,0,1,40,0,210.5,210.5,0,0,1-25,99.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M128,68a60,60,0,0,1,60,60c0,8.1-.4,16.1-1.1,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M51.3,192.2A130.4,130.4,0,0,0,68,128,59.7,59.7,0,0,1,88,83.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M103.3,168A168.7,168.7,0,0,1,83,217.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M179.8,192a233.4,233.4,0,0,1-8.4,26.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M22.3,160A91.7,91.7,0,0,0,28,128h0a100,100,0,0,1,200,0h0a293.3,293.3,0,0,1-7,64"
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
      d="M50.7,184.9A127.4,127.4,0,0,0,64,128,64.2,64.2,0,0,1,88,78"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128a191.2,191.2,0,0,1-24,93"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,128a32,32,0,0,1,64,0,222.3,222.3,0,0,1-21.3,95.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.6,184a294.6,294.6,0,0,0,5.4-56,96,96,0,0,0-192,0,94.4,94.4,0,0,1-5.5,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.8,160a161.9,161.9,0,0,1-18.1,47.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120,64.5a70.1,70.1,0,0,1,8-.5,64,64,0,0,1,64,64,260.6,260.6,0,0,1-2,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.9,192c-1.5,5.9-3.2,11.8-5.1,17.5"
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
    <path d="M128,24A104.2,104.2,0,0,0,24,128a88,88,0,0,1-5,29.3,8.1,8.1,0,0,0,4.9,10.3,8.2,8.2,0,0,0,2.6.4,8.1,8.1,0,0,0,7.6-5.3A104.5,104.5,0,0,0,40,128a88,88,0,0,1,176,0,283.6,283.6,0,0,1-5.3,54.5,8.1,8.1,0,0,0,6.3,9.4h1.6a7.9,7.9,0,0,0,7.8-6.4A299.9,299.9,0,0,0,232,128,104.1,104.1,0,0,0,128,24Z" />
    <path d="M93,84.3A8,8,0,0,0,83,71.8,71.6,71.6,0,0,0,56,128a118.7,118.7,0,0,1-12.5,53.4,8.1,8.1,0,0,0,3.6,10.7,7.8,7.8,0,0,0,3.6.8,8.1,8.1,0,0,0,7.2-4.4A136.1,136.1,0,0,0,72,128,55.9,55.9,0,0,1,93,84.3Z" />
    <path d="M128,120a8,8,0,0,0-8,8,183.3,183.3,0,0,1-23,89.1,8.1,8.1,0,0,0,3.2,10.9,7.5,7.5,0,0,0,3.8,1,8,8,0,0,0,7-4.1A199.8,199.8,0,0,0,136,128,8,8,0,0,0,128,120Z" />
    <path d="M128,88a40.1,40.1,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.3,214.3,0,0,1-20.5,92,8,8,0,0,0,3.8,10.7,8.3,8.3,0,0,0,3.4.7,8.1,8.1,0,0,0,7.3-4.6A230,230,0,0,0,168,128,40.1,40.1,0,0,0,128,88Z" />
    <path d="M94.4,152.2a7.9,7.9,0,0,0-9.4,6.2,154.8,154.8,0,0,1-17.2,45.5,8,8,0,0,0,2.9,10.9,8.3,8.3,0,0,0,4,1.1,8.2,8.2,0,0,0,6.9-4,163.2,163.2,0,0,0,19-50.3A7.9,7.9,0,0,0,94.4,152.2Z" />
    <path d="M128,56a68,68,0,0,0-9,.6,8,8,0,1,0,2,15.8c2.3-.2,4.7-.4,7-.4a56,56,0,0,1,56,56,245.7,245.7,0,0,1-1.9,31,7.9,7.9,0,0,0,6.9,8.9h1a8.1,8.1,0,0,0,8-7,279.7,279.7,0,0,0,2-33A72.1,72.1,0,0,0,128,56Z" />
    <path d="M185.9,184.3a7.9,7.9,0,0,0-9.7,5.7c-1.5,5.7-3.2,11.4-5,17a7.9,7.9,0,0,0,5,10.1,7.8,7.8,0,0,0,2.6.4,7.9,7.9,0,0,0,7.5-5.4c2-6,3.8-12,5.4-18.1A8,8,0,0,0,185.9,184.3Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M50.7,184.9A127.4,127.4,0,0,0,64,128,64.2,64.2,0,0,1,88,78"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,128a191.2,191.2,0,0,1-24,93"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,128a32,32,0,0,1,64,0,222.3,222.3,0,0,1-21.3,95.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M218.6,184a294.6,294.6,0,0,0,5.4-56,96,96,0,0,0-192,0,94.4,94.4,0,0,1-5.5,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.8,160a161.9,161.9,0,0,1-18.1,47.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M120,64.5a70.1,70.1,0,0,1,8-.5,64,64,0,0,1,64,64,260.6,260.6,0,0,1-2,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M183.9,192c-1.5,5.9-3.2,11.8-5.1,17.5"
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
      d="M50.7,184.9A127.4,127.4,0,0,0,64,128,64.2,64.2,0,0,1,88,78"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,128a191.2,191.2,0,0,1-24,93"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,128a32,32,0,0,1,64,0,222.3,222.3,0,0,1-21.3,95.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M218.6,184a294.6,294.6,0,0,0,5.4-56,96,96,0,0,0-192,0,94.4,94.4,0,0,1-5.5,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.8,160a161.9,161.9,0,0,1-18.1,47.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M120,64.5a70.1,70.1,0,0,1,8-.5,64,64,0,0,1,64,64,260.6,260.6,0,0,1-2,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M183.9,192c-1.5,5.9-3.2,11.8-5.1,17.5"
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
      d="M50.7,184.9A127.4,127.4,0,0,0,64,128,64.2,64.2,0,0,1,88,78"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,128a191.2,191.2,0,0,1-24,93"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,128a32,32,0,0,1,64,0,222.3,222.3,0,0,1-21.3,95.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.6,184a294.6,294.6,0,0,0,5.4-56,96,96,0,0,0-192,0,94.4,94.4,0,0,1-5.5,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.8,160a161.9,161.9,0,0,1-18.1,47.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120,64.5a70.1,70.1,0,0,1,8-.5,64,64,0,0,1,64,64,260.6,260.6,0,0,1-2,32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.9,192c-1.5,5.9-3.2,11.8-5.1,17.5"
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

const Fingerprint = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Fingerprint.displayName = "Fingerprint";

export default Fingerprint;
