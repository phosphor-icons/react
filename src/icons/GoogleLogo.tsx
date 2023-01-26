/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,228A100,100,0,1,1,198.7,57.3a12,12,0,0,1,0,17,12.2,12.2,0,0,1-17,0A75.2,75.2,0,0,0,128,52a76,76,0,1,0,75.1,88H128a12,12,0,0,1,0-24h88a12,12,0,0,1,12,12A100.2,100.2,0,0,1,128,228Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M128,224A96,96,0,1,1,195.9,60.1a8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0,80,80,0,1,0,23,64.6H128a8,8,0,0,1,0-16h88a8,8,0,0,1,8,8A96.2,96.2,0,0,1,128,224Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,184A80,80,0,1,1,184.6,71.4a8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0A64.1,64.1,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.1,80.1,0,0,1,128,208Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,222A94,94,0,1,1,194.5,61.5a6.1,6.1,0,0,1,0,8.5,5.9,5.9,0,0,1-8.5,0,82,82,0,1,0,23.8,64H128a6,6,0,0,1,0-12h88a6,6,0,0,1,6,6A94.1,94.1,0,0,1,128,222Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,224A96,96,0,1,1,195.9,60.1a8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0,80,80,0,1,0,23,64.6H128a8,8,0,0,1,0-16h88a8,8,0,0,1,8,8A96.2,96.2,0,0,1,128,224Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,220A92,92,0,1,1,193.1,62.9a4.2,4.2,0,0,1,0,5.7,4,4,0,0,1-5.7,0A84,84,0,1,0,211.9,132H128a4,4,0,0,1,0-8h88a4,4,0,0,1,4,4A92.1,92.1,0,0,1,128,220Z" />
  </>
);

const GoogleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

GoogleLogo.displayName = "GoogleLogo";

export default GoogleLogo;
