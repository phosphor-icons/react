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
      d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M176,23a60.1,60.1,0,0,1,52,30"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M66.9,240a121.1,121.1,0,0,1-26.8-32"
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
      d="M158.6,93.3a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l-16-27.7A20,20,0,0,1,86,47.5l8,13.9a20,20,0,0,1,34.6-20Z"
      opacity="0.2"
    />
    <path
      d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M81.1,240A110.3,110.3,0,0,1,48,204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,31a51.7,51.7,0,0,1,45,26"
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
    <path d="M220.2,104l-20-34.7a28.1,28.1,0,0,0-47.3-1.9l-17.3-30A28.1,28.1,0,0,0,97.3,27.1a29.4,29.4,0,0,0-9.9,9.6,27.9,27.9,0,0,0-11.5-6.2,27.1,27.1,0,0,0-21.2,2.8A27.9,27.9,0,0,0,44.4,71.5l3.4,5.8A28.5,28.5,0,0,0,36,81a28.1,28.1,0,0,0-10.2,38.2l42,72.8a88,88,0,1,0,152.4-88Zm-6.7,62.6A71.2,71.2,0,0,1,180,210.3,72.1,72.1,0,0,1,81.6,184l-42-72.8a12,12,0,0,1,20.8-12l22,38.1a8,8,0,1,0,13.9-8l-22-38.1h0l-16-27.7a12,12,0,0,1-1.2-9.1,11.8,11.8,0,0,1,5.6-7.3,12,12,0,0,1,9.1-1.2,12.5,12.5,0,0,1,7.3,5.6L87,65.4h.1l26,45a7.7,7.7,0,0,0,6.9,4,7.3,7.3,0,0,0,4-1.1,8,8,0,0,0,2.9-10.9l-26-45h0a12,12,0,1,1,20.8-12l30,51.9h0l6.3,11a48.1,48.1,0,0,0-10.9,61,8,8,0,0,0,13.8-8,32,32,0,0,1,11.7-43.7,8.1,8.1,0,0,0,3.8-4.9,8.4,8.4,0,0,0-.8-6l-10-17.4a12,12,0,0,1,13.5-17.5,11.8,11.8,0,0,1,7.2,5.5l20,34.7A70.9,70.9,0,0,1,213.5,166.6Zm-125.8,78a8.2,8.2,0,0,1-6.6,3.4,8.6,8.6,0,0,1-4.6-1.4A117.9,117.9,0,0,1,41.1,208a8,8,0,1,1,13.8-8,102.6,102.6,0,0,0,30.8,33.4A8.1,8.1,0,0,1,87.7,244.6ZM168,31a8,8,0,0,1,8-8h0a60.2,60.2,0,0,1,52,30,7.9,7.9,0,0,1-3,10.9,7.1,7.1,0,0,1-4,1.1,8,8,0,0,1-6.9-4A44,44,0,0,0,176,39,8,8,0,0,1,168,31Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M81.1,240A110.3,110.3,0,0,1,48,204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M176,31a51.7,51.7,0,0,1,45,26"
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
      d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M81.1,240A110.3,110.3,0,0,1,48,204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M176,31a51.7,51.7,0,0,1,45,26"
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
      d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M81.1,240A110.3,110.3,0,0,1,48,204"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,31a51.7,51.7,0,0,1,45,26"
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

const HandWaving = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HandWaving.displayName = "HandWaving";

export default HandWaving;
