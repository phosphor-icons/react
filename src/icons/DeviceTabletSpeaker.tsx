/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M192,20H64A28.1,28.1,0,0,0,36,48V208a28.1,28.1,0,0,0,28,28H192a28.1,28.1,0,0,0,28-28V48A28.1,28.1,0,0,0,192,20Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM172,72a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,72Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="16"
        transform="translate(256) rotate(90)"
      />
    </g>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24Zm8,184a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" />
    <path d="M160,56H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24ZM160,72H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M192,26H64A22.1,22.1,0,0,0,42,48V208a22.1,22.1,0,0,0,22,22H192a22.1,22.1,0,0,0,22-22V48A22.1,22.1,0,0,0,192,26Zm10,182a10,10,0,0,1-10,10H64a10,10,0,0,1-10-10V48A10,10,0,0,1,64,38H192a10,10,0,0,1,10,10ZM166,64a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,64Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M192,24H64A24.1,24.1,0,0,0,40,48V208a24.1,24.1,0,0,0,24,24H192a24.1,24.1,0,0,0,24-24V48A24.1,24.1,0,0,0,192,24Zm8,184a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8ZM168,64a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,64Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M192,28H64A20.1,20.1,0,0,0,44,48V208a20.1,20.1,0,0,0,20,20H192a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,192,28Zm12,180a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V48A12,12,0,0,1,64,36H192a12,12,0,0,1,12,12ZM164,64a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,64Z" />
  </>
);

const DeviceTabletSpeaker = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

DeviceTabletSpeaker.displayName = "DeviceTabletSpeaker";

export default DeviceTabletSpeaker;
