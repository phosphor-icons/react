/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M200.5,200.5a12.1,12.1,0,0,1-17,0L76,93v75a12,12,0,0,1-24,0V64A12,12,0,0,1,64,52H168a12,12,0,0,1,0,24H93L200.5,183.5A12,12,0,0,1,200.5,200.5Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M197.7,197.7a8.2,8.2,0,0,1-11.4,0L72,83.3V168a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H168a8,8,0,0,1,0,16H83.3L197.7,186.3A8.1,8.1,0,0,1,197.7,197.7Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M197.7,197.7a8.2,8.2,0,0,1-11.4,0L116,127.3,69.7,173.7A8.3,8.3,0,0,1,64,176a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8L127.3,116l70.4,70.3A8.1,8.1,0,0,1,197.7,197.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M196.2,196.2a5.8,5.8,0,0,1-8.4,0L70,78.5V168a6,6,0,0,1-12,0V64a6,6,0,0,1,6-6H168a6,6,0,0,1,0,12H78.5L196.2,187.8A5.8,5.8,0,0,1,196.2,196.2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M197.7,197.7a8.2,8.2,0,0,1-11.4,0L72,83.3V168a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H168a8,8,0,0,1,0,16H83.3L197.7,186.3A8.1,8.1,0,0,1,197.7,197.7Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M194.8,194.8a3.9,3.9,0,0,1-5.6,0L68,73.7V168a4,4,0,0,1-8,0V64a4,4,0,0,1,4-4H168a4,4,0,0,1,0,8H73.7L194.8,189.2A3.9,3.9,0,0,1,194.8,194.8Z" />
  </>
);

const ArrowUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowUpLeft.displayName = "ArrowUpLeft";

export default ArrowUpLeft;
