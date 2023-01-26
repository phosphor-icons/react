/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M176,12H80A28.1,28.1,0,0,0,52,40V216a28.1,28.1,0,0,0,28,28h96a28.1,28.1,0,0,0,28-28V40A28.1,28.1,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="64" y="56" width="128" height="144" />
    </g>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM80,32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M176,18H80A22.1,22.1,0,0,0,58,40V216a22.1,22.1,0,0,0,22,22h96a22.1,22.1,0,0,0,22-22V40A22.1,22.1,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M176,20H80A20.1,20.1,0,0,0,60,40V216a20.1,20.1,0,0,0,20,20h96a20.1,20.1,0,0,0,20-20V40A20.1,20.1,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z" />
  </>
);

const DeviceMobile = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

DeviceMobile.displayName = "DeviceMobile";

export default DeviceMobile;
