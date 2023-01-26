/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M236,184a12,12,0,0,1-12,12H161a19.7,19.7,0,0,1-17.9-11.1L92.6,84H32a12,12,0,0,1,0-24H95.1a19.7,19.7,0,0,1,17.8,11.1L163.4,172H224A12,12,0,0,1,236,184ZM156,84h68a12,12,0,0,0,0-24H156a12,12,0,0,0,0,24Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M232,184a8,8,0,0,1-8,8H161a16.2,16.2,0,0,1-14.4-8.8L95.1,80H32a8,8,0,0,1,0-16H95.1a16,16,0,0,1,14.3,8.8L161,176h63A8,8,0,0,1,232,184ZM152,80h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M144,72a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H152A8,8,0,0,1,144,72Zm80,104H161L109.4,72.8A16,16,0,0,0,95.1,64H32a8,8,0,0,0,0,16H95.1l51.5,103.2A16.2,16.2,0,0,0,161,192h63a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230,184a6,6,0,0,1-6,6H161a14.1,14.1,0,0,1-12.6-7.7L96.9,79.1A2.1,2.1,0,0,0,95.1,78H32a6,6,0,0,1,0-12H95.1a14,14,0,0,1,12.5,7.7l51.6,103.2A1.9,1.9,0,0,0,161,178h63A6,6,0,0,1,230,184ZM152,78h72a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,184a8,8,0,0,1-8,8H161a16.2,16.2,0,0,1-14.4-8.8L95.1,80H32a8,8,0,0,1,0-16H95.1a16,16,0,0,1,14.3,8.8L161,176h63A8,8,0,0,1,232,184ZM152,80h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228,184a4,4,0,0,1-4,4H161a12,12,0,0,1-10.8-6.6L98.6,78.2A3.7,3.7,0,0,0,95.1,76H32a4,4,0,0,1,0-8H95.1a12,12,0,0,1,10.7,6.6l51.6,103.2A3.9,3.9,0,0,0,161,180h63A4,4,0,0,1,228,184ZM152,76h72a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Z" />
  </>
);

const Option = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Option.displayName = "Option";

export default Option;
