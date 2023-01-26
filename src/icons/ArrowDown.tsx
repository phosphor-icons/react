/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208.5,152.5l-72,72a12.1,12.1,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.5-51.5a12,12,0,0,1,17,17Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M205.7,149.7l-72,72a8.2,8.2,0,0,1-11.4,0l-72-72a8.1,8.1,0,0,1,11.4-11.4L120,196.7V40a8,8,0,0,1,16,0V196.7l58.3-58.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M205.7,149.7l-72,72a8.2,8.2,0,0,1-11.4,0l-72-72a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,205.7,149.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M204.2,148.2l-72,72a5.8,5.8,0,0,1-8.4,0l-72-72a5.9,5.9,0,0,1,8.4-8.4L122,201.5V40a6,6,0,0,1,12,0V201.5l61.8-61.7a5.9,5.9,0,0,1,8.4,8.4Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M205.7,149.7l-72,72a8.2,8.2,0,0,1-11.4,0l-72-72a8.1,8.1,0,0,1,11.4-11.4L120,196.7V40a8,8,0,0,1,16,0V196.7l58.3-58.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M202.8,146.8l-72,72a3.9,3.9,0,0,1-5.6,0l-72-72a4,4,0,0,1,5.6-5.6L124,206.3V40a4,4,0,0,1,8,0V206.3l65.2-65.1a4,4,0,0,1,5.6,5.6Z" />
  </>
);

const ArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowDown.displayName = "ArrowDown";

export default ArrowDown;
