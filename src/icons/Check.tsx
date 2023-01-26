/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M104,196a12.2,12.2,0,0,1-8.5-3.5l-56-56a12,12,0,0,1,17-17L104,167,207.5,63.5a12,12,0,0,1,17,17l-112,112A12.2,12.2,0,0,1,104,196Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M104,190a5.8,5.8,0,0,1-4.2-1.8l-56-56a5.9,5.9,0,0,1,8.4-8.4L104,175.5,211.8,67.8a5.9,5.9,0,0,1,8.4,8.4l-112,112A5.8,5.8,0,0,1,104,190Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M104,188a3.9,3.9,0,0,1-2.8-1.2l-56-56a4,4,0,1,1,5.6-5.6L104,178.3,213.2,69.2a4,4,0,1,1,5.6,5.6l-112,112A3.9,3.9,0,0,1,104,188Z" />
  </>
);

const Check = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Check.displayName = "Check";

export default Check;
