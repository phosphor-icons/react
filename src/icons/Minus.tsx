/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,140H40a12,12,0,0,1,0-24H216a12,12,0,0,1,0,24Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,134H40a6,6,0,0,1,0-12H216a6,6,0,0,1,0,12Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,132H40a4,4,0,0,1,0-8H216a4,4,0,0,1,0,8Z" />
  </>
);

const Minus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Minus.displayName = "Minus";

export default Minus;
