/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M240.5,104.5l-96,96a12.1,12.1,0,0,1-17,0L36,109v43a12,12,0,0,1-24,0V80A12,12,0,0,1,24,68H96a12,12,0,0,1,0,24H53l83,83,87.5-87.5a12,12,0,0,1,17,17Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M237.7,101.7l-96,96a8.2,8.2,0,0,1-11.4,0L32,99.3V152a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H43.3L136,180.7l90.3-90.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M237.7,101.7l-96,96a8.2,8.2,0,0,1-11.4,0L60,127.3,29.7,157.7A8.3,8.3,0,0,1,24,160a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8L71.3,116,136,180.7l90.3-90.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M236.2,100.2l-96,96a5.8,5.8,0,0,1-8.4,0L30,94.5V152a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H38.5L136,183.5l91.8-91.7a5.9,5.9,0,0,1,8.4,8.4Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M237.7,101.7l-96,96a8.2,8.2,0,0,1-11.4,0L32,99.3V152a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H43.3L136,180.7l90.3-90.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M234.8,98.8l-96,96a3.9,3.9,0,0,1-5.6,0L28,89.7V152a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H33.7L136,186.3l93.2-93.1a4,4,0,1,1,5.6,5.6Z" />
  </>
);

const ArrowElbowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowElbowLeft.displayName = "ArrowElbowLeft";

export default ArrowElbowLeft;
