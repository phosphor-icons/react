/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M176,12H80A28.1,28.1,0,0,0,52,40V216a28.1,28.1,0,0,0,28,28h96a28.1,28.1,0,0,0,28-28V40A28.1,28.1,0,0,0,176,12Zm4,204a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM164,64a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,64Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect
        x="24"
        y="64"
        width="208"
        height="128"
        rx="16"
        transform="translate(256) rotate(90)"
      />
    </g>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" />
    <path d="M160,48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M176,18H80A22.1,22.1,0,0,0,58,40V216a22.1,22.1,0,0,0,22,22h96a22.1,22.1,0,0,0,22-22V40A22.1,22.1,0,0,0,176,18Zm10,198a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V40A10,10,0,0,1,80,30h96a10,10,0,0,1,10,10ZM166,56a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,56Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M176,20H80A20.1,20.1,0,0,0,60,40V216a20.1,20.1,0,0,0,20,20h96a20.1,20.1,0,0,0,20-20V40A20.1,20.1,0,0,0,176,20Zm12,196a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V40A12,12,0,0,1,80,28h96a12,12,0,0,1,12,12ZM164,56a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,56Z" />
  </>
);

const DeviceMobileSpeaker = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

DeviceMobileSpeaker.displayName = "DeviceMobileSpeaker";

export default DeviceMobileSpeaker;
