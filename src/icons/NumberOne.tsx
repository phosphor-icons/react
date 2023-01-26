/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M144,32V224a12,12,0,0,1-24,0V54.4L90.7,74A12.1,12.1,0,0,1,74,70.6,11.9,11.9,0,0,1,77.3,54l48-32a12.2,12.2,0,0,1,12.4-.6A12,12,0,0,1,144,32Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M140,32V224a8,8,0,0,1-16,0V46.9L88.4,70.6a8,8,0,0,1-11.1-2.2,8.1,8.1,0,0,1,2.3-11.1l48-32a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,32Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M140,32V224a8,8,0,0,1-16,0V47L88.4,70.6a8,8,0,0,1-11.1-2.2,8.1,8.1,0,0,1,2.3-11.1l48-32a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,32Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M138,32V224a6,6,0,0,1-12,0V43.2L87.3,69a6,6,0,1,1-6.6-10l48-32a6,6,0,0,1,9.3,5Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M140,32V224a8,8,0,0,1-16,0V46.9L88.4,70.6a8,8,0,0,1-11.1-2.2,8.1,8.1,0,0,1,2.3-11.1l48-32a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,32Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M136,32V224a4,4,0,0,1-8,0V39.5L86.2,67.3a4,4,0,0,1-5.5-1.1,3.8,3.8,0,0,1,1.1-5.5l48-32a4,4,0,0,1,4.1-.2A3.9,3.9,0,0,1,136,32Z" />
  </>
);

const NumberOne = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

NumberOne.displayName = "NumberOne";

export default NumberOne;
