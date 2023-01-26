/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.5,200.5a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,64V168a8,8,0,0,1-16,0V83.3L69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L172.7,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,64V168a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L140,127.3,69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L128.7,116,82.3,69.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M198,64V168a6,6,0,0,1-12,0V78.5L68.2,196.2a5.9,5.9,0,0,1-8.4-8.4L177.5,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,64V168a8,8,0,0,1-16,0V83.3L69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L172.7,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196,64V168a4,4,0,0,1-8,0V73.7L66.8,194.8a3.9,3.9,0,0,1-5.6,0,3.9,3.9,0,0,1,0-5.6L182.3,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z" />
  </>
);

const ArrowUpRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowUpRight.displayName = "ArrowUpRight";

export default ArrowUpRight;
